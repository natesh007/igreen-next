const sharp = require('E:/xampp/htdocs/igreen-next/node_modules/sharp');
(async () => {
  const src = 'E:/xampp/htdocs/igreen-next/mockups/img/wis-energy.jpg';
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const m = Math.max(out[i], out[i + 1], out[i + 2]);
    // dark background -> transparent; bars, grid lines and text keep their colour
    const a = Math.max(0, Math.min(255, (m - 18) * 3.2));
    out[i + 3] = a;
    // brighten faint grey labels a little so they stay readable over the glass
    if (a > 0) out[i + 3] = Math.max(a, 200);
    if (a > 0 && Math.abs(out[i] - out[i + 1]) < 14 && Math.abs(out[i + 1] - out[i + 2]) < 14) {
      out[i] = Math.min(255, out[i] * 2.2 + 90);
      out[i + 1] = Math.min(255, out[i + 1] * 2.2 + 90);
      out[i + 2] = Math.min(255, out[i + 2] * 2.2 + 90);
    }
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .webp({ quality: 85, alphaQuality: 90 })
    .toFile('E:/xampp/htdocs/igreen-next/public/images/home/wis-energy-glass.webp');
  console.log('glass image', info.width, info.height);
})();
