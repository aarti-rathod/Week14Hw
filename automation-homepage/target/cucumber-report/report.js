$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Practice Website",
  "description": "",
  "id": "automation-practice-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20441630800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to get Summer Note Successfully",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-get-summer-note-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Click On Wysi Option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click summer note",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should able to get summer note",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 591008200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnWysiOption()"
});
formatter.result({
  "duration": 304098000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickSummerNote()"
});
formatter.result({
  "duration": 4689044300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToGetSummerNote()"
});
formatter.result({
  "duration": 81919900,
  "status": "passed"
});
formatter.after({
  "duration": 853890900,
  "status": "passed"
});
formatter.before({
  "duration": 13152269300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Should able to get File DownLoad Successfully",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-get-file-download-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on More Option",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click File Download Option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on download button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should able to  DownLoad File succeessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnMoreOption()"
});
formatter.result({
  "duration": 5072762900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickFileDownloadOption()"
});
formatter.result({
  "duration": 10456070000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnDownloadButton()"
});
formatter.result({
  "duration": 5654835800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToDownLoadFileSucceessfully()"
});
formatter.result({
  "duration": 9273900,
  "status": "passed"
});
formatter.after({
  "duration": 784912700,
  "status": "passed"
});
formatter.before({
  "duration": 12520508900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should able to get Alert Text Successfully",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-get-alert-text-successfully",
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
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user click SwitchTo option",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user click on Alert option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click on Alert with Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should able to get Alert Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickSwitchToOption()"
});
formatter.result({
  "duration": 116197600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAlertOption()"
});
formatter.result({
  "duration": 4160328700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAlertWithTextbox()"
});
formatter.result({
  "duration": 73589900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToGetAlertText()"
});
formatter.result({
  "duration": 14048700,
  "status": "passed"
});
formatter.after({
  "duration": 782691900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "User Should Able To Register Successfully With Valid Credentials",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    },
    {
      "line": 29,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enter first name \"\u003cfirstName\u003e\" in firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enter lastname \"\u003clastName\u003e\" in lastName field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter email \"\u003cemail\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter phonenumber \"\u003cphoneNum\u003e\" in phone field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user select gender",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user select country",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user select year \"\u003cyear\u003e\" from the field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user select month \"\u003cmonth\u003e\" from the field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user select day \"\u003cday\u003e\" from the field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter password\"\u003cpassword\u003e\"in the field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enter confirm\"\u003ccPassword\u003e\" in the field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phoneNum",
        "year",
        "month",
        "day",
        "password",
        "cPassword"
      ],
      "line": 48,
      "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "nandini",
        "timla",
        "nandini0988@gmail.com",
        "9878456231",
        "1991",
        "August",
        "8",
        "Nandini8890",
        "Nandini8890"
      ],
      "line": 49,
      "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "Anjana",
        "Om",
        "Anjana7765@gmail.com",
        "5412369874",
        "1975",
        "August",
        "7",
        "Anjana7667",
        "Anjana7667"
      ],
      "line": 50,
      "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14452363600,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User Should Able To Register Successfully With Valid Credentials",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    },
    {
      "line": 29,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enter first name \"nandini\" in firstname field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enter lastname \"timla\" in lastName field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter email \"nandini0988@gmail.com\" in email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter phonenumber \"9878456231\" in phone field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user select gender",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user select country",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user select year \"1991\" from the field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user select month \"August\" from the field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user select day \"8\" from the field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter password\"Nandini8890\"in the field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enter confirm\"Nandini8890\" in the field",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 82400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.userEnterFirstNameInFirstnameField(String)"
});
formatter.result({
  "duration": 766442300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "timla",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEnterLastnameInLastNameField(String)"
});
formatter.result({
  "duration": 98370100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandini0988@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.userEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 191616700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9878456231",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.userEnterPhonenumberInPhoneField(String)"
});
formatter.result({
  "duration": 124314600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 65172600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectCountry()"
});
formatter.result({
  "duration": 358536000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1991",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.userSelectYearFromTheField(String)"
});
formatter.result({
  "duration": 117625900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "August",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userSelectMonthFromTheField(String)"
});
formatter.result({
  "duration": 109873100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userSelectDayFromTheField(String)"
});
formatter.result({
  "duration": 111742800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandini8890",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnterPasswordInTheField(String)"
});
formatter.result({
  "duration": 148994400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandini8890",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userEnterConfirmInTheField(String)"
});
formatter.result({
  "duration": 136530400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnSubmitButton()"
});
formatter.result({
  "duration": 5078855200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 3455521100,
  "status": "passed"
});
formatter.after({
  "duration": 830349300,
  "status": "passed"
});
formatter.before({
  "duration": 10536403300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User Should Able To Register Successfully With Valid Credentials",
  "description": "",
  "id": "automation-practice-website;user-should-able-to-register-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    },
    {
      "line": 29,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enter first name \"Anjana\" in firstname field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enter lastname \"Om\" in lastName field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter email \"Anjana7765@gmail.com\" in email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter phonenumber \"5412369874\" in phone field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user select gender",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user select country",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user select year \"1975\" from the field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user select month \"August\" from the field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user select day \"7\" from the field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter password\"Anjana7667\"in the field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enter confirm\"Anjana7667\" in the field",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anjana",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.userEnterFirstNameInFirstnameField(String)"
});
formatter.result({
  "duration": 161318500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Om",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEnterLastnameInLastNameField(String)"
});
formatter.result({
  "duration": 82772000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anjana7765@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.userEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 202960900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5412369874",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.userEnterPhonenumberInPhoneField(String)"
});
formatter.result({
  "duration": 143975100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 72392800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectCountry()"
});
formatter.result({
  "duration": 142399300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.userSelectYearFromTheField(String)"
});
formatter.result({
  "duration": 115004200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "August",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userSelectMonthFromTheField(String)"
});
formatter.result({
  "duration": 117530100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userSelectDayFromTheField(String)"
});
formatter.result({
  "duration": 113923100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anjana7667",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEnterPasswordInTheField(String)"
});
formatter.result({
  "duration": 132528700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anjana7667",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userEnterConfirmInTheField(String)"
});
formatter.result({
  "duration": 137799100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnSubmitButton()"
});
formatter.result({
  "duration": 5070241100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 2949947800,
  "status": "passed"
});
formatter.after({
  "duration": 951123200,
  "status": "passed"
});
});