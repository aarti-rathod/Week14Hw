Feature: Login
  @Sanity
    @Regression
  Scenario: user should able to login successful with valid credentials
    Given user is on the homepage
    When user click on login link
    And user enter email "nandinitimla@gmail.com" to the emailfield
    And user enter password "Nandini8890" to password field
    And user click on the Login Button
    Then user should able to login successfully