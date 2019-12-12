
//Initialization of dependencies
const { setWorldConstructor } = require("cucumber")
const { expect } = require('chai');
const puppeteer = require('puppeteer');

//Impoting page objects
const homepage = require("../../page-objects/homepage/homepage")
const name = require("../../page-objects/person/name")
const maths = require("../../page-objects/norobot/maths")

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
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',{ timeout: 1000, visible: true })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }
           
    }

    async clickRadioButton3(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    async writeName(text){
        await this.page.waitFor(1000)
        await this.page.type(name.personName,text)
    }


    async clickRadioButton4(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    async writeNumber(text){
        await this.page.waitFor(1000)
        await this.page.type(maths.value,text)
    }

    async clickRadioButton5(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    async clickRadioButton6(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    async clickRadioButton7(text) {
        await this.page.waitFor(1000)
        await this.page.click(text)            
    }

    

}

setWorldConstructor(CustomWorld);