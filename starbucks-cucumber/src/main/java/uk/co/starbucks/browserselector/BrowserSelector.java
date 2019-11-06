package uk.co.starbucks.browserselector;


import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import uk.co.starbucks.basepage.BasePage;
import uk.co.starbucks.loadproperty.LoadProperty;

import java.util.concurrent.TimeUnit;

/*
Browser Selection
 */
public class BrowserSelector extends BasePage {

    String baseUrl = new LoadProperty().getProperty("baseUrl");
    String projectPath = System.getProperty("user.dir");

    public void selectBrowsers(String browser) {

        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", projectPath + "\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
            driver.get(baseUrl);
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);


        } else if (browser.equalsIgnoreCase("firefox")) {

            System.setProperty("webdriver.gecko.driver", projectPath + "\\drivers\\geckodriver.exe");
            driver = new FirefoxDriver();
            driver.get(baseUrl);
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.manage().window().maximize();

        } else if (browser.equalsIgnoreCase("ie")) {

            System.setProperty("webdriver.ie.driver", projectPath + "\\drivers\\IEDriverServer.exe");
            driver = new InternetExplorerDriver();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.manage().window().maximize();


        } else {
            System.out.println("Wrong browser name");
        }

    }

}



