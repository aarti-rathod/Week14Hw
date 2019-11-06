package com.letskodeit.learn.pageclass;

import com.letskodeit.learn.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends Util {

    Logger logger = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(how = How.XPATH, using = "//a[@class='navbar-link fedora-navbar-link']")
    WebElement _loginbtn;

    @FindBy(how = How.XPATH, using = "//input[@id='user_email']")
    WebElement _emailField;

    @FindBy(how = How.XPATH, using = "//input[@id='user_password']")
    WebElement _passWord;

    @FindBy(how = How.XPATH, using = "//input[@value='Log In']")
    WebElement _submit;

    public void clickOnLoginLink() {
        logger.info("click on login link");
        clickOnElement(_loginbtn);
    }

    public void enterEmail(String email) {
        logger.info("enter email address");
        sendTextToElement(_emailField, email);
    }

    public void enterPassword(String passWord) {
        logger.info("enter password");
        sendTextToElement(_passWord, passWord);
    }

    public void clickSubmitButton() {
        logger.info("click on submit");
        clickOnElement(_submit);
    }

    public void verifyLogin() {
        String expectedTite = "Let's Kode It";
        String actualTitle = driver.getTitle();
        verifyActualAndExpectedjunit(expectedTite, actualTitle);
    }

}
