const { Given, When, Then, Before, After } = require("cucumber");

const account1 = require('../../page-objects/question1/answers1.json')
const account2 = require('../../page-objects/question2/answers2.json')
const account3 = require('../../page-objects/question3/answers3.json')

Before(async function() {
    return await this.launchBrowser();
});

After(async function() {
    return await this.closeBrowser();
});

Given("I open Yuno landing page", async function(){
    return await this.visit();
});

Given("I select option {string}", function(string){
    return this.checkMandate();
    
});

Given("I click {string} button", function(string){
    return this.pressNext(string);
});


Given("I select radio button {string} for question 1", function(string){
    
    return this.clickRadioButton1(account1[string].value);
    //return await this.submitLogin();
});

Given("I select radio button {string} for question 2", function(string){
    
    return this.clickRadioButton2(account2[string].value);
    //return await this.submitLogin();
});

Given("I select radio button {string} for question 3", function(string){
    
    return this.clickRadioButton3(account3[string].value);
    //return await this.submitLogin();
});

Given("I enter {string} as person name", function(string){
    return this.pressNext(string);
});











Given('I login as {string}', function(string){
    const account = require('./credential.json')
    return this.loginRegisteredUser(account[string].email, account[string].password);
});





When("I fill login form with incorrect credentials", async function(){
    return await this.fillWrongLoginForm();
});

When("I click on {string} button", function(string){
    return this.clickButtonByText(string);
    //return await this.submitLogin();
});




Then("I see Results section", async function(){
    return await this.resultSection();
});
