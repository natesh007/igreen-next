// usage: node slides_test.js <port> <width>
// Hero slider behaviour: auto-advance, tabs, arrow keys, swipe, pause switch, and JS errors.
const { spawn } = require('child_process');
const port = process.argv[2] || '3010';
const base = /^https?:/.test(port) ? port.replace(/\/$/, '') : 'http://localhost:' + port; // a port number or a full URL
const W = Number(process.argv[3] || 1440);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9402', '--window-size=' + W + ',900', '--user-data-dir=' + process.env.TEMP + '/cdp-prof19', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9402/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {}; const errors = [];
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) pend[d.id](d.result);
    if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text).slice(0, 200));
    if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('console.error ' + d.params.args.map((a) => a.value || a.description).join(' ').slice(0, 200));
  };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: 900, deviceScaleFactor: 1, mobile: W < 600 });
  await send('Page.navigate', { url: base + '/' });
  await sleep(5500);
  const cur = () => ev(`(()=>{const o=document.querySelector('.v-live-tabs .tab.on');return o?o.textContent.trim():'none'})()`);
  const slideCls = () => ev(`(document.querySelector('.v-live .slide')||{}).className`);
  console.log('start         :', await cur(), '|', await slideCls());
  await sleep(11800);
  console.log('after ~12 s   :', await cur(), '(auto-advanced)', '|', await slideCls());
  await ev(`document.getElementById('live-tab-2').click()`); await sleep(400);
  console.log('click tab 3   :', await cur(), '|', await slideCls());
  await ev(`document.getElementById('live-tab-2').focus()`);
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'ArrowLeft', code: 'ArrowLeft', windowsVirtualKeyCode: 37 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'ArrowLeft', code: 'ArrowLeft', windowsVirtualKeyCode: 37 }); await sleep(400);
  console.log('arrow left    :', await cur(), '| focus on tab:', await ev(`document.activeElement.id`));
  // swipe left on the stage
  const box = await ev(`(()=>{const b=document.querySelector('.v-live').getBoundingClientRect();return {x:b.left+b.width/2,y:b.top+b.height/2}})()`);
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: box.x + 80, y: box.y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: box.x - 80, y: box.y, button: 'left', clickCount: 1 }); await sleep(400);
  console.log('swipe left    :', await cur());
  console.log('a11y          :', JSON.stringify(await ev(`({tablist:!!document.querySelector('[role=tablist]'),tabs:document.querySelectorAll('[role=tab]').length,selected:document.querySelectorAll('[role=tab][aria-selected=true]').length,panel:!!document.getElementById('live-panel'),label:(document.querySelector('.v-live .slide')||{}).getAttribute&&document.querySelector('.v-live .slide').getAttribute('aria-label').slice(0,60)})`)));
  // pause stops the auto-advance
  await ev(`[...document.querySelectorAll('button')].find(b=>/Pause animation/.test(b.textContent)).click()`);
  const before = await cur();
  await sleep(12500);
  console.log('paused 12.5 s :', before, '->', await cur(), '(should be unchanged)');
  await ev(`[...document.querySelectorAll('button')].find(b=>/Play animation/.test(b.textContent)).click()`);
  console.log('js errors     :', errors.length ? errors : 'none');
  chrome.kill();
  process.exit(0);
})();
