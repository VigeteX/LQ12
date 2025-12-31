# Automation Tests Generation

The goal of the project is to evaluate how different AI tools (Cursor + Playwright MCP, Claude + Playwright MCP, and Cypress AI (cy.prompt)) can be used to generate ISTQB-compliant test cases and automation tests using the Page Object Model (POM).

---

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├──textBox.cy.js
│   │   └──textBox2.cy.js
│   ├── fixtures/
│   ├── screenshots/
│   └── support/
│
├── playwright/
│   ├──.cursor
│   │   └──rules
│   │        └──ai-instructions.mdc
│   ├── tests/
│   │   ├── pageObjects/
│   │   │    └── TextBoxPage.ts
│   │   └── specs/
│   │        ├── TC-TB-01.spec.ts
│   │        ├── TC-TB-02.spec.ts
│   │        ├── TC-TB-03.spec.ts
│   │        └── TC-TB-04.spec.ts
│   ├── ai-instructions-claude.md
│   ├── package.json
│   └── playwright.config.ts
│   
├── prompts/
│   ├── claude-playwright.md
│   ├── cursor-playwright.md
│   └── cypress-prompts.md
│
├── rules/
│   └── playwright-mcp-rules.md
│
├── package.json
├── cypress.config.js
├── .gitignore
└── README.md
```

## Author

Volodymyr Pelenko
