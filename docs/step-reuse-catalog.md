## Step Reuse Catalog

Apollo
- Given I am logged into Apollo
- And I am on the Drivers page
- When I create a driver with:
- Then I should see the driver saved with license "..."
- Then I should see a validation error "..."

biBerk
- Given I am on the biBerk Home page
- When I start a {LOB} quote with:
- And I go to Your Quote
- And I proceed to Purchase
- When I fill the biBerk purchase form with:
- Then I should see the biBerk "Your policy is on the way" confirmation

Purchase (Apollo)
- And I navigate to the purchase page for a prepared quote
- When I fill the purchase form with:
- Then I should see the "Your policy is on the way" page

Conventions
- Use data tables for input; headers: field, value.
- Prefer tag combinations: `@smoke and @apollo`, `@biberk and @smoke`.
