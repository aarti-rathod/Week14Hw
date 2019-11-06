Feature:    Nop Commerce Registration

  Scenario:     I Should able to Register Successfully with valid Credentials

    Given      User is on the home page
    When       User click on the register
    Then       User is on the registration page and can see the title "nopCommerce demo store. Register"
    When       I enter "nandini" name in the first name field
    And        I enter "timla" in the last name last name field
    And        I enter "nandini8890@gmail.com" in the Email field
    And        I enter correct password "nandini0988"in the password field
    And        I enter password "nandini0988"in the confirmation password field
    And        I click on Register Button
    Then       I should able to register successfully
    And        I can see the message "Your registration completed"

