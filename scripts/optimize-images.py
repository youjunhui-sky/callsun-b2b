#!/usr/bin/env python3
"""Callsun B2B — 图片批量转 WebP（增量，挂在 prebuild）

扫描 public/uploads 下所有 .jpg/.jpeg/.png，转出同名 .webp：
- 已有 .webp 且不比原图旧 → 跳过（增量，只转新增/修改的图）
- 保留原图（.webp 是新增文件，出问题随时可回退）
- 自动处理 EXIF 旋转；透明 PNG 保留 alpha（webp 支持）

用法: python3 scripts/optimize-images.py [--quality 82]
"""
import os
import sys
from PIL import Image, ImageOps

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'uploads')
QUALITY = 82


def convert(path: str):
    out = os.path.splitext(path)[0] + '.webp'
    src_mtime = os.path.getmtime(path)
    if os.path.exists(out) and os.path.getmtime(out) >= src_mtime:
        return None  # 已是最新，跳过
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)  # 修正 EXIF 旋转
    if im.mode not in ('RGB', 'RGBA'):
        im = im.convert('RGBA' if im.mode in ('P', 'LA') and 'transparency' in im.info else 'RGB')
    im.save(out, 'WEBP', quality=QUALITY, method=6)
    return out


def main():
    q = QUALITY
    if '--quality' in sys.argv:
        q = int(sys.argv[sys.argv.index('--quality') + 1])
    converted = 0
    skipped = 0
    saved = 0
    for dirpath, _, files in os.walk(ROOT):
        for f in sorted(files):
            if not f.lower().endswith(('.jpg', '.jpeg', '.png')):
                continue
            p = os.path.join(dirpath, f)
            try:
                out = convert(p)
            except Exception as e:  # noqa: BLE001
                print(f'  ! 失败 {p}: {e}')
                continue
            if out:
                converted += 1
                saved += os.path.getsize(p) - os.path.getsize(out)
            else:
                skipped += 1
    print(f'WebP: 转换 {converted} 张, 跳过 {skipped} 张 (已有/最新), 净省 {saved / 1024 / 1024:.1f} MB')
    return 0


if __name__ == '__main__':
    sys.exit(main())
