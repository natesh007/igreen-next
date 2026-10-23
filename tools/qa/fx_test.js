// usage: node fx_test.js <port> <width>
// Checks that the decorative animation really runs, that "Pause animation" stops it, that the choice is
// remembered after a reload, and that the page has no JavaScript errors.
const { spawn } = require('child_process');
const port = process.argv[2] || '3010';
const base = /^https?:/.test(port) ? port.replace(/\/$/, '') : 'http://localhost:' + port; // a port number or a full URL
const W = Number(process.argv[3] || 1440);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9372', '--window-size=' + W + ',900', '--user-data-dir=' + process.env.TEMP + '/cdp-prof15', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9372/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {}; const errors = [];
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) pend[d.id](d.result);
    if (d.method === 'Runtime.exceptionThrown') errors.push(d.params.exceptionDetails.text + ' ' + (d.params.exceptionDetails.exception?.description || '').slice(0, 160));
    if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('console.error ' + d.params.args.map((a) => a.value || a.description).join(' ').slice(0, 160));
  };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: 900, deviceScaleFactor: 1, mobile: W < 600 });
  await send('Page.navigate', { url: base + '/' });
  await sleep(1500);
  await ev("localStorage.clear()"); // a leftover choice from an earlier run would hide the first checks
  await send('Page.navigate', { url: base + '/' });
  await sleep(6500);

  const snap = `(()=>{const c=document.querySelector('canvas.v-netbg');if(!c)return null;const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let s=0;for(let i=3;i<d.length;i+=97)s+=d[i]*(i%251);return s})()`;
  const live = `(()=>{const t=[...document.querySelectorAll('.v-live .hs b')].map(e=>e.textContent).join('|');const a=getComputedStyle(document.querySelector('.v-live .scene')).transform;return {t,a}})()`;
  console.log('motion attr:', await ev('document.documentElement.dataset.motion'));
  const s1 = await ev(snap); await sleep(900); const s2 = await ev(snap);
  console.log('canvas frames differ (animating):', s1 !== s2, '| hero values:', JSON.stringify(await ev(live)));
  await sleep(2200);
  console.log('hero values later (ticking):', JSON.stringify(await ev(live)));

  // the slider may have moved on by now; go back to the building slide for the pause checks
  await ev("document.getElementById('live-tab-1').click()"); await sleep(150); await ev("document.getElementById('live-tab-0').click()"); await sleep(500); // restarts the slide timer
  // pause
  await ev(`[...document.querySelectorAll('button')].find(b=>/Pause animation/.test(b.textContent)).click()`);
  await sleep(600);
  const p1 = await ev(snap); await sleep(900); const p2 = await ev(snap);
  const tv1 = await ev(live); await sleep(2200); const tv2 = await ev(live);
  console.log('after pause -> attr:', await ev('document.documentElement.dataset.motion'), '| canvas still:', p1 === p2, '| values frozen:', tv1.t === tv2.t, '| scene paused:', await ev(`getComputedStyle(document.querySelector('.v-live .scene')).animationPlayState`), '| button:', await ev(`[...document.querySelectorAll('.v-live-wrap button')].map(b=>b.textContent).join()`));

  // remembered after reload
  await send('Page.navigate', { url: base + '/about' });
  await sleep(5000);
  console.log('/about after reload -> attr:', await ev('document.documentElement.dataset.motion'), '| stored:', await ev(`localStorage.getItem('igreen-motion')`), '| footer button:', await ev(`[...document.querySelectorAll('footer button')].map(b=>b.textContent+' pressed='+b.getAttribute('aria-pressed')).join()`));
  await ev(`[...document.querySelectorAll('footer button')][0].click()`);
  await sleep(600);
  console.log('footer toggle back on -> attr:', await ev('document.documentElement.dataset.motion'));
  console.log('js errors:', errors.length ? errors : 'none');
  chrome.kill();
  process.exit(0);
})();
