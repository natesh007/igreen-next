const { spawn } = require('child_process');
const paths = process.argv.slice(2);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9343', '--window-size=1440,900', '--user-data-dir=' + process.env.TEMP + '/cdp-prof11', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9343/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {}; let cur = '';
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) pend[d.id](d.result);
    if (d.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(d.params.type)) console.log(`[${cur}] console.${d.params.type}:`, d.params.args.map((a) => (a.value ?? a.description ?? '')).join(' ').slice(0, 400));
    if (d.method === 'Runtime.exceptionThrown') console.log(`[${cur}] exception:`, (d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text).slice(0, 400));
  };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Runtime.enable'); await send('Log.enable');
  for (const p of paths) { cur = p; await send('Page.navigate', { url: 'http://localhost:3000' + p }); await sleep(5000); }
  console.log('done');
  ws.close(); chrome.kill(); process.exit(0);
})();
