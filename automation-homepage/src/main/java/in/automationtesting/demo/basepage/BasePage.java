package in.automationtesting.demo.basepage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/*
WebDriver Initialization
 */
public class BasePage {
    public static WebDriver driver;

    public BasePage() {
        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir") + "\\src\\test\\java\\resources\\propertiesfile\\log4j.properties");
    }


}
