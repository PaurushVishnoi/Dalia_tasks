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
    return this.clickRadioButtonByText(string);
    //return await this.submitLogin();
});

Given('I login as {string}', function(string){
    const account = require('./credential.json')
    return this.loginRegisteredUser(account[string].email, account[string].password);
});


When("I fill login form with correct credentials", async function(){
    return await this.fillLoginForm();
});

When("I fill login form with incorrect credentials", async function(){
    return await this.fillWrongLoginForm();
});

When("I click on {string} button", function(string){
    return this.clickButtonByText(string);
    //return await this.submitLogin();
});

When("I press Enter", async function(){
    return await this.pressEnter();
});

When("I click on Continue button", async function(){
    return await this.continue();
});


Then("I expect to see application content", async function(){
    return await this.verifySuccessfulLogin();
}); 

Then("I expect to see created content", async function(){
    return await this.verifySuccessfulCreation();
});

Then("I expect to see Error message", async function(){
    return await this.verifyLoginFailure();
}); 

Then("I see Results section", async function(){
    return await this.resultSection();
});
