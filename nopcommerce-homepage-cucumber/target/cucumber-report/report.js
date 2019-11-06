$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Nop Commerce Registration",
  "description": "",
  "id": "nop-commerce-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14186204000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "I Should able to click Top Taskbar Options Successfully",
  "description": "",
  "id": "nop-commerce-registration;i-should-able-to-click-top-taskbar-options-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on the computers link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to observe on computer page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on the electronics link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should able to observe electronics page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on Appeal link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should able to observe Appearl page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on digital download link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to observe digital downloas page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on Books link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should able to observe Books Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on jewelry link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should able to observe jewelry page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click on Gift Cards",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should able to observe Gift Card Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 197466700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnTheComputersLink()"
});
formatter.result({
  "duration": 1653415600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveOnComputerPage()"
});
formatter.result({
  "duration": 4012618500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnTheElectronicsLink()"
});
formatter.result({
  "duration": 1161634000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveElectronicsPage()"
});
formatter.result({
  "duration": 14832500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAppealLink()"
});
formatter.result({
  "duration": 72875300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveAppearlPage()"
});
formatter.result({
  "duration": 13361200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ommerce demo store. [Electronics]\u003e but was:\u003c...ommerce demo store. [Apparel]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.nopcommerce.demo.utility.Util.verifyActualAndExpectedjunit(Util.java:241)\r\n\tat com.nopcommerce.demo.page.HomePage.verifyApparelOptionSelected(HomePage.java:71)\r\n\tat com.nopcommerce.demo.MyStepdefs.userShouldAbleToObserveAppearlPage(MyStepdefs.java:42)\r\n\tat ✽.Then user should able to observe Appearl page(src/test/java/resources/featurefiles/homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnDigitalDownloadLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveDigitalDownloasPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnBooksLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveBooksPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnJewelryLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveJewelryPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnGiftCards()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToObserveGiftCardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 784839300,
  "status": "passed"
});
});