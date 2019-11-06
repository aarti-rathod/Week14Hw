package uk.co.starbucks.page;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import uk.co.starbucks.loadproperty.LoadProperty;
import uk.co.starbucks.utility.Util;

public class Registration extends Util {

    Logger logger = LogManager.getLogger(Registration.class.getName());

    public static String verificationAccountName;

    @FindBy(how = How.XPATH, using = "//a[@id='registrationForm']")
    WebElement join_;

    @FindBy(how = How.XPATH, using = "//input[@id='firstName']")
    WebElement firstName_;

    @FindBy(how = How.XPATH, using = "//input[@id='lastName']")
    WebElement lastName_;

    @FindBy(how = How.XPATH, using = "//input[@id='addressLine1']")
    WebElement addressLine_;

    @FindBy(xpath = "//input[@id='addressLine2']")
    WebElement addressLineTwo_;

    @FindBy(xpath = "//input[@id='city']")
    WebElement city_;

    @FindBy(xpath = "//input[@id='postalCode']")
    WebElement _postcode;

    @FindBy(xpath = "//input[@id='emailAddress']")
    WebElement _email;

    @FindBy(how = How.XPATH, using = "//input[@id='password']")
    WebElement _password;

    @FindBy(xpath = "//div[@class='sb-contentColumn mx-auto sb-contentColumn--narrow']//form//div//div//*[@class='valign-middle block option__labelIcon']")
    WebElement _termsandcon;

    @FindBy(how = How.XPATH, using = "//button[@class='sb-frap']")
    WebElement _submit;

    @FindBy(how = How.XPATH, using = "//h2[@class='welcome-message']")
    WebElement welcomeText;

    public void clickOnJoin() {
        logger.info("click on join");
        clickOnElement(join_);
    }

    public void enterFirstName(String fname) {
        logger.info("enter First name");
        verificationAccountName = fname;
        sendTextToElement(firstName_, fname);
        keyTAB(firstName_);
    }

    public void enterLastName(String lname) {
        logger.info("enter last name");
        sendTabText(lastName_, lname);
        keyTAB(lastName_);
    }

    public void enterAddressLineOne(String addOne) {
        logger.info("enter address one");
        sendTabText(addressLine_, addOne);
        keyTAB(addressLine_);
    }

    public void enterAddressLineTwo(String addTwo) {
        logger.info("enter address two");
        sendTabText(addressLineTwo_, addTwo);
        keyTAB(addressLineTwo_);
    }

    public void enterCityName(String cityName) {
        logger.info("enter city name");
        sendTabText(city_, cityName);
        keyTAB(city_);
    }

    public void enterPostCode(String postCode) {
        logger.info("enter post code");
        sendTabText(_postcode, postCode);
        keyTAB(_postcode);
    }

    public void enterEmail() {
        logger.info("enter email");
        String randomEmail = getRandomString(4) + "56@gmail.com";
        _email.sendKeys(randomEmail);
        keyTAB(_email);
    }

    public void enterPassword(String pwd) {
        logger.info("enter password");
        sendTabText(_password, pwd);
    }

    public void clickOnCheckBox() {
        logger.info("cick on check box");
        clickOnElement(_termsandcon);
    }

    public void clickOnSubmit() {
        logger.info("click on submit button");
        clickOnElement(_submit);
        waitFor(10);
    }

    public void verifyWelcomeText() {
        logger.info("verify welcome text");
        String expectedTitle = "Hello," + " " + verificationAccountName;
        String actualtitle = welcomeText.getText();
        verifyActualAndExpectedjunit(expectedTitle, actualtitle);
    }
}
