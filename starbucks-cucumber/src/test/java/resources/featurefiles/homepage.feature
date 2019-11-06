Feature: starbucks homepage

  @Sanity
  Scenario: user should able to login successfully with valid credentials
    Given user is on the starbuck home page
    When user click on login link
    And user enter valid email address"anajanaom87@gmail.com"in the email field
    And user enter valid password "Anajana@7765" in the password field
    And user click on signin button
    Then user should able to login successfully

  @Regression
  Scenario: user should able to get card payment option
    Given user is on the starbucks coffee home page
    When user click on the card option from the top bar
    And user click on PayByMobile Option
    Then user should able to get payment App Page Successfully

  @Regression
  Scenario: user should able to click all top bar options successfully
    Given user is on the starbucks Home page
    When user click on Cofee Option
    And user click on Menu Option
    And user Click On CofeeHouse Option
    And user Click On Careers Option
    And user Click On Responsibility Option
    And user click On Card Option
    Then user should able to click all options successfully
