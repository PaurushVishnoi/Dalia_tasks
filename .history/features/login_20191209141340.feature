Feature: StaffBase

   As a user
   I can perform operations on StaffBase App

    Scenario: User can login to application
        Given I open login page
        And I click login form
        When I fill login form with correct credentials
        And I click on "Submit" button
        Then I expect to see application content

 