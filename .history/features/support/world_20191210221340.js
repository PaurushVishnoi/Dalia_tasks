
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
        
    }

    async checkMandate() {
        await this.page.click(homepage.radio)   
    }


    //Question to answer
    async clickRadioButton1(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            {   timeout: 200, 
                visible: true
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }         
    }

    async clickRadioButton2(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            { 
                timeout: 200, visible: true 
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }
           
    }

    async clickRadioButton3(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            { 
                timeout: 200, visible: true 
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }           
    }

    async writeName(text){
        await this.page.waitFor(500)
        await this.page.type(name.personName,text)
    }


    async clickRadioButton4(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            { 
                timeout: 200, visible: true 
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }           
    }

    async writeNumber(text){
        await this.page.waitFor(500)
        await this.page.type(maths.value,text)
    }

    async clickRadioButton5(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            { 
                timeout: 200, visible: true 
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }            
    }

    async clickRadioButton6(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            { 
                timeout: 200, visible: true 
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }           
    }

    async clickRadioButton7(text) {
        try{
            await this.page.waitForSelector('p:nth-child(3) > b',
            { 
                timeout: 200, visible: true 
            })
            await this.page.waitFor(500)
            await this.page.click(text)   
        }
        catch(err){
            throw err
        }            
    }

    async finalMessage(){
        await this.page.waitForSelector('')
    }    

}

setWorldConstructor(CustomWorld);