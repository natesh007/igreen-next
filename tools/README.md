# Helper scripts

Small Node scripts used during the 2026 redesign. They are dev tools only (not part of the Next.js build).
Several contain absolute Windows paths (source images under `E:\...`); edit those before reuse.

- `image-gen/night-building.js` — builds `public/images/home/night-building.webp` from the WIS building render and prints the sensor-spot % positions used in `src/components/homepage/IotDemo.tsx`.
- `image-gen/glass-chart.js` — makes a chart PNG transparent (dark background removed) for the glass dashboard card.
- `image-gen/ink-outline.js` — edge-detection "pencil sketch" PNGs used as overlays.
- `qa/*.js` — Chrome DevTools-protocol helpers (screenshots of sections at a given width, console-warning check, homepage interaction test). Start the site first (`npm run dev` or `npm run start`), set `MSYS_NO_PATHCONV=1` in Git Bash, and run with `node tools/qa/<script>.js ...` (see the header of each file).
