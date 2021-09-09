const puppeteer = require('puppeteer');
require("dotenv").config();

(async () => {

const x = 1000;

for(i=0;i<=x;i++){
    function delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
     }
         
     const browser = await puppeteer.launch({
       defaultViewport: { width: 1920, height: 1080 },
       headless: false
     });

     const page = await browser.newPage();
     
     await page.goto(process.env.YOUTUBE_URL);
     
     page.keyboard.press('Space');

     await delay(process.env.SECONDS_TO_WAIT_EACH_VIDEOS*1000);

     await page.screenshot({ path: 'check_finish_or_not'+i.toString()+'.png' });
   
     await browser.close();
}

})();
      
