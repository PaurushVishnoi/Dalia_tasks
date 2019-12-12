﻿# Dalia_tasks

This Project contains the test cases of Douglas Login web page. Fllowing are the scenarios which have been covered in the project: -

1. As a user with correct credentials I would like to be able to login to
the webshop
2. As a user I would like to receive an error message, if I enter wrong
credentials.
3. As a user, I would like to be able to reset my password if I forget my
credentials.

For these scenarios, 7 test cases have been prepared which are provided in the [Douglas_testcases.xlsx](Douglas_testcases.xlsx). The test case for sheet 2 - "Login Failure when no credentials provided" has already been covered with the scenario in the **Test Case 2** and **Test Case 4**

### Test Case 1 ###
Showing the successful login of the user
 
### Test Case 2 ###
Showing the Login Failure due to no Email
 
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
