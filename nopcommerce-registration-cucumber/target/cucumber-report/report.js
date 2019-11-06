$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/regration.feature");
formatter.feature({
  "line": 1,
  "name": "Nop Commerce Registration",
  "description": "",
  "id": "nop-commerce-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15240446300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "I Should able to Register Successfully with valid Credentials",
  "description": "",
  "id": "nop-commerce-registration;i-should-able-to-register-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on the register",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is on the registration page and can see the title \"nopCommerce demo store. Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter \"nandini\" name in the first name field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"timla\" in the last name last name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"nandini8890@gmail.com\" in the Email field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter correct password \"nandini0988\"in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"nandini0988\"in the confirmation password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should able to register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can see the message \"Your registration completed\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 202751000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnTheRegister()"
});
formatter.result({
  "duration": 913080700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nopCommerce demo store. Register",
      "offset": 56
    }
  ],
  "location": "MyStepdefs.userIsOnTheRegistrationPageAndCanSeeTheTitle(String)"
});
formatter.result({
  "duration": 14881900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterNameInTheFirstNameField(String)"
});
formatter.result({
  "duration": 10157113000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "timla",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterInTheLastNameLastNameField(String)"
});
formatter.result({
  "duration": 95870400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini8890@gmail.com",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterInTheEmailField(String)"
});
formatter.result({
  "duration": 142595400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini0988",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterCorrectPasswordInThePasswordField(String)"
});
formatter.result({
  "duration": 143290100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini0988",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPasswordInTheConfirmationPasswordField(String)"
});
formatter.result({
  "duration": 105985200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1921481700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 10068890200,
  "status": "passed"
});
formatter.after({
  "duration": 806432800,
  "status": "passed"
});
});