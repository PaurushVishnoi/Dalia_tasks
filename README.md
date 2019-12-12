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
The automation of the tsak has been done using <b>JavaScript</b> with <b>Puppeteer</b> and created as <b>Behaviour Driven Development(BDD)</b> using <b>Cucumber</b> framework along with Gherkin Syntax.

1. All the test steps along with the scenarios have been written in [login.feature](features/login.feature) file 
2. Step definitions have been created in [steps.js](features/support/steps.js) file.
3. Performing operations on web elements have been defined in [world.js](features/support/world.js) file.
4. All the page object model files have been stored in the [page-object](page-objects) folder

Prerequisites for the solution to run :-
1. Download puppeteer for latest JavaScript version
1. Cucumber framework for puppeteer should be installed

For executing the scenarios, open the terminal for the folder location where repository is cloned and use command "npm run test" to execute the test cases.

<br></br>

Note : Please note that there is "node_modules" folder present in the repository as the size of the folder was greater than 100mb. Hence, I have attached with seperately in the grrenhuse link. Just copy the node_modules folder and paste in the folder where all these repository files are cloned.
