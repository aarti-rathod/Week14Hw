package com.nopcommerce.demo;

import com.nopcommerce.demo.page.RegistrationPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^User is on the home page$")
    public void userIsOnTheHomePage() {
    }

    @When("^User click on the register$")
    public void userClickOnTheRegister() {
        new RegistrationPage().clickOnRegisterLink();
    }

    @Then("^User is on the registration page and can see the title \"([^\"]*)\"$")
    public void userIsOnTheRegistrationPageAndCanSeeTheTitle(String regPageTitle) {
        new RegistrationPage().verifyRegisterPageOpen(regPageTitle);
    }


    @When("^I enter \"([^\"]*)\" name in the first name field$")
    public void iEnterNameInTheFirstNameField(String firstName) {
        new RegistrationPage().enterFirstName(firstName);

    }

    @And("^I enter \"([^\"]*)\" in the last name last name field$")
    public void iEnterInTheLastNameLastNameField(String lastName) {
        new RegistrationPage().enterLastName(lastName);
    }

    @And("^I enter \"([^\"]*)\" in the Email field$")
    public void iEnterInTheEmailField(String email) {
        new RegistrationPage().enterEmailAddress(email);
    }

    @And("^I enter correct password \"([^\"]*)\"in the password field$")
    public void iEnterCorrectPasswordInThePasswordField(String pwd) {
        new RegistrationPage().enterPassword(pwd);
    }

    @And("^I enter password \"([^\"]*)\"in the confirmation password field$")
    public void iEnterPasswordInTheConfirmationPasswordField(String cPwd) {
        new RegistrationPage().enterConfirmPassword(cPwd);
    }

    @And("^I click on Register Button$")
    public void iClickOnRegisterButton() {
        new RegistrationPage().enterRegistrationBtn();
    }

    @Then("^I should able to register successfully$")
    public void iShouldAbleToRegisterSuccessfully() {
    }

    @And("^I can see the message \"([^\"]*)\"$")
    public void iCanSeeTheMessage(String verificationMessage) {
        new RegistrationPage().verifyRegisterSuccessfulMessage(verificationMessage);
    }


}
