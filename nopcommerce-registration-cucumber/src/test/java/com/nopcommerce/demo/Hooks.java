package com.nopcommerce.demo;

import com.nopcommerce.demo.basepage.BasePage;
import com.nopcommerce.demo.browserselector.BrowserSelector;
import com.nopcommerce.demo.loadproperty.LoadProperty;
import cucumber.api.java.After;
import cucumber.api.java.Before;

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
