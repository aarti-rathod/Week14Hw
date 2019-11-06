package com.nopcommerce.demo.page;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegistrationPage extends Util {

    private static final Logger log = LogManager.getLogger(RegistrationPage.class.getName());

    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement _registerLink;

    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement _firstName;

    @FindBy(xpath = "//input[@id='LastName']")
    WebElement _lastName;

    @FindBy(xpath = "//input[@id='Email']")
    WebElement _email;

    @FindBy(xpath = "//input[@id='Password']")
    WebElement _password;

    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement _confirmPassword;

    @FindBy(xpath = "//input[@id='register-button']")
    WebElement _registerBtn;

    @FindBy(xpath = "//div[@class='result']")
    WebElement textEle;

    public void clickOnRegisterLink() {
        log.info("Click On Register Link");
        clickOnElement(_registerLink);
    }

    public void verifyRegisterPageOpen(String expectedVal) {
        log.info("verify Register Page Open");
        String actualval = driver.getTitle();
        verifyActualAndExpectedjunit(expectedVal, actualval);
    }

    public void enterFirstName(String firstName) {
        waitFor();
        log.info("enter first name ");
        sendTextToElement(_firstName, firstName);
    }

    public void enterLastName(String lastName) {
        log.info("enter last name");
        sendTextToElement(_lastName, lastName);
    }

    public void enterEmailAddress(String email) {
        String ranEmail = randomStringGenerator() + "@gmail.com";
        log.info("enter email address");
        sendTextToElement(_email, ranEmail);
    }

    public void enterPassword(String pwd) {
        log.info("enter pwd");
        sendTextToElement(_password, pwd);
    }

    public void enterConfirmPassword(String cPwd) {
        log.info("enter confirm password");
        sendTextToElement(_confirmPassword, cPwd);
    }

    public void enterRegistrationBtn() {
        log.info("enter register button");
        clickOnElement(_registerBtn);
    }

    public void verifyRegisterSuccessfulMessage(String expectedMessage) {
        waitFor();
        log.info("verify text");
        String actualMessage = getTextFromElement(textEle);
        verifyActualAndExpectedjunit(expectedMessage, actualMessage);
    }

}


