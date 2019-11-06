package in.automationtesting.demo;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import in.automationtesting.demo.basepage.BasePage;
import in.automationtesting.demo.browserselector.BrowserSelector;
import in.automationtesting.demo.loadproperty.LoadProperty;

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
