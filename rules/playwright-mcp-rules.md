---
alwaysApply: true
---

# Coding Guidelines for Playwright-MCP Project

## 1. File Interaction
- Always interact only with files located in the `<your_route>` folder.
- Do not read or modify files outside this folder.

## 2. Page Object Model (POM)
- **MANDATORY**: Every test spec MUST have corresponding page object files.
- Always use the **Page Object Model (POM)** pattern for structuring UI automation code.
- Store all page object files in:  `<your_route>/pageObjects`
- **NEVER create spec files without creating their corresponding page objects first**.
- All locators and page interactions must be defined in page objects, not in spec files.

## 3. Spec Files
- Always create spec/test files in:  `<your_route>/specs`.
- Do not place spec files outside this folder.

## 4. MCP Usage
- All navigation, assertion, AND LOCATOR DISCOVERY must be performed via playwright-mcp.
- Use MCP browser/inspector to derive selectors, do not guess or hardcode without MCP validation.
- For every new/changed locator:
  - Validate via MCP;
  - Prefer role/name, label, placeholder, accessible names, or test IDs exposed in DOM.

## 5. Prevent Auto-Generated / Random Spec Files
- Do not allow LLM or MCP to create random spec files like urltest_<uuid>.spec.
- Ensure AI-generated spec files are only created in `<your_route>/specs`.

## 6. General Notes
- Follow consistent naming conventions for pages and specs.
- Keep code modular and reusable within the defined folder structure.
- Review MCP logs to debug test execution if necessary.