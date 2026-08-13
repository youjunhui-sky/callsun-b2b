#!/usr/bin/env bash
# Callsun B2B — D1 数据库每日自动备份
# 用法: bash scripts/backup-d1.sh
# 效果: 导出生产 D1 完整 SQL（schema + 数据）到 backups/，保留 30 天滚动
set -euo pipefail

PROJECT_DIR="/root/.openclaw/workspace/projects/callsun-b2b"
BACKUP_DIR="$PROJECT_DIR/backups"
LOG_DIR="/var/log/callsun-d1-backup"
RETENTION_DAYS=30

mkdir -p "$BACKUP_DIR" "$LOG_DIR"

# cron 环境 PATH 很窄，补全（含 nvm node v24 — wrangler 4 需要 Node 22+）
export NVM_DIR="/root/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
export PATH=/root/.nvm/versions/node/v24.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export LC_ALL=C.UTF-8 LANG=C.UTF-8

# 加载 Cloudflare token（不进 git，600 权限）
set -a
# shellcheck disable=SC1091
source /root/.cloudflare-token.env
set +a

STAMP=$(date +%Y%m%d_%H%M%S)
OUT="$BACKUP_DIR/callsun-b2b-db_$STAMP.sql"
LOG="$LOG_DIR/backup-$(date +%F).log"

echo "=== [$(date '+%F %T')] D1 backup start ===" >> "$LOG"

# 导出（--remote 生产库；--no-schema 不要，要完整 schema+数据）
cd "$PROJECT_DIR"
if npx wrangler d1 export callsun-b2b-db --remote --output="$OUT" >> "$LOG" 2>&1; then
  SIZE=$(du -h "$OUT" | cut -f1)
  echo "✅ 导出成功: $OUT ($SIZE)" >> "$LOG"
else
  echo "❌ 导出失败，退出码 $?" >> "$LOG"
  exit 1
fi

# 滚动清理：删除 30 天前的备份
DELETED=$(find "$BACKUP_DIR" -name 'callsun-b2b-db_*.sql' -mtime +$RETENTION_DAYS -delete -print | wc -l)
echo "🧹 清理过期备份: $DELETED 个 (>$RETENTION_DAYS 天)" >> "$LOG"

# 保留最近 30 份兜底（即使 mtime 异常也不会无限膨胀）
COUNT=$(ls "$BACKUP_DIR"/callsun-b2b-db_*.sql 2>/dev/null | wc -l)
if [ "$COUNT" -gt 40 ]; then
  ls -t "$BACKUP_DIR"/callsun-b2b-db_*.sql | tail -n +31 | xargs -r rm -f
  echo "🧹 数量兜底清理: 超过 30 份，已删 $((COUNT - 30)) 份" >> "$LOG"
fi

echo "=== [$(date '+%F %T')] done (当前共 $(ls "$BACKUP_DIR"/callsun-b2b-db_*.sql 2>/dev/null | wc -l) 份) ===" >> "$LOG"
