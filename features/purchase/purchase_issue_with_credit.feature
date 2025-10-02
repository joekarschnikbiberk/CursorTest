@purchase @ui
Feature: Purchase path – issue policy with credit card
  As a shopper, I want to complete purchase and see the policy issued.

  @smoke
  Scenario Outline: Issue with valid credit card (iteration <iteration>)
    Given I am logged into Apollo
    And I navigate to the purchase page for a prepared quote
    When I fill the purchase form with:
      | field                 | value           |
      | Payment Option        | One Pay Plan    |
      | CC Name               | Test User       |
      | CC Number             | <CardNumber>    |
      | CC Expiration Month   | 12              |
      | CC Expiration Year    | 2026            |
    Then I should see the "Your policy is on the way" page

    Examples:
      | iteration | CardNumber       |
      | 1         | 4111111111111111 |
      | 2         | 4242424242424242 |
