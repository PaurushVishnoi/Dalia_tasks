Feature: StaffBase

   As a user
   I can perform operations on StaffBase App



    Scenario: User can create an Article
        Given I login as "Paurush Vishno"
        And I click on Kickstart your Employee Application
        And I click New Post
        And I write Just a test as a title
        And I click on Publish button
        When I click on Continue button
        Then I expect to see created content