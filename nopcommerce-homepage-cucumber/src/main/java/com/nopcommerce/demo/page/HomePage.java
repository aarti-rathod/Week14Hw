package com.nopcommerce.demo.page;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Util {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[text()='Computers ']")
    WebElement selectComp;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Electronics')]")
    WebElement selectEle;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Apparel')]")
    WebElement selectapp;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Digital downloads')]")
    WebElement selectDigital;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]")
    WebElement selectBooks;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Jewelry')]")
    WebElement selectJewellery;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Gift Cards')]")
    WebElement selectGiftCards;


    public void selectComputerFromTaskBar() {
        log.info("---select computer option ---");
        clickOnElement(selectComp);
    }

    public void verifyComputerOptionSelected() {
        log.info("---verify computer option ---");
        String expectedText = "nopCommerce demo store. Computers";
        String actualText = driver.getTitle();
        verifyActualAndExpectedjunit(actualText, expectedText);
        waitFor(4);
    }

    public void selectElectronicsFromTaskBar() {
        log.info("---select Electronics option ---");
        clickOnElement(selectEle);
    }

    public void verifyElectronicsOptionSelected() {
        log.info("---verify Electronics option ---");
        String expectedText = "nopCommerce demo store. Electronics";
        String actualText = driver.getTitle();
        verifyActualAndExpectedjunit(actualText, expectedText);
    }


    public void selectApparelFromTaskBar() {
        log.info("---select Apparel option ---");
        clickOnElement(selectapp);
    }

    public void verifyApparelOptionSelected() {
        log.info("---Verify Apparel option ---");
        String expectedText = "nopCommerce demo store. Apparel";
        String actualText = driver.getTitle();
        verifyActualAndExpectedjunit(actualText, expectedText);

    }

    public void selectDigitalDownLoadsFromTaskBar() {
        log.info("---Select Digital Download option ---");
        clickOnElement(selectDigital);
    }

    public void verifyDigitalDownLoadOptionSelected() {
        log.info("---Verify Digital Download option ---");
        String expectedText = "nopCommerce demo store. Digital downloads";
        String actualText = driver.getTitle();
        waitFor(5);
        verifyActualAndExpectedjunit(actualText, expectedText);
    }

    public void selectBooksFromTaskBar() {
        log.info("---Select Books option ---");
        clickOnElement(selectBooks);
    }

    public void verifyBooksOptionSelected() {
        log.info("---Verify Books option ---");
        String expectedText = "nopCommerce demo store. Books";
        String actualText = driver.getTitle();
        verifyActualAndExpectedjunit(actualText, expectedText);
    }


    public void selectJewelryFromTaskbar() {
        log.info("---Select Jewelry option ---");
        clickOnElement(selectJewellery);
    }

    public void verifyJewelryOptionSelected() {
        log.info("---Verify Jewelry option ---");
        String expectedText = "nopCommerce demo store. Jewelry";
        String actualText = driver.getTitle();
        verifyActualAndExpectedjunit(actualText, expectedText);

    }


    public void selectGiftCardsFromTaskBar() {
        log.info("---Select GiftCards option ---");
        clickOnElement(selectGiftCards);
    }

    public void verifyGiftCardsOptionSel() {
        log.info("---verify GiftCards option ---");
        String expectedText = "nopCommerce demo store. Gift Cards";
        String actualText = driver.getTitle();
        verifyActualAndExpectedjunit(actualText, expectedText);
    }

}


