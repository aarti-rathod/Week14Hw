package in.automationtesting.demo.page;

import in.automationtesting.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class Summer extends Util {
    private static final Logger log = LogManager.getLogger(Summer.class.getName());

    @FindBy(xpath = "//a[contains(text(),'WYSIWYG')]")
    WebElement selection;

    @FindBy(xpath = "//a[contains(text(),'SummerNote')]")
    WebElement summerNote;

    @FindBy(xpath = "//div[@class='note-editable panel-body']//p[contains(text(),'Hello Summernote')]")
    WebElement notes;


    public void selectWys() {
        log.info("click on Wys Option");
        clickOnElement(selection);
    }

    public void summerNoteSel() {
        log.info("Click On Summer Note");
        clickOnElement(summerNote);
    }

    public void getNote() {
        log.info("Click On Get Note");
        String expectedText = "Hello Summernote";
        String actualText = getTextFromElement(notes);

        verifyActualAndExpectedjunit(expectedText, actualText);
    }
}
