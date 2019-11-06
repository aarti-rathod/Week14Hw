package uk.co.starbucks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.starbucks.basepage.BasePage;
import uk.co.starbucks.browserselector.BrowserSelector;
import uk.co.starbucks.loadproperty.LoadProperty;

public class Hooks extends BasePage {

    BrowserSelector browserSelector = new BrowserSelector();
    String browser = new LoadProperty().getProperty("browser");


    @Before()
    public void setUP() {
        browserSelector.selectBrowsers(browser);
    }

    @After()
    public void tearDown() {
        driver.quit();
    }

}
