package com.nopcommerce.demo;

import com.nopcommerce.demo.page.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {

    }

    @When("^user click on the computers link$")
    public void userClickOnTheComputersLink() {
        new HomePage().selectComputerFromTaskBar();
    }

    @Then("^user should able to observe on computer page$")
    public void userShouldAbleToObserveOnComputerPage() {
        new HomePage().verifyComputerOptionSelected();
    }

    @And("^user click on the electronics link$")
    public void userClickOnTheElectronicsLink() {
        new HomePage().selectElectronicsFromTaskBar();
    }

    @Then("^user should able to observe electronics page$")
    public void userShouldAbleToObserveElectronicsPage() {
        new HomePage().verifyElectronicsOptionSelected();
    }

    @And("^user click on Appeal link$")
    public void userClickOnAppealLink() {
        new HomePage().selectApparelFromTaskBar();
    }

    @Then("^user should able to observe Appearl page$")
    public void userShouldAbleToObserveAppearlPage() {
        new HomePage().verifyApparelOptionSelected();
    }

    @And("^user click on digital download link$")
    public void userClickOnDigitalDownloadLink() {
        new HomePage().selectDigitalDownLoadsFromTaskBar();
    }

    @Then("^user should able to observe digital downloas page$")
    public void userShouldAbleToObserveDigitalDownloasPage() {
        new HomePage().verifyDigitalDownLoadOptionSelected();
    }

    @And("^user click on Books link$")
    public void userClickOnBooksLink() {
        new HomePage().selectBooksFromTaskBar();
    }

    @Then("^user should able to observe Books Page$")
    public void userShouldAbleToObserveBooksPage() {
        new HomePage().verifyBooksOptionSelected();
    }

    @And("^user click on jewelry link$")
    public void userClickOnJewelryLink() {
        new HomePage().selectJewelryFromTaskbar();
    }

    @Then("^user should able to observe jewelry page$")
    public void userShouldAbleToObserveJewelryPage() {
        new HomePage().verifyJewelryOptionSelected();
    }

    @And("^user click on Gift Cards$")
    public void userClickOnGiftCards() {
        new HomePage().selectGiftCardsFromTaskBar();
    }

    @Then("^user should able to observe Gift Card Page$")
    public void userShouldAbleToObserveGiftCardPage() {
        new HomePage().verifyGiftCardsOptionSel();
    }
}
