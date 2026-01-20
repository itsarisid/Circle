# Circle — Advanced Angular Dashboard

<img src="src/assets/images/logos/dark-logo.svg" alt="Circle logo" width="220">

Circle is a modern, responsive administrative dashboard template built with Angular, Angular Material and Tailwind CSS. It provides a flexible layout system, internationalization support, a Material component aggregation module, and a collection of UI pages and utilities to get your admin UI started quickly.

Key characteristics:
- Angular (v21) single-page application using bootstrapApplication
- Angular Material UI primitives with a consolidated MaterialModule
- Tailwind/PostCSS + SCSS structure
- Lazy-loaded routes and a flexible layout system (Full / Blank)
- Internationalization via ngx-translate
- Icon support via angular-tabler-icons and Iconify

---

Table of contents
- Features
- Tech stack
- Quick start
- Common scripts
- Project structure (overview)
- Configuration & customization
- Internationalization (i18n)
- Development tips & troubleshooting
- Contributing, security, PR and code of conduct (files included below)
- License

## Features
- Flexible layout system: Full (dashboard) and Blank (auth/misc) shells
- Global header: search, language switcher, notifications, user profile
- Sidebar-driven navigation with grouping and lazy-loaded pages
- Reusable sub-layout components (sub-header, sub-sidebar) for data-heavy pages
- Ready-to-use examples: starter/dashboard, UI components pages, authentication pages
- Theme variables and SCSS partials for quick theming

## Tech stack
- Angular 21
- Angular Material
- Tailwind CSS (via PostCSS)
- ngx-translate for i18n
- Tabler Icons (angular-tabler-icons) + Iconify
- ng-apexcharts, ngx-owl-carousel-o, ngx-scrollbar
- TypeScript, Sass (SCSS)

## Quick start

Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm 9+ (compatible with your Node version)
- Angular CLI (optional for global ng tooling): npm i -g @angular/cli

1. Clone
```bash
git clone https://github.com/itsarisid/Circle.git
cd Circle
```

2. Install dependencies
```bash
npm install
```

3. Start dev server
```bash
npm start
# or
ng serve
```
Open http://localhost:4200/ — the app uses client-side routing. The server will reload on source changes.

4. Build (production)
```bash
npm run build
# builds into dist/TailwindAdmin by default (see angular.json)
```

5. Run tests
```bash
npm test
```

## Common scripts
- npm start — ng serve (development)
- npm run build — production build
- npm run watch — build in watch mode
- npm test — run unit tests (Karma/Jasmine)

## Project structure (high-level)
Important top-level files / folders:
- src/main.ts — application bootstrap (bootstrapApplication)
- src/index.html — root HTML template
- src/styles.scss, src/globals.css — global styles entry
- src/app/ — main Angular application
  - app.component.* — root component
  - app.config.ts — ApplicationConfig (providers, icons, i18n loader, modules)
  - app.routes.ts — top-level routes (Full and Blank layout shells)
  - config.ts — runtime UI settings defaults and types
  - material.module.ts — export aggregator for Angular Material modules
  - layouts/ — Full and Blank layout components + header/sidebar
  - pages/ — lazy-loaded pages (starter, ui-components, authentication, extra)
  - components/ — reusable UI components (cards, charts, lists, etc.)
  - services/ — CoreService and other services
- src/assets/ — images, translations (i18n), scss partials and themes
- angular.json — Angular build/serve/test configuration
- package.json — dependencies and npm scripts

## Configuration & customization

Application settings
- src/app/config.ts contains AppSettings and defaults. Change runtime defaults (direction, theme, language, sidebar settings) here or via CoreService.
- CoreService (src/app/services/core.service.ts) exposes getOptions(), setOptions(), setLanguage(), and a notify observable.

Theme and variables
- SCSS partials for themes are in src/assets/scss/theme-variables and themecolors.
- Global imports: src/assets/scss/style.scss is loaded by angular.json. Modify theme variable SCSS files to change color palettes and themes.
- Tailwind integration is present in the project (postcss and tailwind config are referenced in package.json and .postcssrc.json). If you add Tailwind utilities, ensure PostCSS is configured correctly in angular.json build options.

Navigation (sidebar)
- Sidebar nav items are defined at src/app/layouts/full/sidebar/sidebar-data.ts. Edit or extend this array to add or modify menu sections, icons, children and routes.

Material modules
- material.module.ts aggregates many Angular Material modules for convenience. Import MaterialModule where needed (or import specific Material modules in a feature module for better tree-shaking).

i18n (translations)
- ngx-translate is configured in app.config.ts using provideTranslateHttpLoader with prefix ./assets/i18n/. Translation JSON files live in src/assets/i18n/*.json. Add new languages by creating new JSON files and adding switcher UI (header component).

Routing and lazy loading
- Top-level routes are in src/app/app.routes.ts. Pages use lazy-loading by pointing to route module files under src/app/pages/*.

## Development notes & troubleshooting

Common issues
- Angular CLI / node version mismatches: Make sure Node is supported for the Angular/TypeScript versions in package.json (Node 18+ recommended).
- Tailwind/PostCSS errors: Ensure postcss and @tailwindcss/postcss packages are installed and .postcssrc.json is present. If you update Tailwind version, check build pipeline and global styles imports.
- Material icon fonts: index.html links to Material Icons. If icons don't show, verify network access or replace with local fonts.
- Lazy load errors: If route imports fail during dev server, check the path case-sensitivity and correct named exports for the routes modules.

Debugging steps
- Check browser console for errors
- Run ng build --configuration development to see build-time errors
- Run tests: npm test

Testing
- Unit tests configured with Karma/Jasmine. Expand specs under src/app/*.spec.ts as needed. Run npm test to execute.

## How to contribute

We welcome contributions! Please read CONTRIBUTING.md and CODE_OF_CONDUCT.md (full contents are included further below). In short:
- Fork the repo and create a topic branch: feature/<short-description> or fix/<short-description>
- Keep commits atomic and well-described (Conventional Commits style encouraged)
- Add tests and update existing tests when behavior changes
- Run linters/tests locally before opening a PR
- Use the provided Pull Request template (.github/PULL_REQUEST_TEMPLATE.md)

Below are ready-to-copy files for common project governance. Save them to the repository root or .github/ as indicated.

---

SECURITY.md
Create a file named SECURITY.md in the repo root with the following contents:

```markdown
# Security Policy

If you discover a security vulnerability in this project, please report it privately so we can address it promptly.

How to report
- Preferred: Use GitHub's security advisories (https://github.com/itsarisid/Circle/security/advisories) if available.
- Or email a concise report to: security@itsarisid.io (please encrypt if possible).

What to include
- A clear description of the vulnerability
- Steps to reproduce (minimal repro)
- A suggested fix (if available)
- Any impact or exploit scenarios

We will respond as quickly as we can and work with you on a coordinated disclosure.
```

---

Pull request template
Save as .github/PULL_REQUEST_TEMPLATE.md:

```markdown
## Description

<!--
Please include a summary of the change and which issue is fixed.
Provide context and motivation for the change.
-->

Fixes: #(issue number)

## Type of change

- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Checklist

- [ ] I have read the contributing guidelines.
- [ ] My code follows the repository style.
- [ ] I have added/updated tests where applicable.
- [ ] All new and existing tests pass.
- [ ] I have added documentation where necessary.

## How has this been tested?

<!-- Describe the tests that you ran to verify your changes. -->
```

---

LICENSE
Save as LICENSE (root) — MIT License (replace year and owner as appropriate):

```text
MIT License

Copyright (c) 2026 itsarisid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[... standard MIT text continues ...]

(Full MIT text — ensure you paste complete MIT license body. For brevity here, copy-paste the full MIT license when saving.)
```

(Full MIT text recommended. Example full text below you can paste into LICENSE file:)

```text
MIT License

Copyright (c) 2026 itsarisid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

CONTRIBUTING.md
Save as CONTRIBUTING.md:

```markdown
# Contributing to Circle

Thank you for considering contributing to Circle! This guide explains how to get started.

Getting started
1. Fork the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/Circle.git
   cd Circle
   ```
2. Create a branch:
   ```bash
   git checkout -b feature/<short-description>
   ```
3. Install dependencies and run the app:
   ```bash
   npm install
   npm start
   ```

Branching and commits
- Use clear branch names: feature/..., fix/..., chore/...
- Keep commits small and self-contained.
- Use Conventional Commits style for commit messages: feat:, fix:, docs:, chore:, refactor:, style:, test:

Testing
- Add unit tests for new behavior where practical.
- Run tests locally:
  ```bash
  npm test
  ```

Code style
- Follow the existing TypeScript/Angular style in the codebase.
- Prefer strongly-typed code and add small, focused functions when possible.
- Update SCSS variables and theme partials for style changes rather than large, inline style changes.

Pull requests
- Use the provided .github/PULL_REQUEST_TEMPLATE.md when opening PRs.
- Ensure your PR includes a description, related issue number (if applicable), and testing notes.
- Keep PRs focused and rebase/squash when appropriate.

Communication
- Be respectful and patient. Follow the Code of Conduct (CODE_OF_CONDUCT.md).

Thank you!
```

---

CODE_OF_CONDUCT.md
Save as CODE_OF_CONDUCT.md (we recommend the Contributor Covenant):

```markdown
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we pledge to make participation in this project and our community a harassment-free experience for everyone.

## Our Standards

Examples of behavior that contributes to creating a positive environment include:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Showing empathy toward other community members

Examples of unacceptable behavior:
- Harassment, abusive language or actions
- Discriminatory or demeaning comments
- Publishing others' private information without explicit consent

## Enforcement

Project maintainers are responsible for clarifying and enforcing this code of conduct. Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at conduct@itsarisid.io. All reports will be reviewed and investigated and will remain confidential when possible.

For more details, see: https://www.contributor-covenant.org

```

---

Notes: where to place files
- SECURITY.md — root of repository
- LICENSE — root
- CONTRIBUTING.md — root
- CODE_OF_CONDUCT.md — root
- .github/PULL_REQUEST_TEMPLATE.md — in the .github folder (create if missing)

## Additional notes & recommended next steps
- Add a tests/ and docs/ folder if you plan to expand documentation or integration tests.
- Consider adding GitHub workflows for CI (build/test) and dependabot for dependency updates.
- If you publish this template for public reuse, add a demo link and screenshots in README (use <img src="..."> for images in Markdown as required).

---

If you'd like, I can:
- Create ready-to-commit patch content (diffs) for each of the files above.
- Add a simple CI GitHub Actions workflow to run npm install and npm test on PRs.
- Expand the CONTRIBUTING.md with more detailed coding standards and linter config.