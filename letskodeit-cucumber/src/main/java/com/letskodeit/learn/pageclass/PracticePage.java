package com.letskodeit.learn.pageclass;

import com.letskodeit.learn.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PracticePage extends Util {

    Logger logger = LogManager.getLogger(PracticePage.class.getName());

    @FindBy(xpath = "//a[@class='fedora-navbar-link navbar-link']")
    WebElement _practicePage;

    @FindBy(how = How.XPATH, using = "//input[@id='bmwradio']")
    WebElement bmwOption;

    @FindBy(how = How.XPATH, using = "//input[@id='benzradio']")
    WebElement benzOption;

    @FindBy(how = How.XPATH, using = "//input[@id='hondaradio']")
    WebElement hondaOption;

    @FindBy(xpath = "//input[@id='name']")
    WebElement alertTextIpWin;

    @FindBy(xpath = "//input[@id='alertbtn']")
    WebElement alertBtn;

    //1
    public void clickOnPracticePage() {
        clickOnElement(_practicePage);
    }

    public void selectBmwRadioButton() {
        logger.info("select BMW Radio Button");
        clickOnElement(bmwOption);
    }

    public void verifyBmwRadioButtonSelected() {
        bmwOption.isSelected();
    }

    public void selectBenzRadioButton() {
        waitFor(2);
        logger.info("select Benz Radio Button");
        clickOnElement(benzOption);
    }

    public void verifyBenzRadioButtonSelected() {
        benzOption.isSelected();
    }

    public void selectHondaRadioButton() {
        logger.info("select Honda Option");
        clickOnElement(hondaOption);
    }

    public void verifyHondaRadioButtonSelected() {
        hondaOption.isSelected();
    }

    //2
    public void enterTextInAlertWindow(String name) {
        waitFor(5);
        logger.info("enter text in alert text box");
        sendTextToElement(alertTextIpWin, name);
    }

    public void clickOnAlertBtn() {
        logger.info("click on Alert Btn");
        clickOnElement(alertBtn);
        waitFor(2);
    }

    public void getAlertText(String expectedAlertText) {
        logger.info("verify alert and accept alert");
        String actualAlertText = driver.switchTo().alert().getText();
        verifyActualAndExpectedjunit(expectedAlertText, actualAlertText);
        driver.switchTo().alert().accept();
    }

}
