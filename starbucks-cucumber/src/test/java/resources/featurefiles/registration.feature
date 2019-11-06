Feature: StarBucks HomePage

  @Regression
  Scenario Outline: user should able t register successfully with valid credentials

    Given user is on the home page
    When user click on join option
    Then user is on the registration page
    When user enter first name "<fName>"in first name field
    And user enter last name "<lName>"in last name field
    And user enter address line one"<AddressOne>" in the address field
    And user enter address line two"<AddressTwo>" in the address field
    And user enter city"<City>" in the city field
    And user enter postcode "<PostCode>"in the postcode field
    And user enter email "<Email>"address in the email field
    And user enter password "<Password>"in the password field
    And user click on the t&c check box
    And user click on create account button
    Then user should able to register successfully

    Examples:
      | fName   | lName | AddressOne      | AddressTwo | City   | PostCode | Email                 | Password     |
      | Nandini | timla | 60, harrow road | Harrow     | London | ha0 4dx  | nandini0988@gmail.com | Nandini@8890 |
      | Anjana  | Om    | 5 ,Pinner road  | Pinner     | London | ha5 5lg  | anajanaom87@gmail.com | Anajana@7765 |