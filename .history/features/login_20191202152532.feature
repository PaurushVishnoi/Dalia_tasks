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
        Scenario: User can login to application
        Given I open login page
        And I click login form
        When I fill login form
        And I click on Submit button
        Then I expect to see application content