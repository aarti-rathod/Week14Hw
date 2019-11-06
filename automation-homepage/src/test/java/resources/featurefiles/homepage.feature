Feature: Automation Practice Website

  @Sanity
  @Regression
  Scenario: User should able to get Summer Note Successfully
    Given user is on the Homepage
    When  user Click On Wysi Option
    And user click summer note
    Then user should able to get summer note

  @Regression
  Scenario: User Should able to get File DownLoad Successfully
    Given user is on HomePage
    When user click on More Option
    And  user click File Download Option
    And user click on download button
    Then user should able to  DownLoad File succeessfully

  @Regression
  Scenario:  User should able to get Alert Text Successfully
    Given user is on HomePage
    When user click SwitchTo option
    And user click on Alert option
    And  user click on Alert with Textbox
    Then user should able to get Alert Text


  @Regression
    @EndToEnd
  Scenario Outline: User Should Able To Register Successfully With Valid Credentials

    Given user is on the home page
    When user enter first name "<firstName>" in firstname field
    And user enter lastname "<lastName>" in lastName field
    And user enter email "<email>" in email field
    And user enter phonenumber "<phoneNum>" in phone field
    And user select gender
    And user select country
    And user select year "<year>" from the field
    And user select month "<month>" from the field
    And user select day "<day>" from the field
    And user enter password"<password>"in the field
    And user enter confirm"<cPassword>" in the field
    And user click on submit button
    Then user should able to register successfully

    Examples:
      | firstName | lastName | email                 | phoneNum   | year | month  | day | password    | cPassword   |
      | nandini   | timla    | nandini0988@gmail.com | 9878456231 | 1991 | August | 8   | Nandini8890 | Nandini8890 |
      | Anjana    | Om       | Anjana7765@gmail.com  | 5412369874 | 1975 | August | 7   | Anjana7667  | Anjana7667  |






