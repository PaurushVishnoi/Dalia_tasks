Scenario: User can login to application
    Given I open login page
    When I fill login form
    And I click on Submit button
    Then I expect to see application content