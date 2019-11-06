package in.automationtesting.demo.page;

import in.automationtesting.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class Registration extends Util {

    private static final Logger log = LogManager.getLogger(Registration.class.getName());

    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement fName;

    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement lName;

    @FindBy(xpath = "//input[@class='form-control ng-pristine ng-untouched ng-valid-email ng-invalid ng-invalid-required']")
    WebElement emailAdd;

    @FindBy(xpath = "//input[@ng-model='Phone']")
    WebElement phoneNum;

    @FindBy(xpath = "//input[@value='FeMale']")
    WebElement fMaleRadioBtn;

    @FindBy(xpath = "//select[@id='countries']")
    WebElement selectCountry;

    @FindBy(xpath = "//select[@id='yearbox']")
    WebElement selectYear;

    @FindBy(xpath = "//select[@placeholder='Month']")
    WebElement selectMonth;

    @FindBy(xpath = "//select[@id='daybox']")
    WebElement selectDay;

    @FindBy(xpath = "//input[@id='firstpassword']")
    WebElement password;

    @FindBy(xpath = "//input[@id='secondpassword']")
    WebElement cPassword;

    @FindBy(xpath = "//button[@id='submitbtn']")
    WebElement submitBtn;

    public void enterFirstName(String firName) {
        log.info("Enter First Name");
        sendTextToElement(fName, firName);
    }

    public void enterLastName(String LasName) {
        log.info("Enter Last Name");
        sendTextToElement(lName, LasName);
    }

    public void enterEmailAddress(String rEmail) {
        log.info("Enter Email Address");
        String ranEmail = randomStringGenerator() + "@gmail.com";
        sendTextToElement(emailAdd, ranEmail);
    }

    public void enterPhoneNumber(String phoneNumber) {
        log.info("Enter Phone Number");
        sendTextToElement(phoneNum, phoneNumber);
    }

    public void selectGenderRadioButton() {
        log.info("Select radio button");
        clickOnElement(fMaleRadioBtn);
    }

    public void selectCountry() {
        log.info("select country");
        selectByValueFromDropDown(selectCountry, "United Kingdom");
    }

    public void selectDobYear(String year) {
        log.info("select year");
        selectByValueFromDropDown(selectYear, year);
    }

    public void selectDobMonth(String month) {
        log.info("select month");
        selectByValueFromDropDown(selectMonth, month);
    }

    public void selectDobDay(String date) {
        log.info("select date");
        selectByValueFromDropDown(selectDay, date);
    }

    public void enterPassword(String passWord) {
        log.info("Enter Password");
        sendTextToElement(password, passWord);
    }

    public void enterCpassword(String cPassWord) {
        log.info("Enter Confirm Password");
        sendTextToElement(cPassword, cPassWord);
    }

    public void enterSubmitButton() {
        log.info("Enter Submit Button");
        clickOnElement(submitBtn);
        waitFor(5);
    }

    public void verifyUserRegistredSuccessFully() {
        log.info("verify registration successfully");
        String expectedTitle = "Web Table";
        String actualTitle = driver.getTitle();
        verifyActualAndExpectedjunit(expectedTitle, actualTitle);
    }

}
