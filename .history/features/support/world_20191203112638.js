
//Initialization of dependencies
const { setWorldConstructor } = require("cucumber")
const { expect } = require('chai');
const puppeteer = require('puppeteer');

//Impoting page objects
const loginpage = require("../../page-objects/loginpage")
const homepage = require("../../page-objects/homepage")
const result = require("../../page-objects/results")
const createarticle = require("../../page-objects/createarticle")


class CustomWorld {
    async launchBrowser(){
        this.browser = await puppeteer.launch({ headless: false, args:['--start-maximized'] });
        this.page = await this.browser.newPage()
        await this.page.setViewport({
            width: 1920,
            height:1040
        });
    }

    async closeBrowser(){
        await this.browser.close();
    }

    async visit(){
        await this.page.goto(loginpage.baseUrl);
    }

    async openLogin(){
        await this.page.waitForSelector(loginpage.loginBox)
        await this.page.click(loginpage.loginButton)
    }

    async fillLoginForm(){
        await this.page.type(loginpage.userName, "paurushvishnoi@gmail.com")
        await this.page.type(loginpage.userPassword, "Ninja1400!@")
    }

    async fillWrongLoginForm(){
        await this.page.type(loginpage.userName, "paurushoi@gmail.com")
        await this.page.type(loginpage.userPassword, "Ni1400!@")
    }

    async submitLogin(){
        await this.page.click(loginpage.submitButton)
    }

    async loginRegisteredUser(){
        await this.page.goto(loginpage.baseUrl);
        await this.page.waitForSelector(loginpage.loginBox)
        await this.page.click(loginpage.loginButton)
        await this.page.type(homepage.userName, "paurushvishnoi@gmail.com")
        await this.page.type(homepage.userPassword, "Ninja1400!@")
        await this.page.click(homepage.submitButton)
    }

    async verifySuccessfulLogin(){
        await this.page.waitForSelector(loginpage.loginSuccess)
    }  
    
    async verifySuccessfulCreation(){
        await this.page.waitForSelector(homepage.articleSection)
    }

    async verifyLoginFailure(){
        await this.page.waitForSelector(loginpage.loginFailure)
    }
    
    async enterSearch(){
        await this.page.waitFor(2000)
        await this.page.click(homepage.searchBox)
        await this.page.type(homepage.searchBox,'Hello')

    }

    async pressEnter(){
        await this.page.keyboard.press('Enter')
        await this.page.waitFor(2000)
    }

    async resultSection(){
        await this.page.waitForSelector(result.resultSection)
    }

    
    async createArticle(){
        await this.page.waitForSelector(homepage.linkSection)
        await this.page.waitFor(4000)
        await this.page.click(homepage.linkClick)
        //await this.page.waitFor(5000)
        //await this.page.click('a.create-link')
    }

    async newPost(){
        await this.page.waitFor(2000)
        await this.page.click(homepage.newPost)
        await this.page.waitFor(2000)
    }

    async writeTitle(){
        //await this.page.waitForSelector('body > div.dialog.confirm.wide.editor-dialog.show.ally-focus-within > div > h3')
        await this.page.waitFor(2000)
        await this.page.type(createarticle.enterTitle,'Hello')
    }

    async writeDescription(){
        await this.page.type('#tinymce','Hey')
    }

    async publish(){
        await this.page.click(createarticle.publish)
        await this.page.waitFor(2000)
        
    }

    async continue(){
        await this.page.waitFor(2000)
        await this.page.click(createarticle.continue)
    }

}

setWorldConstructor(CustomWorld);