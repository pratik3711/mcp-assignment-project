const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://example.com');

  const title = await page.title();
  console.log(title);

  await browser.close();
})();