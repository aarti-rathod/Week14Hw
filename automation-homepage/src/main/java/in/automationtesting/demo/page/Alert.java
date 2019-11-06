package in.automationtesting.demo.page;

import in.automationtesting.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Alert extends Util {

    private static final Logger logger = LogManager.getLogger(Alert.class.getName());

    @FindBy(xpath = "//a[contains(text(),'SwitchTo')]")
    WebElement switchTo;

    @FindBy(xpath = "//a[contains(text(),'Alerts')]")
    WebElement alertBar;

    @FindBy(xpath = "//a[contains(text(),'Alert with Textbox')]")
    WebElement alertWithText;


    public void clickOnSwithTo() {
        logger.info("Click On Switch To ..");
        clickOnElement(switchTo);
    }

    public void clickOnAlerts() {
        logger.info("Click On Alert..");
        clickOnElement(alertBar);
    }

    public void clickOnAlertWithTextBox() {
        logger.info("click on alert text..");
        clickOnElement(alertWithText);
    }

    public void matchTitle() {
        logger.info("match title ..");
        String expectedTitle = "Alerts";
        String actualTitle = driver.getTitle();
        verifyActualAndExpectedjunit(expectedTitle, actualTitle);
    }
}
