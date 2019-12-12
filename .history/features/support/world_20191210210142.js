
//Initialization of dependencies
const { setWorldConstructor } = require("cucumber")
const { expect } = require('chai');
const puppeteer = require('puppeteer');

//Impoting page objects
const homepage = require("../../page-objects/homepage/homepage")
const name = require("../../page-objects/person/name")



// importing input values
const inputs = require("../../input-values/values")

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
        //await this.browser.close();
    }

    async visit(){
        await this.page.goto(homepage.baseUrl);
    }

    async pressNext(){
        await this.page.click(homepage.next)
        //await this.page.waitFor(2000)
    }

    async checkMandate() {
        await this.page.click(homepage.radio)   
    }

    async clickRadioButton1(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)           
    }

    async clickRadioButton2(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    async clickRadioButton3(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    async writeName(text){
        await this.page.type(name.personName,text)
    }





    async loginRegisteredUser(option){
        await this.page.goto(loginpage.baseUrl);
        await this.page.waitForSelector(loginpage.loginBox)
        await this.page.click(loginpage.loginButton)
        await this.page.type(homepage.userName, uName)
        await this.page.type(homepage.userPassword, uPassword)
        await this.page.click(homepage.submitButton)
    }

    














    
    async enterSearch(){
        await this.page.waitFor(2000)
        await this.page.click(homepage.searchBox)
        await this.page.type(homepage.searchBox,'Hello')

    }

    async pressNext(){
        await this.page.click(homepage.next)
        //await this.page.waitFor(2000)
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
        await this.page.type(createarticle.enterTitle,inputs.titleInput)
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