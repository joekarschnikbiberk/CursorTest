@commauto
Feature: Commercial Auto – SC driver license validation
  As a rater, I want SC driver license numbers to allow 5–11 numeric and reject others.

  @smoke @ui @apollo
  Scenario: SC license accepts 5-digit numeric
    Given I am logged into Apollo
    And I am on the Drivers page
    When I create a driver with:
      | field     | value  |
      | DL State  | SC     |
      | DL Number | 12345  |
    Then I should see the driver saved with license "12345"

  @integration @ui @apollo
  Scenario: SC license accepts 11-digit numeric
    Given I am logged into Apollo
    And I am on the Drivers page
    When I create a driver with:
      | field     | value        |
      | DL State  | SC           |
      | DL Number | 12345678901  |
    Then I should see the driver saved with license "12345678901"

  @regression @ui @apollo
  Scenario Outline: SC license rejects out-of-range or non-numeric
    Given I am logged into Apollo
    And I am on the Drivers page
    When I create a driver with:
      | field     | value   |
      | DL State  | SC      |
      | DL Number | <input> |
    Then I should see a validation error "Invalid drivers license number, acceptable format is 5 - 11 Numeric."
    Examples:
      | input         |
      | 1234          |
      | 123456789012  |
      | 12A45         |
      | 12-345        |
      | 12 345        |
      | 12_345        |
      | 12.345        |

  @Step9 @regression @ui @apollo
  Scenario: Step 9 – SC license rejects emojis and symbols
    Given I am logged into Apollo
    And I am on the Drivers page
    When I create a driver with:
      | field     | value    |
      | DL State  | SC       |
      | DL Number | 😀12345★  |
    Then I should see a validation error "Invalid drivers license number, acceptable format is 5 - 11 Numeric."
