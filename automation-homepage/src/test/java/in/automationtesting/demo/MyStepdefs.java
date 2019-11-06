package in.automationtesting.demo;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import in.automationtesting.demo.page.Alert;
import in.automationtesting.demo.page.FileDownload;
import in.automationtesting.demo.page.Registration;
import in.automationtesting.demo.page.Summer;

public class MyStepdefs {

    @Given("^user is on the Homepage$")
    public void userIsOnTheHomepage() {
    }

    @When("^user Click On Wysi Option$")
    public void userClickOnWysiOption() {
        new Summer().selectWys();
    }

    @And("^user click summer note$")
    public void userClickSummerNote() {
        new Summer().summerNoteSel();
    }

    @Then("^user should able to get summer note$")
    public void userShouldAbleToGetSummerNote() {
        new Summer().getNote();
    }

    @Given("^user is on HomePage$")
    public void userIsOnHomePage() {

    }

    @When("^user click on More Option$")
    public void userClickOnMoreOption() {
        new FileDownload().clickOnMore();
    }

    @And("^user click File Download Option$")
    public void userClickFileDownloadOption() {
        new FileDownload().clickOnFileDownlod();
    }

    @And("^user click on download button$")
    public void userClickOnDownloadButton() {
        new FileDownload().clickOnDownload();
    }

    @Then("^user should able to  DownLoad File succeessfully$")
    public void userShouldAbleToDownLoadFileSucceessfully() {
        new FileDownload().verifyTitle();
    }

    @When("^user click SwitchTo option$")
    public void userClickSwitchToOption() {
        new Alert().clickOnSwithTo();
    }

    @And("^user click on Alert option$")
    public void userClickOnAlertOption() {
        new Alert().clickOnAlerts();
    }

    @And("^user click on Alert with Textbox$")
    public void userClickOnAlertWithTextbox() {
        new Alert().clickOnAlertWithTextBox();
    }

    @Then("^user should able to get Alert Text$")
    public void userShouldAbleToGetAlertText() {
        new Alert().matchTitle();
    }

    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {
    }

    @When("^user enter first name \"([^\"]*)\" in firstname field$")
    public void userEnterFirstNameInFirstnameField(String firstName) {
        new Registration().enterFirstName(firstName);
    }

    @And("^user enter lastname \"([^\"]*)\" in lastName field$")
    public void userEnterLastnameInLastNameField(String lastName) {
        new Registration().enterLastName(lastName);
    }

    @And("^user enter email \"([^\"]*)\" in email field$")
    public void userEnterEmailInEmailField(String email) {
        new Registration().enterEmailAddress(email);
    }

    @And("^user enter phonenumber \"([^\"]*)\" in phone field$")
    public void userEnterPhonenumberInPhoneField(String phoneNumber) {
        new Registration().enterPhoneNumber(phoneNumber);
    }

    @And("^user select gender$")
    public void userSelectGender() {
        new Registration().selectGenderRadioButton();
    }

    @And("^user select country$")
    public void userSelectCountry() {
        new Registration().selectCountry();
    }

    @And("^user select year \"([^\"]*)\" from the field$")
    public void userSelectYearFromTheField(String year) {
        new Registration().selectDobYear(year);
    }

    @And("^user select month \"([^\"]*)\" from the field$")
    public void userSelectMonthFromTheField(String month) {
        new Registration().selectDobMonth(month);
    }

    @And("^user select day \"([^\"]*)\" from the field$")
    public void userSelectDayFromTheField(String day) {
        new Registration().selectDobDay(day);
    }

    @And("^user enter password\"([^\"]*)\"in the field$")
    public void userEnterPasswordInTheField(String passWord) {
        new Registration().enterPassword(passWord);
    }

    @And("^user enter confirm\"([^\"]*)\" in the field$")
    public void userEnterConfirmInTheField(String cPassword) {
        new Registration().enterCpassword(cPassword);
    }

    @And("^user click on submit button$")
    public void userClickOnSubmitButton() {
        new Registration().enterSubmitButton();
    }

    @Then("^user should able to register successfully$")
    public void userShouldAbleToRegisterSuccessfully() {
        new Registration().verifyUserRegistredSuccessFully();
    }
}
