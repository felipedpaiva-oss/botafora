// Usage: node build.js [screenshot.png]  -> Felipe_Paiva_Resume.pdf
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const d = __dirname;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await page.goto('file://' + path.join(d, 'cv.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(d, 'Felipe_Paiva_Resume.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  if (process.argv[2]) await page.screenshot({ path: process.argv[2], fullPage: true });
  await browser.close();
})();
