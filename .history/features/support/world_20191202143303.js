const { setWorldConstructor } = require("cucumber")
const { expect } = require('chai');
const puppeteer = require('puppeteer');

class CustomWorld {
    async launchBrowser(){
        this.browser = await puppeteer.launch({ headless: false })
    }
}

setWorldConstructor(CustomWorld);