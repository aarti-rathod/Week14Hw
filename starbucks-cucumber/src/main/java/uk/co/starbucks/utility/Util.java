package uk.co.starbucks.utility;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import uk.co.starbucks.basepage.BasePage;

import java.util.List;

//import java.io.File;
//import java.io.IOException;
//import java.text.SimpleDateFormat;
//import java.util.Date;

/**
 * Created by Jay
 */
public class Util extends BasePage {

    /**
     * This method will generate random number
     *
     * @return
     */
    public int generateRandomNumber() {
        return (int) (Math.random() * 5000 + 1);
    }

    /**
     * This method will click on element
     */
    public void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    /**
     * This method will click on element
     */
    public void clickOnElement(WebElement element) {
        element.click();
    }

    /**
     * This method will return text from element
     */
    public String getTextFromElement(By by) {
        return driver.findElement(by).getText();
    }

    public String getTextFromElement(WebElement element) {
        return element.getText();
    }

    /**
     * This method will send text to element or field
     */
    public void sendTextToElement(By by, String str) {
        driver.findElement(by).sendKeys(str);
    }

    public void sendTextToElement(WebElement element, String str) {
        element.sendKeys(str);

    }

    /**
     * This method will used to hover mouse on element
     */
    public void mouseHoverToElement(By by) {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(by)).perform();
    }

    public void mouseHoverToElement(WebElement element) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element).perform();
    }

    /**
     * This method will used to hover mouse on element and click
     */
    public void mouseHoverToElementAndClick(By by) {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(by)).click().perform();
    }

    public void mouseHoverToElementAndClick(WebElement element) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element).click().perform();
    }

    /**
     * This method will used to select drop down menu by visible text
     */
    public void selectByVisibleTextFromDropDown(By by, String str) {
        Select select = new Select(driver.findElement(by));
        select.selectByVisibleText(str);
    }

    public void selectByVisibleTextFromDropDown(WebElement element, String str) {
        Select select = new Select(element);
        select.selectByVisibleText(str);
    }

    /**
     * This method will used to select drop down menu by index
     */
    public void selectByIndexFromDropDown(By by, int index) {
        Select select = new Select(driver.findElement(by));
        select.selectByIndex(index);
    }

    public void selectByIndexFromDropDown(WebElement element, int index) {
        Select select = new Select(element);
        select.selectByIndex(index);
    }

    /**
     * This method will used to select drop down menu by value
     */
    public void selectByValueFromDropDown(By by, String value) {
        Select select = new Select(driver.findElement(by));
        select.selectByValue(value);
    }

    public void selectByValueFromDropDown(WebElement element, String value) {
        Select select = new Select(element);
        select.selectByValue(value);
    }

    /*   *//**
     * This method will used to wait web driver until element become clickable
     *//*
    public void waitUntilElementToBeClickable(By by, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(by)));
    }

    *//**
     * This method will used to wait web driver until presence of element located by locator
     *//*
    public void waitUntilPresenceOfElementLocated(By by, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.presenceOfElementLocated(by));
    }

    *//**
     * This method will used to wait web driver until visibility of element located by locator
     *//*
    public void waitUntilVisibilityOfElementLocated(By by, int timeout){
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }
*/

    /**
     * This method will verify that element is displayed
     */
    public boolean verifyThatElementIsDisplayed(By by) {
        WebElement element = driver.findElement(by);
        if (element.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }

    public boolean verifyThatElementIsDisplayed(WebElement element) {
        if (element.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * This method will verify that element is displayed
     */
    public boolean verifyThatTextIsDisplayed(By by, String text) {
        WebElement element = driver.findElement(by);
        if (text.equals(element.getText())) {
            return true;
        } else {
            return false;
        }
    }

    public boolean verifyThatTextIsDisplayed(WebElement element, String text) {
        if (text.equals(element.getText())) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * This method will returns list of web elements
     */
    public List<WebElement> webElementList(By by) {
        return driver.findElements(by);
    }

    /**
     * This method will generate random string
     *
     * @param length
     * @return
     */
    public static String getRandomString(int length) {
        StringBuilder sb = new StringBuilder();
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        for (int i = 0; i < length; i++) {
            int index = (int) (Math.random() * characters.length());
            sb.append(characters.charAt(index));
        }
        return sb.toString();
    }

    //--------------------------------------Add From Here--------------------------------//
    /**
     * This method will take screen shot
     */
//    public void takeScreenShot() {
//        String filePath = System.getProperty("user.dir") + "\\src\\main\\java\\com\\demo\\nopcomerce\\screenshots\\";
//        TakesScreenshot screenshot = (TakesScreenshot) driver;
//        File scr1 = screenshot.getScreenshotAs(OutputType.FILE);
//        try {
//            FileUtils.copyFile(scr1, new File(filePath + getRandomString(10) + ".jpg"));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }

//    public void takeScreenShot(String fileName) {
//        String filePath = System.getProperty("user.dir") + "\\src\\main\\java\\com\\demo\\nopcomerce\\screenshots\\";
//        TakesScreenshot screenshot = (TakesScreenshot) driver;
//        File scr1 = screenshot.getScreenshotAs(OutputType.FILE);
//        try {
//            FileUtils.copyFile(scr1, new File(filePath + fileName + ".jpg"));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }

//    public static String getScreenshot(WebDriver driver, String screenshotName) {
//        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
//        TakesScreenshot ts = (TakesScreenshot) driver;
//        File source = ts.getScreenshotAs(OutputType.FILE);
//
//        // After execution, you could see a folder "FailedTestsScreenshots" under screenshot folder
//        String destination = System.getProperty("user.dir") + "\\src\\main\\java\\com\\nopcommerce\\demo\\screenshot\\" + screenshotName + dateName + ".png";
//        File finalDestination = new File(destination);
//        try {
//            FileUtils.copyFile(source, finalDestination);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        return destination;
//    }

//    //Dynamic Assert
//    public void verifyActualAndExpected(Object expected, Object actual) {
//        Assert.assertEquals(expected, actual);
//    }

    //Wait Method
//    public void waitFor(){
//        try {
//            Thread.sleep(10000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
    public void verifyActualAndExpectedjunit(Object expected, Object actual) {
        Assert.assertEquals(expected, actual);
    }

    public void waitFor(int sec){
        int milliSec = sec*1000;
        try {
            Thread.sleep(milliSec);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    //--------------KeyBoard-------------//
    public void keyTAB(WebElement element){
        element.sendKeys(Keys.TAB);
    }

    public void sendTabText(WebElement element, String msg){
        element.sendKeys(msg);
    }

}
