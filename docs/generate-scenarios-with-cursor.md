# Generate Scenarios with Cursor (Copy/Paste Prompt)

Paste the acceptance criteria below, then paste this prompt into Cursor.

Prompt to paste in Cursor:

"""
You are my QA scenario generator.
- Input: raw acceptance criteria (as-is from ADO).
- Output: runnable Gherkin scenarios at a 6th-grade reading level that reuse our existing step phrases.
- Always include: a smoke happy path and a concise edge-case scenario/outline.
- Tags: include @smoke for the happy path; add @integration or @regression only when AC clearly requires.
- Surface: {SURFACE} ("apollo" or "biberk"). Use QA terminology. For biBerk, use “View Quote” and “Your Quote > Add-On Coverage”. For Apollo, include a login step if needed.
- Environment: QA by default. Do not invent data beyond what’s needed.
- Reuse step phrases similar to:
  Apollo: “Given I am logged into Apollo”, “I am on the Drivers page”, “I create a driver with:”, “I should see a validation error "…"”.
  biBerk: “Given I am on the biBerk Home page”, “I start a {LOB} quote with:”, “I go to Your Quote”, “I proceed to Purchase”, “I should see the biBerk "Your policy is on the way" confirmation”.
- Keep ≤ 10 steps per scenario; one action per step.
- Avoid backend-only identifiers in UI wording.

Now, generate scenarios.
Input acceptance criteria:
<<<AC>>> 
"""

How to use
1) Replace {SURFACE} with “apollo” or “biberk”.
2) Replace <<<AC>>> with the acceptance criteria (paste from ADO).
3) Hit Enter. Cursor will produce scenarios you can paste into a `.feature`.
