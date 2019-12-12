Feature: Dalia Research

   As a user
   I can perform operations on Yuno Survey Link

    Scenario: User can login to application
        Given I open Yuno landing page
        And I select option "I understand that if I rush or answer dishonestly I will not get rewarded"
        And I click "Next" button
        And I select radio button "1-3 hours" for question 1
        And I click "Next" button
        And I select radio button "YouTube" for question 2
        And I select radio button "Facebook" for question 2
        And I select radio button "Twitter" for question 2
        And I click "Next" button
        And I select radio button "Newspaper" for question 3
        And I click "Next" button
        And I enter "Stephen Curry" as person name
        And I click "Next" button
        And I select radio button "Strongly disagree" for question 4
        And I click "Next" button
        And I enter "7" as sum
        And I click "Next" button
        And I select radio button "Rural area" for question 5
        And I click "Next" button
        And I select radio button "Forrest Gump" for question 6
        And I click "Next" button
        And I select radio button "Sound" for last question
        When I click "Next" button
        Then 