const { spawn } = require('child_process'); const fs = require('fs');
const W = Number(process.argv[2]), out = process.argv[3];
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9338', '--window-size=' + W + ',900', '--user-data-dir=' + process.env.TEMP + '/cdp-prof6', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t; for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9338/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl); await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {}; const errs = []; ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); if (d.method === 'Runtime.exceptionThrown') errs.push(d.params.exceptionDetails.text + ' ' + (d.params.exceptionDetails.exception?.description || '').slice(0, 160)); if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errs.push('console.error: ' + d.params.args.map((a) => a.value || a.description || '').join(' ').slice(0, 200)); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Runtime.enable'); await send('Emulation.setDeviceMetricsOverride', { width: W, height: 900, deviceScaleFactor: 1, mobile: W < 600 });
  await send('Page.navigate', { url: 'http://localhost:3000/' }); await sleep(4500);
  const hh = await ev('document.documentElement.scrollHeight'); for (let y = 0; y < hh; y += 400) { await ev('window.scrollTo(0,' + y + ')'); await sleep(180); } await sleep(1200);
  console.log('h1 count', await ev("document.querySelectorAll('h1').length"), '| h2', await ev("document.querySelectorAll('h2').length"));
  console.log('counters', await ev("[...document.querySelectorAll('[data-n]')].map(e=>e.textContent).join(' ')"));
  await ev("document.querySelectorAll('.v-pick').forEach((b,i)=>{if(i<3)b.click()})"); await sleep(300);
  console.log('after 3', await ev("document.querySelector('.v-meter').previousElementSibling?.textContent || [...document.querySelectorAll('.v-panel span')].map(s=>s.textContent).filter(x=>/\/ 4/.test(x)).join()"), 'badge', await ev("!!document.querySelector('.v-done')"));
  await ev("document.querySelectorAll('.v-pick')[3].click()"); await sleep(500);
  console.log('after 4 badge', await ev("!!document.querySelector('.v-done')"), '| readings', await ev("[...document.querySelectorAll('.v-read b')].map(b=>b.textContent).join(' ; ')"));
  await ev("document.querySelectorAll('.v-flip').forEach(b=>b.click())"); await sleep(900);
  console.log('flip chip', await ev("document.querySelector('.v-xp .v-chip').textContent"), '| pressed', await ev("[...document.querySelectorAll('.v-flip')].map(b=>b.getAttribute('aria-pressed')).join()"));
  console.log('form fields', await ev("[...document.querySelectorAll('.v-form input,.v-form textarea')].map(i=>i.name+':'+(i.required?'req':'opt')).join(' ')"));
  console.log('horizontal overflow?', await ev('document.documentElement.scrollWidth > document.documentElement.clientWidth'));
  console.log('errors:', errs.length ? errs.join(' || ') : 'none');
  ws.close(); chrome.kill(); process.exit(0);
})();
