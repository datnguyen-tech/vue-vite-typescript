# vue-vite-typescript

🚀 Vue 3 Boilerplate - TypeScript, Tailwind CSS, Vite, Pinia ⚡️ Made with developer experience first: ESLint, Prettier, VSCode, PostCSS

- 🎁 Tailwind Css combine with Scss
- 🍍 State Management via Pinia
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript
- 🚓 Friendly structure
- 📦 Components auto importing
- 📥 APIs auto importing - use Composition API and others directly
- 📏 Linter with ESLint for Vue, Typescript
- 💡 Axios interceptors
- ⚙️ Unit Testing with Vitest, E2E Testing with Playwright
- 🦔 Use lint-staged and commitlint for friendly commit

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug

# Run commit prompt
npm run commit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
