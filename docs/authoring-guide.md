# Authoring Guide (Fast Path)

Goal: Paste acceptance criteria and get ready-to-run, reusable Gherkin scenarios for QA.

## 1) Paste acceptance criteria
- Start your file/PR with the exact acceptance criteria (AC). Keep each AC short and clear.
- Example:
  - GIVEN a driver is added
  - WHEN Driver's License State = SC
  - THEN accept 5–11 numeric; otherwise show "Invalid drivers license number, acceptable format is 5 - 11 Numeric."

## 2) Choose the surface
- biBerk UI (purchase path): say “View Quote”, “Your Quote > Add-On Coverage”.
- Apollo (back-office): include login step, then page (e.g., Drivers).

## 3) Tag the scenario
- @smoke for core path
- @integration for medium flows
- @regression for full/edge cases
- Add @apollo or @biberk when needed

## 4) Use the template (copy/paste)

Feature: <Short, user-focused goal>
  As a <user>, I want <outcome> so I can <benefit>.

  @smoke @<apollo|biberk>
  Scenario: Happy path
    Given <existing phrase precondition>
    When <existing phrase action>
    Then <existing phrase result>

  @regression @<apollo|biberk>
  Scenario Outline: Edge cases
    Given <existing precondition>
    When <existing action with <value>>
    Then <user-facing error or result>
    Examples:
      | case      | value        |
      | too short | 1234         |
      | emoji     | 😀12345★      |

Notes:
- Reuse existing step phrases. Do not invent new wording if a close one exists.
- Keep steps short (one action per step). ≤ 10 steps per scenario.

## 5) Quick examples

- Apollo (Commercial Auto, SC DL rule):
  - Given I am logged into Apollo
  - And I am on the Drivers page
  - When I create a driver with:
    | field     | value |
    | DL State  | SC    |
    | DL Number | 12345 |
  - Then I should see the driver saved with license "12345"
  - Negative outline with invalid inputs (emoji, hyphen, space, etc.)

- biBerk (Purchase path issuance):
  - Given I am on the biBerk Home page
  - When I start a CA quote with: (table)
  - And I go to Your Quote
  - And I proceed to Purchase
  - When I fill the biBerk purchase form with: (table)
  - Then I should see the biBerk "Your policy is on the way" confirmation

## 6) QA environment (defaults)
- Use QA URLs and Key Vault (CI does this automatically).
- Local: set `.env` using QA values.

## 7) Export (optional)
- If needed, export scenarios to Word using the script in Documentation.

That’s it. Paste AC → choose surface → tag → fill the template. Reuse steps and keep it simple.
