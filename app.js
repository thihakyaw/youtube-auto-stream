const puppeteer = require('puppeteer');
try {
  require("dotenv").config();
} catch {
  console.error('dotenv is not required for container')
}
let opts = {
  defaultViewport: null,
  headless: false,
  args: [
    "--start--fullscreen",
  ]
}
if (process.env.ENV === 'docker') {
  opts = {
    headless: true,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--start--fullscreen"
    ]
  }
}

(async () => {

  const x = 1000;

  for (i = 0; i <= x; i++) {
    function delay(time) {
      return new Promise(function (resolve) {
        setTimeout(resolve, time)
      });
    }
    
    const browser = await puppeteer.launch(opts);
    if (process.env.ENV === 'docker') {
      console.log(`View ${i} launched`)
    }
    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(0);

    await page.goto(process.env.YOUTUBE_URL);

    page.keyboard.press('Space');

    await delay(process.env.SECONDS_TO_WAIT_EACH_VIDEOS * 1000);

    await page.screenshot({ path: 'check_finish_or_not' + i.toString() + '.png' });
    if (process.env.ENV === 'docker') {
      console.log(`View ${i} completed`)
    }
    await browser.close();
  }

})();

