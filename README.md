# Dalia_tasks

This Project contains the solutions to QA challenge - Dalia Research. Fllowing are the scenarios which have been covered in the project: -

### Task 1 - SQL ###
Please write an SQL query to extract the data to be checked from the database.

#### Solution ####
The query has been made to retrieve the results for a particular survey id. The solution explanation can be seen in [SQL_Tasks.docx](SQL_Tasks.docx)


### Task 2 - Exploratory Testing ###
Run exploratory testing on https://yunosurveys.com 

#### Solution ####
There has been some exploratory testing done on the website. Some bugs have been reported. It may be possible that the issues somehow might be meeting the business requirements but from the point of functionality something was obscure thats why I have reported them. Please refer [Scenario2_Dalia_bug_reports.xlsx](Scenario2_Dalia_bug_reports.xlsx) for checking the list of reported bugs


### Test Case 3 ###
Showing the Login Failure due to incorrect Email
 
### Test Case 4 ###
Showing the Login Failure due to no password
 
### Test Case 5 ### 
Showing the Login Failure due to incorrect password
 
### Test Case 6 ###
Showing the resetting of the password by clicking 'Forgot Password' link
> Please note : 
The CAPTCHA feature is not really working and behaving strange because of which CAPTCHA sometimes appears ans sometimes it doesnot. 
Hence,**there is a manual process of entering CAPTCHA and clicking on 'E-MAIL ABSENDEN' button**


## Execution ##
Execute [TestCase.java](src/TestCase.java) file to check the passing status of the test cases. [DouglasLogin.java](src/DouglasLogin.java) contains all the function developed on the basis of test case scenarios.
