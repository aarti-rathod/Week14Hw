package uk.co.starbucks.page;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.starbucks.utility.Util;


public class Card extends Util {

    Logger logger = LogManager.getLogger(Card.class.getName());

    @FindBy(xpath = "//li[@id='nav_card']//a[@class='tab']")
    WebElement _card;

    @FindBy(xpath = "//a[text()='Pay by Mobile App']")
    WebElement _mobileApp;

    public void clickOnCard() {
        logger.info("click On Card");
        clickOnElement(_card);
        clickOnElement(_card);
    }

    public void clickOnPayOnMobile() {
        logger.info("click on Mobile option");
        waitFor(2);
        clickOnElement(_mobileApp);
        waitFor(2);
    }

    public void verifyTitle() {
        logger.info("verify title");
        String expectedTitle = "Mobile Applications | Starbucks Coffee Company";
        String actualTitle = driver.getTitle();
        verifyActualAndExpectedjunit(expectedTitle, actualTitle);
    }

}
