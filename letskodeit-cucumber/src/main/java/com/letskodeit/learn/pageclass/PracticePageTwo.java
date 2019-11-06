package com.letskodeit.learn.pageclass;

import com.letskodeit.learn.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PracticePageTwo extends Util {

    Logger logger = LogManager.getLogger(PracticePage.class.getName());

    @FindBy(xpath = "//td[contains(text(),'Selenium WebDriver With Java')]/following-sibling::td")
    WebElement seleniumJavaPrice;

    @FindBy(xpath = "//td[contains(text(),'Python Programming Language')]/following-sibling::td")
    WebElement seleniumPythonPrice;

    @FindBy(xpath = "//td[contains(text(),'JavaScript Programming Language')]/following-sibling::td")
    WebElement seleniumJavaScriptPrice;

    @FindBy(xpath = "//button[@id='mousehover']")
    WebElement mouserHover;

    @FindBy(xpath = "//a[contains(text(),'Top')]")
    WebElement _topOption;

    @FindBy(xpath = "//a[contains(text(),'Reload')]")
    WebElement _reloadOption;

    //1
    public void verifySeleniumJavaCourseFees(String expectedPrice) {
        waitFor(4);
        String actualPrice = getTextFromElement(seleniumJavaPrice);
        verifyActualAndExpectedjunit(expectedPrice, actualPrice);
        logger.info("Verify Java Course Fees");
    }

    public void verifyPythonJavaCourseFees(String expectedPrice) {
        String actualPrice = getTextFromElement(seleniumPythonPrice);
        verifyActualAndExpectedjunit(expectedPrice, actualPrice);
        logger.info("Verify Python Course Fees");
    }

    public void verifySeleniumJavaScriptCourseFees(String expectedPrice) {
        String actualPrice = getTextFromElement(seleniumJavaScriptPrice);
        verifyActualAndExpectedjunit(expectedPrice, actualPrice);
        logger.info("Verify JavaScript Course Fees");
    }

    //2
    public void setMouserHover() {
        logger.info("mouse hover");
        waitFor(4);
        mouseHoverToElement(mouserHover);
        waitFor(4);
    }

    public void verifyMouseHoverptions(String top, String reload) {
        logger.info("verify mouse hover options");
        String actualTopText = _topOption.getText();
        verifyActualAndExpectedjunit(top, actualTopText);
        String actualReloadText = _reloadOption.getText();
        verifyActualAndExpectedjunit(reload, actualReloadText);
    }

}
