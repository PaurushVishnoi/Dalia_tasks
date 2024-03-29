Feature: Login

   As a user
   I can login into the application

    Scenario: User can login to application
        Given I open login page
        And I click login form
        When I fill login form with correct credentials
        And I click on Submit button
        Then I expect to see application content

    Scenario: User cannot login to the application
        Given I open login page
        And I click login form
        When I fill login form with incorrect credentials
        And I click on Submit button
        Then I expect to see Error message

    Scenario: User can create a new article
        Given I open login page
        And I click login form
        And I login as Paurush Vishnoi
        And I click on Kickstart your Employee Application
        And I click New Post
        And I write Just a test as a title
        And I write check the text as Article text
        When I click on Publish button
        Then I expect to see the application content 