@biberk @purchase @ui
Feature: biBerk – purchase path issue with credit card
  As a shopper, I want to purchase and issue my policy on biBerk.com with a credit card.

  @smoke
  Scenario Outline: Issue <LOB> with valid credit card
    Given I am on the biBerk Home page
    When I start a <LOB> quote with:
      | field           | value             |
      | BusinessName    | Test Widgets LLC  |
      | EmployeesCount  | 5                 |
      | AnnualRevenue   | 250000            |
    And I go to Your Quote
    And I proceed to Purchase
    When I fill the biBerk purchase form with:
      | field               | value           |
      | Payment Option      | One Pay Plan    |
      | CC Name             | Test User       |
      | CC Number           | <CardNumber>    |
      | CC Expiration MMYY  | 12/26           |
    Then I should see the biBerk "Your policy is on the way" confirmation

    Examples:
      | LOB | CardNumber       |
      | CA  | 4111111111111111 |
      | PL  | 4242424242424242 |
      | WC  | 4111111111111111 |
