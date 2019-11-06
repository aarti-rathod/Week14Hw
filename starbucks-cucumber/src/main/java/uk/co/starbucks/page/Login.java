package uk.co.starbucks.page;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import uk.co.starbucks.utility.Util;


public class Login extends Util {

    Logger logger = LogManager.getLogger(Login.class.getName());

    @FindBy(xpath = "//a[@id='signIn']")
    WebElement _signIn;

    @FindBy(xpath = "//input[@id='username']")
    WebElement _userName;

    @FindBy(xpath = "//input[@id='password']")
    WebElement _password;

    @FindBy(xpath = "//button[@class='sb-frap']")
    WebElement _loginBtn;

    @FindBy(how = How.XPATH, using = "//h2[@class='welcome-message']")
    WebElement welcomeText;


    public void clickOnSignIN() {
        logger.info("click on sign in link");
        clickOnElement(_signIn);
    }

    public void enterUserName(String emailAdd) {
        logger.info("enter email");
        sendTextToElement(_userName, emailAdd);
        keyTAB(_userName);
    }

    public void enterPassword(String pwd) {
        logger.info("enter password");
        sendTabText(_password, pwd);
        keyTAB(_password);
    }

    public void clickOnSignInBtn() {
        logger.info("click on login button");
        clickOnElement(_loginBtn);
        waitFor(2);
    }

    public void verifyWelcomeText() {
        String expectedTitle = "Hello," + " " + "Anjana";
        String actualtitle = welcomeText.getText();
        verifyActualAndExpectedjunit(expectedTitle, actualtitle);
    }

}
