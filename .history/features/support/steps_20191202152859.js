const { Given, When, Then, Before, After } = require("cucumber");

Before(async function() {
    return await this.launchBrowser();
});

After(async function() {
    return await this.closeBrowser();
});

Given("I open login page", async function(){
    return await this.visit();
});

Given("I click login form", async function(){
    return await this.openLogin();
});

When("I fill login form with correct credentials", async function(){
    return await this.fillLoginForm();
});

When("I fill login form with incorrect credentials", async function(){
    return await this.fillWrongLoginForm();
});

When("I click on Submit button", async function(){
    return await this.submitLogin();
});

Then("I expect to see application content", async function(){
    return await this.verifySuccessfulLogin();
}); 

Then("I expect to see Error message", async function(){
    return await this.verifyLoginFailure();
}); 