# Authoring Guide (Paste-Only Workflow)

Goal: Paste acceptance criteria exactly as written in ADO and let Cursor generate runnable, reusable Gherkin scenarios for QA.

## What you do (3 steps)
1) Copy the acceptance criteria from the ADO ticket (as-is). Do not rewrite.
2) Tell Cursor where this applies:
   - Surface: Apollo or biBerk (purchase path)
   - Environment: QA (default)
   - Suite tag: @smoke, @integration, or @regression
3) Run the Generator prompt (see: `docs/generate-scenarios-with-cursor.md`). Cursor will produce scenarios for you.

That’s it. No templates, no manual step wording.

## What Cursor will do for you
- Map AC to existing step phrases (reuse only)
- Generate happy path + edge cases
- Apply proper tags and naming
- Use QA environment terminology (e.g., “View Quote”, “Your Quote > Add-On Coverage” for biBerk; Apollo login step when needed)

## When to add minimal context
If AC doesn’t state the surface, add one word: “Apollo” or “biBerk”. If not given, we default to QA.

## Optional (export)
If you need a Word doc, paste the generated scenarios into a `.txt` under Documentation and run the export script referenced in the repo.

For the one-click prompt, open: `docs/generate-scenarios-with-cursor.md`.
