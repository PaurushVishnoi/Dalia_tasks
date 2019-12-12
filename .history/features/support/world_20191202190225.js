const { setWorldConstructor } = require("cucumber")
const { expect } = require('chai');
const puppeteer = require('puppeteer');

const homepage = require(".../page-objects/homepage.js")

class CustomWorld {
    async launchBrowser(){
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await this.browser.newPage();
    }

    async closeBrowser(){
        await this.browser.close();
    }

    async visit(){
        await this.page.goto(homepage.baseUrl);
    }

    async openLogin(){
        await this.page.waitForSelector(".login-container")
        await this.page.click('.login.clickable')
    }

    async fillLoginForm(){
        await this.page.type('.input-group.with-icon.email.email > input', "paurushvishnoi@gmail.com")
        await this.page.type(".input-group.with-icon.password.password > input", "Ninja1400!@")
    }

    async fillWrongLoginForm(){
        await this.page.type('.input-group.with-icon.email.email > input', "paurushoi@gmail.com")
        await this.page.type(".input-group.with-icon.password.password > input", "Ni1400!@")
    }

    async submitLogin(){
        await this.page.click('button.clickable')
    }

    async loginRegisteredUser(){
        await this.page.type('.input-group.with-icon.email.email > input', "paurushvishnoi@gmail.com")
        await this.page.type(".input-group.with-icon.password.password > input", "Ninja1400!@")
        await this.page.click('button.clickable')
    }

    async verifySuccessfulLogin(){
        await this.page.waitForSelector('.internal-link.feed-post-channel-link.clickable')
    }  
    
    async verifyLoginFailure(){
        await this.page.waitForSelector('.growl.error.clickable')
    }
    
    async createArticle(){
        await this.page.click('[aria-label = "Kickstart your Employee App"]')
    }

    async newPost(){
        await this.page.click('a.create-link.ally-focus-within')
    }


    async writeTitle(){
        await this.page.waitForSelector('body > div.dialog.confirm.wide.editor-dialog.show.ally-focus-within > div > h3')
        await this.page.type('.editor-field-input.ally-focus-within')
    }

    async writeDescription(){
        await this.page.type('#tinymce')
    }

    async publish(){
        await this.page.click('.ok-button.ally-focus-within')
    }
}

setWorldConstructor(CustomWorld);