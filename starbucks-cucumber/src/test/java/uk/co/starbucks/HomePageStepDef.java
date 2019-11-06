package uk.co.starbucks;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.starbucks.page.Card;
import uk.co.starbucks.page.HomePage;
import uk.co.starbucks.page.Login;

public class HomePageStepDef {

    @Given("^user is on the starbuck home page$")
    public void userIsOnTheStarbuckHomePage() {

    }

    @When("^user click on login link$")
    public void userClickOnLoginLink() {
        new Login().clickOnSignIN();
    }

    @And("^user enter valid email address\"([^\"]*)\"in the email field$")
    public void userEnterValidEmailAddressInTheEmailField(String email) {
        new Login().enterUserName(email);
    }

    @And("^user enter valid password \"([^\"]*)\" in the password field$")
    public void userEnterValidPasswordInThePasswordField(String passWord) {
        new Login().enterPassword(passWord);
    }

    @And("^user click on signin button$")
    public void userClickOnSigninButton() {
        new Login().clickOnSignInBtn();
    }

    @Then("^user should able to login successfully$")
    public void userShouldAbleToLoginSuccessfully() {
        new Login().verifyWelcomeText();
    }

    @Given("^user is on the starbucks coffee home page$")
    public void userIsOnTheStarbucksCoffeeHomePage() {

    }

    @When("^user click on the card option from the top bar$")
    public void userClickOnTheCardOptionFromTheTopBar() {
        new Card().clickOnCard();
    }

    @And("^user click on PayByMobile Option$")
    public void userClickOnPayByMobileOption() {
        new Card().clickOnPayOnMobile();
    }

    @Then("^user should able to get payment App Page Successfully$")
    public void userShouldAbleToGetPaymentAppPageSuccessfully() {
        new Card().verifyTitle();
    }

    @Given("^user is on the starbucks Home page$")
    public void userIsOnTheStarbucksHomePage() {
    }

    @When("^user click on Cofee Option$")
    public void userClickOnCofeeOption() {
        new HomePage().clickOnCoffee();
    }

    @And("^user click on Menu Option$")
    public void userClickOnMenuOption() {
        new HomePage().clickOnMenu();
    }

    @And("^user Click On CofeeHouse Option$")
    public void userClickOnCofeeHouseOption() {
        new HomePage().clickOnCoffeeHouse();
    }

    @And("^user Click On Careers Option$")
    public void userClickOnCareersOption() {
        new HomePage().clickOnCareers();
    }

    @And("^user Click On Responsibility Option$")
    public void userClickOnResponsibilityOption() {
        new HomePage().clickOnResponsibility();
    }

    @And("^user click On Card Option$")
    public void userClickOnCardOption() {
        new HomePage().clickOnCard();
    }

    @Then("^user should able to click all options successfully$")
    public void userShouldAbleToClickAllOptionsSuccessfully() {
    }


}
