package com.letskodeit.learn;

import com.letskodeit.learn.pageclass.PracticePage;
import com.letskodeit.learn.pageclass.PracticePageTwo;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PracticePageStepDef {

    @Given("^user is on the mainpage$")
    public void userIsOnTheMainpage() {
    }

    @When("^user click on practice link$")
    public void userClickOnPracticeLink() {
        new PracticePage().clickOnPracticePage();
    }

    @Then("^user on the practice Page$")
    public void userOnThePracticePage() {
    }

    @Given("^user is on the practice page$")
    public void userIsOnThePracticePage() {
    }

    @When("^user select BMW radio Button$")
    public void userSelectBMWRadioButton() {
        new PracticePage().selectBmwRadioButton();
    }

    @Then("^BMW option should be selected$")
    public void bmwOptionShouldBeSelected() {
        new PracticePage().verifyBmwRadioButtonSelected();
    }

    @And("^user select Benz radio Button$")
    public void userSelectBenzRadioButton() {
        new PracticePage().selectBenzRadioButton();
    }

    @Then("^Benz option should be selected$")
    public void benzOptionShouldBeSelected() {
        new PracticePage().verifyBenzRadioButtonSelected();
    }

    @And("^user select Honda radio Button$")
    public void userSelectHondaRadioButton() {
        new PracticePage().selectHondaRadioButton();
    }

    @Then("^Honda option should be selected$")
    public void hondaOptionShouldBeSelected() {
        new PracticePage().verifyHondaRadioButtonSelected();
    }

    @When("^user enter \"([^\"]*)\" in alert text box$")
    public void userEnterInAlertTextBox(String text) {
        new PracticePage().enterTextInAlertWindow(text);
    }

    @And("^user click on alert button$")
    public void userClickOnAlertButton() {
        new PracticePage().clickOnAlertBtn();
    }

    @Then("^user should able to get alert text \"([^\"]*)\" successfully$")
    public void userShouldAbleToGetAlertTextSuccessfully(String alertText) {
        new PracticePage().getAlertText(alertText);
    }

    @When("^user observe java course in product table$")
    public void userObserveJavaCourseInProductTable() {
    }

    @Then("^user should able to get \"([^\"]*)\" price for the java course$")
    public void userShouldAbleToGetPriceForTheJavaCourse(String javaFees) {
        new PracticePageTwo().verifySeleniumJavaCourseFees(javaFees);
    }

    @And("^user observe python course in product table$")
    public void userObservePythonCourseInProductTable() {
    }

    @Then("^user should able to get \"([^\"]*)\" price in the python course$")
    public void userShouldAbleToGetPriceInThePythonCourse(String pythonFees) {
        new PracticePageTwo().verifyPythonJavaCourseFees(pythonFees);
    }

    @And("^user observe JavaScript course in the product table$")
    public void userObserveJavaScriptCourseInTheProductTable() {
    }

    @Then("^user should able to get \"([^\"]*)\" price for the java Script$")
    public void userShouldAbleToGetPriceForTheJavaScript(String javaScriptFees) {
        new PracticePageTwo().verifySeleniumJavaScriptCourseFees(javaScriptFees);
    }

    @When("^user mouse hover on the Mouse Hover Option$")
    public void userMouseHoverOnTheMouseHoverOption() {
        new PracticePageTwo().setMouserHover();
    }

    @Then("^user should able to get \"([^\"]*)\" and \"([^\"]*)\" option during mouse hover$")
    public void userShouldAbleToGetAndOptionDuringMouseHover(String tab, String reload) {
        new PracticePageTwo().verifyMouseHoverptions(tab, reload);
    }

}
