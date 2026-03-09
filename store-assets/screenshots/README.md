# Screenshot Capture Guide

Five HTML mockups are provided, each designed at 390×844 px (standard phone logical resolution).
The icon and feature graphic are SVGs that can be exported directly or via browser.

---

## Files

| File | Screen | Purpose |
|------|--------|---------|
| `phone-01-today.html`    | Today / Dashboard | Daily protocol cards, logging status |
| `phone-02-calendar.html` | Calendar view     | Month grid with compliance badges |
| `phone-03-chart.html`    | Serum Levels      | Half-life decay chart (JS canvas) |
| `phone-04-inventory.html`| Inventory         | Vial stock, concentration, run-out |
| `phone-05-weight.html`   | Weight Tracker    | 30-day trend chart + log entries |
| `../icon.svg`            | App icon          | 512×512 — upload as-is or export PNG |
| `../feature-graphic.svg` | Feature graphic   | 1024×500 — upload as-is or export PNG |

---

## Capturing Phone Screenshots (1080×1920)

### Method 1 — Chrome DevTools (recommended)

1. Open the HTML file in Chrome.
2. Open DevTools: `F12` or `Cmd+Option+I`
3. Click the **Toggle Device Toolbar** icon (phone icon) or press `Ctrl+Shift+M`
4. Set a custom device: `390 × 844`, DPR `3`
5. Click the **⋮ menu → Screenshot** (or "Capture screenshot")
6. The output will be `1170×2532` — crop/resize to `1080×1920` in any image editor if needed.
   Google Play accepts any size ≥ 320px with a 9:16 ratio.

### Method 2 — Puppeteer (scriptable)

```js
const puppeteer = require('puppeteer');
const path = require('path');

const files = [
  'phone-01-today', 'phone-02-calendar', 'phone-03-chart',
  'phone-04-inventory', 'phone-05-weight'
];

(async () => {
  const browser = await puppeteer.launch();
  for (const f of files) {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
    await page.goto('file://' + path.resolve(__dirname, `${f}.html`));
    await page.waitForTimeout(500); // let JS charts render
    await page.screenshot({ path: `../exports/${f}.png` });
    console.log(`Captured ${f}.png`);
    await page.close();
  }
  await browser.close();
})();
```

---

## Capturing Tablet Screenshots

Use the same HTML files — just change the DevTools viewport:

| Tablet size  | Viewport       | DPR | Notes |
|-------------|----------------|-----|-------|
| 7-inch      | `600 × 1024`   | 2   | Portrait |
| 7-inch (landscape) | `1024 × 600` | 2 | Landscape |
| 10-inch     | `800 × 1280`   | 2   | Portrait |
| 10-inch (landscape)| `1280 × 800` | 2 | Landscape |

The HTML layouts are responsive and will reflow to fill wider viewports.

> Google Play requires at least one screenshot per submitted device class.
> Phone screenshots are required; tablet screenshots are optional but recommended.

---

## Exporting SVGs to PNG

### Option A — Browser
1. Open `icon.svg` or `feature-graphic.svg` in Chrome.
2. Right-click → **Save as image** (works for simple SVGs).

### Option B — Inkscape (free)
```sh
inkscape icon.svg --export-type=png --export-filename=icon.png -w 512 -h 512
inkscape feature-graphic.svg --export-type=png --export-filename=feature-graphic.png -w 1024 -h 500
```

### Option C — ImageMagick
```sh
convert -background none icon.svg -resize 512x512 icon.png
convert -background none feature-graphic.svg -resize 1024x500 feature-graphic.png
```

---

## Google Play Upload Specs

| Asset | Dimensions | Format | Max size |
|-------|-----------|--------|---------|
| App icon | 512 × 512 | 32-bit PNG | 1 MB |
| Feature graphic | 1024 × 500 | PNG or JPG | 1 MB |
| Phone screenshots | ≥ 320px, 9:16 ratio | PNG or JPG | 8 MB each |
| 7" tablet screenshots | same | same | 8 MB each |
| 10" tablet screenshots | same | same | 8 MB each |
