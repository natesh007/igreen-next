const sharp = require('E:/xampp/htdocs/igreen-next/node_modules/sharp');
const src = 'E:/backup17-10-26/Downloads/claude/';
const out = 'E:/xampp/htdocs/igreen-next/mockups/img/';
// Dark ink lines on transparent background, derived from edge detection; tint is applied in CSS.
async function ink(file, name, width, strength = 2.2, thresh = 14) {
  const flat = await sharp(src + file).removeAlpha().resize(width).jpeg({ quality: 92 }).toBuffer(); const base = sharp(flat).greyscale().normalise().blur(0.6);
  const edges = await base.clone().convolve({ width: 3, height: 3, kernel: [-1, -1, -1, -1, 8, -1, -1, -1, -1] }).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = edges;
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < data.length; i++) {
    let a = Math.max(0, data[i] * strength - thresh);
    a = Math.min(255, a * 1.6);
    rgba[i * 4] = 18; rgba[i * 4 + 1] = 16; rgba[i * 4 + 2] = 24; rgba[i * 4 + 3] = a;
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png({ compressionLevel: 9, palette: false }).toFile(out + name);
  console.log(name, info.width + 'x' + info.height);
}
(async () => {
  await ink('igreen_team_at_work_photo_full.png', 'ink-team.png', 1600);
  await ink('Generated Image.png', 'ink-plant.png', 1100, 4.5, 10);
  await ink('Generated Image (3).png', 'ink-cold.png', 900, 4.5, 10);
  await ink('Generated Image (2).png', 'ink-pump.png', 900, 4.5, 10);
  await ink('Generated Image (5).png', 'ink-tank.png', 900, 4.5, 10);
  await ink('Generated Image (1).png', 'ink-pipes.png', 900, 4.5, 10);
})();
