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
        await this.page.goto("https://staffbasetest.staffbase.rocks/");
    }

    async fillLoginForm(){
        await this.page.type('.input-group.with-icon.email.email > input', "paurushvishnoi@gmail.com")
        await this.page.type(".input-group.with-icon.password.password > input", "Ninja1400!@")
    }

    async submitLogin(){
        await this.page.click('button.clickable')
    }

    
}

setWorldConstructor(CustomWorld);