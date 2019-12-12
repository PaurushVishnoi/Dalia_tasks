const { Given, When, Then, Before, After } = require("cucumber");

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
    const account = require('../../page-objects/question1/answers1.json')
    return this.clickRadioButton1(account[string].value);
    //return await this.submitLogin();
});

Given("I select radio button {string} for question 2", function(string){
    const account = require('../../page-objects/question2/answers2.json')
    return this.clickRadioButton2(account[string].value);
    //return await this.submitLogin();
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
