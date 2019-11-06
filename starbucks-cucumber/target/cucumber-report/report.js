$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "starbucks homepage",
  "description": "",
  "id": "starbucks-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14456508200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should able to login successfully with valid credentials",
  "description": "",
  "id": "starbucks-homepage;user-should-able-to-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the starbuck home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter valid email address\"anajanaom87@gmail.com\"in the email field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter valid password \"Anajana@7765\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.userIsOnTheStarbuckHomePage()"
});
formatter.result({
  "duration": 138008100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnLoginLink()"
});
formatter.result({
  "duration": 3368357900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anajanaom87@gmail.com",
      "offset": 31
    }
  ],
  "location": "HomePageStepDef.userEnterValidEmailAddressInTheEmailField(String)"
});
formatter.result({
  "duration": 649092600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anajana@7765",
      "offset": 27
    }
  ],
  "location": "HomePageStepDef.userEnterValidPasswordInThePasswordField(String)"
});
formatter.result({
  "duration": 190773400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnSigninButton()"
});
formatter.result({
  "duration": 2594830800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userShouldAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 1238139500,
  "status": "passed"
});
formatter.after({
  "duration": 6805997400,
  "status": "passed"
});
formatter.before({
  "duration": 9078724800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user should able to get card payment option",
  "description": "",
  "id": "starbucks-homepage;user-should-able-to-get-card-payment-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on the starbucks coffee home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user click on the card option from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on PayByMobile Option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should able to get payment App Page Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.userIsOnTheStarbucksCoffeeHomePage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnTheCardOptionFromTheTopBar()"
});
formatter.result({
  "duration": 1549664500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnPayByMobileOption()"
});
formatter.result({
  "duration": 4856641100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userShouldAbleToGetPaymentAppPageSuccessfully()"
});
formatter.result({
  "duration": 22578200,
  "status": "passed"
});
formatter.after({
  "duration": 9442354300,
  "status": "passed"
});
formatter.before({
  "duration": 7997718800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user should able to click all top bar options successfully",
  "description": "",
  "id": "starbucks-homepage;user-should-able-to-click-all-top-bar-options-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on the starbucks Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user click on Cofee Option",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user click on Menu Option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Click On CofeeHouse Option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Click On Careers Option",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Click On Responsibility Option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user click On Card Option",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should able to click all options successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.userIsOnTheStarbucksHomePage()"
});
formatter.result({
  "duration": 102900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnCofeeOption()"
});
formatter.result({
  "duration": 305420500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnMenuOption()"
});
formatter.result({
  "duration": 304888100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnCofeeHouseOption()"
});
formatter.result({
  "duration": 577137900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnCareersOption()"
});
formatter.result({
  "duration": 434503700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnResponsibilityOption()"
});
formatter.result({
  "duration": 276423600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userClickOnCardOption()"
});
formatter.result({
  "duration": 258454400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.userShouldAbleToClickAllOptionsSuccessfully()"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.after({
  "duration": 9719284400,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/registration.feature");
formatter.feature({
  "line": 1,
  "name": "StarBucks HomePage",
  "description": "",
  "id": "starbucks-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user should able t register successfully with valid credentials",
  "description": "",
  "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on join option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is on the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter first name \"\u003cfName\u003e\"in first name field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter last name \"\u003clName\u003e\"in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter address line one\"\u003cAddressOne\u003e\" in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter address line two\"\u003cAddressTwo\u003e\" in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter city\"\u003cCity\u003e\" in the city field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter postcode \"\u003cPostCode\u003e\"in the postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter email \"\u003cEmail\u003e\"address in the email field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter password \"\u003cPassword\u003e\"in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on the t\u0026c check box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "fName",
        "lName",
        "AddressOne",
        "AddressTwo",
        "City",
        "PostCode",
        "Email",
        "Password"
      ],
      "line": 22,
      "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Nandini",
        "timla",
        "60, harrow road",
        "Harrow",
        "London",
        "ha0 4dx",
        "nandini0988@gmail.com",
        "Nandini@8890"
      ],
      "line": 23,
      "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "Anjana",
        "Om",
        "5 ,Pinner road",
        "Pinner",
        "London",
        "ha5 5lg",
        "anajanaom87@gmail.com",
        "Anajana@7765"
      ],
      "line": 24,
      "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11111320200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user should able t register successfully with valid credentials",
  "description": "",
  "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on join option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is on the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter first name \"Nandini\"in first name field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter last name \"timla\"in last name field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter address line one\"60, harrow road\" in the address field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter address line two\"Harrow\" in the address field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter city\"London\" in the city field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter postcode \"ha0 4dx\"in the postcode field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter email \"nandini0988@gmail.com\"address in the email field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter password \"Nandini@8890\"in the password field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on the t\u0026c check box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 138100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userClickOnJoinOption()"
});
formatter.result({
  "duration": 4379796900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userIsOnTheRegistrationPage()"
});
formatter.result({
  "duration": 44500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandini",
      "offset": 23
    }
  ],
  "location": "RegistrationStepDef.userEnterFirstNameInFirstNameField(String)"
});
formatter.result({
  "duration": 179667200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "timla",
      "offset": 22
    }
  ],
  "location": "RegistrationStepDef.userEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 111462600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60, harrow road",
      "offset": 28
    }
  ],
  "location": "RegistrationStepDef.userEnterAddressLineOneInTheAddressField(String)"
});
formatter.result({
  "duration": 173257500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 28
    }
  ],
  "location": "RegistrationStepDef.userEnterAddressLineTwoInTheAddressField(String)"
});
formatter.result({
  "duration": 270409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 16
    }
  ],
  "location": "RegistrationStepDef.userEnterCityInTheCityField(String)"
});
formatter.result({
  "duration": 487840100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ha0 4dx",
      "offset": 21
    }
  ],
  "location": "RegistrationStepDef.userEnterPostcodeInThePostcodeField(String)"
});
formatter.result({
  "duration": 269110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini0988@gmail.com",
      "offset": 18
    }
  ],
  "location": "RegistrationStepDef.userEnterEmailAddressInTheEmailField(String)"
});
formatter.result({
  "duration": 266827600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandini@8890",
      "offset": 21
    }
  ],
  "location": "RegistrationStepDef.userEnterPasswordInThePasswordField(String)"
});
formatter.result({
  "duration": 197671200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userClickOnTheTCCheckBox()"
});
formatter.result({
  "duration": 347675300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 10651760300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 21774000,
  "status": "passed"
});
formatter.after({
  "duration": 7157190200,
  "status": "passed"
});
formatter.before({
  "duration": 8824167300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should able t register successfully with valid credentials",
  "description": "",
  "id": "starbucks-homepage;user-should-able-t-register-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on join option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is on the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter first name \"Anjana\"in first name field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter last name \"Om\"in last name field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter address line one\"5 ,Pinner road\" in the address field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter address line two\"Pinner\" in the address field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter city\"London\" in the city field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter postcode \"ha5 5lg\"in the postcode field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter email \"anajanaom87@gmail.com\"address in the email field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter password \"Anajana@7765\"in the password field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on the t\u0026c check box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userClickOnJoinOption()"
});
formatter.result({
  "duration": 4049067100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userIsOnTheRegistrationPage()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anjana",
      "offset": 23
    }
  ],
  "location": "RegistrationStepDef.userEnterFirstNameInFirstNameField(String)"
});
formatter.result({
  "duration": 263131900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Om",
      "offset": 22
    }
  ],
  "location": "RegistrationStepDef.userEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 86586700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 ,Pinner road",
      "offset": 28
    }
  ],
  "location": "RegistrationStepDef.userEnterAddressLineOneInTheAddressField(String)"
});
formatter.result({
  "duration": 172350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pinner",
      "offset": 28
    }
  ],
  "location": "RegistrationStepDef.userEnterAddressLineTwoInTheAddressField(String)"
});
formatter.result({
  "duration": 138396700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 16
    }
  ],
  "location": "RegistrationStepDef.userEnterCityInTheCityField(String)"
});
formatter.result({
  "duration": 181164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ha5 5lg",
      "offset": 21
    }
  ],
  "location": "RegistrationStepDef.userEnterPostcodeInThePostcodeField(String)"
});
formatter.result({
  "duration": 470888400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anajanaom87@gmail.com",
      "offset": 18
    }
  ],
  "location": "RegistrationStepDef.userEnterEmailAddressInTheEmailField(String)"
});
formatter.result({
  "duration": 171452100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anajana@7765",
      "offset": 21
    }
  ],
  "location": "RegistrationStepDef.userEnterPasswordInThePasswordField(String)"
});
formatter.result({
  "duration": 108923300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userClickOnTheTCCheckBox()"
});
formatter.result({
  "duration": 310986800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 10608262900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 54896200,
  "status": "passed"
});
formatter.after({
  "duration": 9685818700,
  "status": "passed"
});
});