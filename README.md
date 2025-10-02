# CursorTest

Playwright + Cucumber (TypeScript) UI tests for Apollo and biBerk.

## Setup

1. Install Node 18+.
2. `npm install`
3. `npx playwright install --with-deps`
4. Copy `.env.example` to `.env` and set:
   - `APOLLO_URL`, `APOLLO_USERNAME`, `APOLLO_PASSWORD`
   - `BIBERK_URL` (e.g., https://www.biberk.com/)

## Run

- All: `npm test`
- Smoke: `npm run test:smoke`
- Integration: `npm run test:integration`
- Regression: `npm run test:regression`

## CI

### GitHub Actions
- Workflow: `.github/workflows/tests.yml`
- Matrix runs: `@smoke`, `@integration`, `@regression`, and `@biberk and @smoke`
- Set repo secrets:
  - `APOLLO_URL`, `APOLLO_USERNAME`, `APOLLO_PASSWORD`, `BIBERK_URL`

### Azure DevOps
- Pipeline: `azure-pipelines.yml`
- Set variables (secret):
  - `APOLLO_URL`, `APOLLO_USERNAME`, `APOLLO_PASSWORD`

## Structure

- `features/` – Gherkin features
- `src/steps/` – Step definitions (reused across scenarios)
- `src/support/` – Hooks and world

## Notes

- Replace placeholder selectors (data-qa attributes) with actual ones from Apollo/biBerk UI.
- Tags used: `@smoke`, `@integration`, `@regression`, `@ui`, `@apollo`, `@biberk`.
