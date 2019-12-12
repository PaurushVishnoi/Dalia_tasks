const { setWorldConstructor } = require("cucumber")
const { expect } = require('chai');
const puppeteer = require('puppeteer');

class CustomWorld {
    async launchBrowser(){
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await this.browser.newPage();
    }

    async closeBrowser(){
        await this.browser.close();
    }

    async visit(){
        await this.page.goto("");
    }
}

setWorldConstructor(CustomWorld);