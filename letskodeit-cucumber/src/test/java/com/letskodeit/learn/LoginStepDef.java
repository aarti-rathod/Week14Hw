package com.letskodeit.learn;

import com.letskodeit.learn.pageclass.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
    @Given("^user is on the homepage$")
    public void userIsOnTheHomepage() {
    }

    @When("^user click on login link$")
    public void userClickOnLoginLink() {
        new LoginPage().clickOnLoginLink();
    }

    @And("^user enter email \"([^\"]*)\" to the emailfield$")
    public void userEnterEmailToTheEmailfield(String email) {
        new LoginPage().enterEmail(email);
    }

    @And("^user enter password \"([^\"]*)\" to password field$")
    public void userEnterPasswordToPasswordField(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^user click on the Login Button$")
    public void userClickOnTheLoginButton() {
        new LoginPage().clickSubmitButton();
    }

    @Then("^user should able to login successfully$")
    public void userShouldAbleToLoginSuccessfully() {
        new LoginPage().verifyLogin();
    }
}
