Project overview
Playwright with TypeScript/JavaScript — example test suite demonstrating setup, test structure, and end-to-end automation
for modern web applications. Suitable for beginners who want a hands‑on reference for writing and running Playwright tests.

Prerequisites
Node.js (latest LTS recommended)

Visual Studio Code or another code editor

(Optional) Playwright VS Code extension for convenience

Clone repository
git clone https://github.com/vamsicherry/Playwright_Automation.git

Install dependencies
npm install


Run tests
Run all tests: npm test

Run a single test file: npx playwright test path/to/test.spec.ts

Project structure (high level)
tests/ or src/tests — Playwright test files

pages/ — Page Object Model classes (reusable page methods)

fixtures/ — shared fixtures and test setup

playwright.config.ts — Playwright configuration (browsers, reporters, timeouts)

package.json — scripts and dependencies
