package uk.co.starbucks;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.starbucks.page.Registration;

public class RegistrationStepDef {

    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {
    }

    @When("^user click on join option$")
    public void userClickOnJoinOption() {
        new Registration().clickOnJoin();
    }

    @Then("^user is on the registration page$")
    public void userIsOnTheRegistrationPage() {
    }

    @When("^user enter first name \"([^\"]*)\"in first name field$")
    public void userEnterFirstNameInFirstNameField(String fName) {
        new Registration().enterFirstName(fName);
    }

    @And("^user enter last name \"([^\"]*)\"in last name field$")
    public void userEnterLastNameInLastNameField(String lName) {
        new Registration().enterLastName(lName);
    }

    @And("^user enter address line one\"([^\"]*)\" in the address field$")
    public void userEnterAddressLineOneInTheAddressField(String fAdd) {
        new Registration().enterAddressLineOne(fAdd);
    }

    @And("^user enter address line two\"([^\"]*)\" in the address field$")
    public void userEnterAddressLineTwoInTheAddressField(String sAdd) {
        new Registration().enterAddressLineTwo(sAdd);
    }

    @And("^user enter city\"([^\"]*)\" in the city field$")
    public void userEnterCityInTheCityField(String city) {
        new Registration().enterCityName(city);
    }

    @And("^user enter postcode \"([^\"]*)\"in the postcode field$")
    public void userEnterPostcodeInThePostcodeField(String postCode) {
        new Registration().enterPostCode(postCode);
    }

    @And("^user enter email \"([^\"]*)\"address in the email field$")
    public void userEnterEmailAddressInTheEmailField(String email) {
        new Registration().enterEmail();
    }

    @And("^user enter password \"([^\"]*)\"in the password field$")
    public void userEnterPasswordInThePasswordField(String passWord) {
        new Registration().enterPassword(passWord);
    }

    @And("^user click on the t&c check box$")
    public void userClickOnTheTCCheckBox() {
        new Registration().clickOnCheckBox();
    }

    @And("^user click on create account button$")
    public void userClickOnCreateAccountButton() {
        new Registration().clickOnSubmit();
    }

    @Then("^user should able to register successfully$")
    public void userShouldAbleToRegisterSuccessfully() {
        new Registration().verifyWelcomeText();
    }

}
