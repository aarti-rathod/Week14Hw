package uk.co.starbucks.page;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import uk.co.starbucks.utility.Util;


public class HomePage extends Util {

    Logger logger = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//li[@id='nav_coffee']//a[@class='tab']")
    WebElement coffee_;

    @FindBy(xpath = "//li[@id='nav_menu']//a[@class='tab']")
    WebElement menu_;

    @FindBy(xpath = "//li[@id='nav_coffeehouse']//a[@class='tab']")
    WebElement coffeeHouse_;

    @FindBy(how = How.XPATH, using = "//li[@id='nav_careers']//a[@class='tab']")
    WebElement careers_;

    @FindBy(how = How.XPATH, using = "//li[@id='nav_responsibility']//a[@class='tab']")
    WebElement responsibility_;

    @FindBy(how = How.XPATH, using = "//li[@id='nav_card']//a[@class='tab']")
    WebElement card_;


    public void clickOnCoffee() {
        logger.info("click on cofee");
        clickOnElement(coffee_);
    }

    public void clickOnMenu() {
        logger.info("click on menu");
        clickOnElement(menu_);
    }

    public void clickOnCoffeeHouse() {
        logger.info("click on cofee");
        clickOnElement(coffeeHouse_);
    }

    public void clickOnCareers() {
        logger.info("click on cofee");
        clickOnElement(careers_);
    }

    public void clickOnResponsibility() {
        logger.info("click on responsibility");
        clickOnElement(responsibility_);
    }

    public void clickOnCard() {
        logger.info("click on card");
        clickOnElement(card_);
    }

}
