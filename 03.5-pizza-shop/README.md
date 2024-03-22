# Pizza Shop Dashboard

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Built with](#built-with)
- [Unit Tests](#unit-tests)
- [End-to-End Tests](#end-to-end-tests)
- [Mock Service Worker](#mock-service-worker)
- [Project Setup](#project-setup)

## Introduction

Welcome to the Pizza Shop Dashboard, a web application designed for managing pizza orders with a secure login system.

To get started, you'll need to set up the backend by cloning the [pizzashop-api](https://github.com/rocketseat-education/pizzashop-api) repository and running it locally.

## Requirements

Before running the project, ensure you have the following installed:

- Node.js 18.18.0
- pnpm 8.1.0

## Built with

This project is built using the following technologies:

- Vite
- ReactJS
- TypeScript
- Shadcn UI
- React Hook Form
- Zod (for validation)
- React Router
- Tailwind CSS
- React Query
- Axios
- Vitest
- Playwright

## Unit Tests

Unit tests are conducted using Vitest along with React Testing Library. Notable points include:

- Replacement of `jsdom` with `happy-dom`.
- Global setup is configured in `vite.config.ts`, eliminating the need to import testing libraries in test files.

## End-to-End Tests

End-to-end (E2E) tests are performed using Playwright, offering advantages such as parallel test execution. This enhances efficiency compared to Cypress.

## Mock Service Worker

Mock Service Worker (MSW) is employed for mocking data in E2E tests. MSW allows intercepting outgoing requests, observing them, and responding with mocked responses. It is preferred over MirageJS for its facilitation of debugging, keeping all HTTP requests visible in the network tab.

## Project Setup

Follow these steps to set up the project:

```bash
pnpm install
```

### Start dev server

```bash
pnpm run dev
```

### Start dev server with MSW

```bash
pnpm run dev:test
```

### Build for production

```bash
pnpm run build
```

### Preview production build locally

```bash
pnpm run preview
```

### Lint files

```
pnpm run lint
```

### Run unit tests

```
pnpm run test
```

### Run E2E tests

```
pnpm playwright test --ui
```
