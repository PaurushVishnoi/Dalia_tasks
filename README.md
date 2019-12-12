# Dalia_tasks

This Project contains the solutions to QA challenge - Dalia Research. Fllowing are the scenarios which have been covered in the project: -

### Task 1 - SQL ###
Please write an SQL query to extract the data to be checked from the database.

#### Solution ####
The query has been made to retrieve the results for a particular survey id. The solution explanation can be seen in [SQL_Tasks.docx](SQL_Tasks.docx)

<br></br>

### Task 2 - Exploratory Testing ###
Run exploratory testing on https://yunosurveys.com 

#### Solution ####
There has been some exploratory testing done on the website. Some bugs have been reported. It may be possible that the issues somehow might be meeting the business requirements but from the point of functionality something was obscure thats why I have reported them. Please refer [Scenario2_Dalia_bug_reports.xlsx](Scenario2_Dalia_bug_reports.xlsx) for checking the list of reported bugs

<br></br>

### Task 3 - Automation of survey pages ###
Write an automated acceptance test, so it will cover opening a survey and the flow of answering questions.

#### Solution ####
The automation of the tsak has been done using JavaScript with Puppeteer and created as <b>Behaviour Driven Development(BDD)>/b> using Cucumber framework along with Gherkin Syntax.

Execute [TestCase.java](src/TestCase.java) file to check the passing status of the test cases. [DouglasLogin.java](src/DouglasLogin.java) contains all the function developed on the basis of test case scenarios.
