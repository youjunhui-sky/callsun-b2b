/**
 * Callsun pageview tracker — 方案②：浏览留痕（自持 D1）
 * - 无 Cookie、不采集个人数据；session id 存 sessionStorage（关标签页即失效）
 * - SPA 场景不考虑（Astro MPA，每次导航自然触发）
 * - 失败静默：绝不影响页面本身
 */
(function () {
  'use strict';
  var API = '/api/pageview';
  function send(payload) {
    try {
      var body = JSON.stringify(payload);
      // 优先 fetch keepalive；失败则静默
      if (navigator.sendBeacon) {
        navigator.sendBeacon(API, new Blob([body], { type: 'application/json' }));
      } else {
        fetch(API, { method: 'POST', keepalive: true, headers: { 'content-type': 'application/json' }, body: body }).catch(function () {});
      }
    } catch (e) { /* ignore */ }
  }
  try {
    if (location.pathname.startsWith('/crm') || location.pathname.startsWith('/admin')) return;
    var sid = null;
    try {
      sid = sessionStorage.getItem('cs_sid');
      if (!sid) { sid = Date.now().toString(36) + Math.random().toString(36).slice(2, 10); sessionStorage.setItem('cs_sid', sid); }
    } catch (e) { sid = 'anon-' + Date.now().toString(36); }
    var q = new URLSearchParams(location.search);
    send({
      path: location.pathname,
      title: document.title,
      referrer: document.referrer || '',
      lang: navigator.language || '',
      screen: (screen.width || 0) + 'x' + (screen.height || 0),
      sid: sid,
      utm_source: q.get('utm_source') || '',
      utm_medium: q.get('utm_medium') || '',
      utm_campaign: q.get('utm_campaign') || ''
    });
  } catch (e) { /* ignore */ }
})();
