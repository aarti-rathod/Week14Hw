package in.automationtesting.demo.page;

import in.automationtesting.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FileDownload extends Util {

    private static final Logger log = LogManager.getLogger(FileDownload.class.getName());

    @FindBy(xpath = "//a[contains(text(),'More')]")
    WebElement clickMore;

    @FindBy(xpath = "//a[contains(text(),'File Download')]")
    WebElement fileDownload;

    @FindBy(xpath = "//a[@class='btn btn-primary']")
    WebElement getFileDownload;


    public void clickOnMore() {
        waitFor(5);
        log.info("click on More Option");
        clickOnElement(clickMore);
    }

    public void clickOnFileDownlod() {
        log.info("Click On File Download");
        clickOnElement(fileDownload);
        waitFor(4);
    }

    public void clickOnDownload() {
        log.info("click On Download ..");
        clickOnElement(getFileDownload);
        waitFor(4);
    }

    public void verifyTitle() {
        log.info("Verify Downloading ..");
        String expectedTitle = "File input - Multi select";
        String actualTitle = driver.getTitle();
        verifyActualAndExpectedjunit(expectedTitle, actualTitle);
    }


}
