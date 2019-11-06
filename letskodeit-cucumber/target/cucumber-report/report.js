$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14265612600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should able to login successful with valid credentials",
  "description": "",
  "id": "login;user-should-able-to-login-successful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter email \"nandinitimla@gmail.com\" to the emailfield",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter password \"Nandini8890\" to password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 165813000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userClickOnLoginLink()"
});
formatter.result({
  "duration": 95352100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandinitimla@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.userEnterEmailToTheEmailfield(String)"
});
formatter.result({
  "duration": 3585351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandini8890",
      "offset": 21
    }
  ],
  "location": "LoginStepDef.userEnterPasswordToPasswordField(String)"
});
formatter.result({
  "duration": 100653600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userClickOnTheLoginButton()"
});
formatter.result({
  "duration": 3861486100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userShouldAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 18899900,
  "status": "passed"
});
formatter.after({
  "duration": 753854400,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/practice.feature");
formatter.feature({
  "line": 1,
  "name": "practicePage",
  "description": "",
  "id": "practicepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12228301300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on the practice page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the mainpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on practice link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user on the practice Page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnTheMainpage()"
});
formatter.result({
  "duration": 82400,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userClickOnPracticeLink()"
});
formatter.result({
  "duration": 92972000,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userOnThePracticePage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "user should able to select all radio button successfully",
  "description": "",
  "id": "practicepage;user-should-able-to-select-all-radio-button-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on the practice page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user select BMW radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "BMW option should be selected",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user select Benz radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Benz option should be selected",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user select Honda radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Honda option should be selected",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnThePracticePage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userSelectBMWRadioButton()"
});
formatter.result({
  "duration": 1571086300,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.bmwOptionShouldBeSelected()"
});
formatter.result({
  "duration": 24920100,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userSelectBenzRadioButton()"
});
formatter.result({
  "duration": 2080839700,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.benzOptionShouldBeSelected()"
});
formatter.result({
  "duration": 22469700,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userSelectHondaRadioButton()"
});
formatter.result({
  "duration": 59283900,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.hondaOptionShouldBeSelected()"
});
formatter.result({
  "duration": 26064700,
  "status": "passed"
});
formatter.after({
  "duration": 734510100,
  "status": "passed"
});
formatter.before({
  "duration": 13236197900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on the practice page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the mainpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on practice link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user on the practice Page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnTheMainpage()"
});
formatter.result({
  "duration": 35400,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userClickOnPracticeLink()"
});
formatter.result({
  "duration": 81230000,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userOnThePracticePage()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user should able to get Alert Text Successfully",
  "description": "",
  "id": "practicepage;user-should-able-to-get-alert-text-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on the practice page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enter \"anjna\" in alert text box",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user click on alert button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user should able to get alert text \"Hello anjna, share this practice page and share your knowledge\" successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnThePracticePage()"
});
formatter.result({
  "duration": 113800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anjna",
      "offset": 12
    }
  ],
  "location": "PracticePageStepDef.userEnterInAlertTextBox(String)"
});
formatter.result({
  "duration": 5126861900,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userClickOnAlertButton()"
});
formatter.result({
  "duration": 2084802400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello anjna, share this practice page and share your knowledge",
      "offset": 36
    }
  ],
  "location": "PracticePageStepDef.userShouldAbleToGetAlertTextSuccessfully(String)"
});
formatter.result({
  "duration": 15144800,
  "status": "passed"
});
formatter.after({
  "duration": 775394800,
  "status": "passed"
});
formatter.before({
  "duration": 12055177600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on the practice page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the mainpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on practice link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user on the practice Page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnTheMainpage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userClickOnPracticeLink()"
});
formatter.result({
  "duration": 102782900,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userOnThePracticePage()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user should able to get course fees according to course",
  "description": "",
  "id": "practicepage;user-should-able-to-get-course-fees-according-to-course",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user is on the practice page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user observe java course in product table",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user should able to get \"35\" price for the java course",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user observe python course in product table",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user should able to get \"30\" price in the python course",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user observe JavaScript course in the product table",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user should able to get \"25\" price for the java Script",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnThePracticePage()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userObserveJavaCourseInProductTable()"
});
formatter.result({
  "duration": 35700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 25
    }
  ],
  "location": "PracticePageStepDef.userShouldAbleToGetPriceForTheJavaCourse(String)"
});
formatter.result({
  "duration": 4043607400,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userObservePythonCourseInProductTable()"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 25
    }
  ],
  "location": "PracticePageStepDef.userShouldAbleToGetPriceInThePythonCourse(String)"
});
formatter.result({
  "duration": 35931000,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userObserveJavaScriptCourseInTheProductTable()"
});
formatter.result({
  "duration": 110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 25
    }
  ],
  "location": "PracticePageStepDef.userShouldAbleToGetPriceForTheJavaScript(String)"
});
formatter.result({
  "duration": 36977900,
  "status": "passed"
});
formatter.after({
  "duration": 742487200,
  "status": "passed"
});
formatter.before({
  "duration": 12996857500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on the practice page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the mainpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on practice link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user on the practice Page",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnTheMainpage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userClickOnPracticeLink()"
});
formatter.result({
  "duration": 124337400,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userOnThePracticePage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "user should able to get top and reload option in mouse hover option",
  "description": "",
  "id": "practicepage;user-should-able-to-get-top-and-reload-option-in-mouse-hover-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on the practice page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user mouse hover on the Mouse Hover Option",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user should able to get \"Top\" and \"Reload\" option during mouse hover",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticePageStepDef.userIsOnThePracticePage()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "PracticePageStepDef.userMouseHoverOnTheMouseHoverOption()"
});
formatter.result({
  "duration": 8172317400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Top",
      "offset": 25
    },
    {
      "val": "Reload",
      "offset": 35
    }
  ],
  "location": "PracticePageStepDef.userShouldAbleToGetAndOptionDuringMouseHover(String,String)"
});
formatter.result({
  "duration": 76324900,
  "status": "passed"
});
formatter.after({
  "duration": 737592100,
  "status": "passed"
});
});