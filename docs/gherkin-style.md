## Gherkin Authoring Style

- Write at a 6th-grade reading level; short sentences; one action per step.
- Reuse existing step phrases; avoid synonyms.
- Keep steps atomic; split clicks, typing, and checks.
- Include edge cases in every feature (empty, bounds, format, role, state, duplicates, unicode).
- Prefer Scenario Outline for permutations; ≤ 10 steps per scenario.
- Tags: `@smoke` core path; `@integration` medium flows; `@regression` full.
- UI terminology: "View Quote", "Your Quote > Add-On Coverage" (avoid backend ids like 8100 on frontend).
- Apollo: include login step when validating in Apollo.
- Word exports: use `Documentation/generate_docx_from_text.ps1` for scenario docs.
