## Environments and Secrets

QA URLs (from FrontEndQA BiBerkLOB/QA.runsettings)
- APOLLO_URL: https://biberk-apollo-qa.azurewebsites.net/underwriting/dashboard
- BIBERK_URL: https://www-qa-portalspa.biberk.com
- Key Vaults: xbibaoazckv-qa (Apollo), bibtestingeakv1 (FrontEndQA)

Local
- Copy `.env.example` to `.env` and set APOLLO_URL, APOLLO_USERNAME, APOLLO_PASSWORD, BIBERK_URL.
- For creds via Key Vault: use Az PowerShell `Get-AzKeyVaultSecret`.

GitHub Actions
- Set repo secrets: APOLLO_URL, APOLLO_USERNAME, APOLLO_PASSWORD, BIBERK_URL.

Azure DevOps
- Pipeline uses `AzureKeyVault@2`. Set service connection with get/list on QA vaults.
- Exports APOLLO_URL/BIBERK_URL as variables and reads APOLLO creds from vault.
