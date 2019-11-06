Feature: practicePage

  Background: user is on the practice page
    Given user is on the mainpage
    When user click on practice link
    Then user on the practice Page

  @Regression
  Scenario: user should able to select all radio button successfully
    Given user is on the practice page
    When user select BMW radio Button
    Then BMW option should be selected
    And user select Benz radio Button
    Then Benz option should be selected
    And user select Honda radio Button
    Then Honda option should be selected

  @Regression
  Scenario: user should able to get Alert Text Successfully
    Given user is on the practice page
    When user enter "anjna" in alert text box
    And user click on alert button
    Then user should able to get alert text "Hello anjna, share this practice page and share your knowledge" successfully

  @Regression
  Scenario: user should able to get course fees according to course
    Given user is on the practice page
    When user observe java course in product table
    Then user should able to get "35" price for the java course
    And user observe python course in product table
    Then user should able to get "30" price in the python course
    And user observe JavaScript course in the product table
    Then user should able to get "25" price for the java Script

  @Regression
  Scenario: user should able to get top and reload option in mouse hover option
    Given user is on the practice page
    When user mouse hover on the Mouse Hover Option
    Then user should able to get "Top" and "Reload" option during mouse hover