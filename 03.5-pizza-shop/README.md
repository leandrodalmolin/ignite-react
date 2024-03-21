# Pizza Shop

## Table of contents

- [The project](#the-project)
- [Requirements](#requirements)
- [Built with](#built-with)
- [Test Environment](#test-environment)
- [Project setup](#project-setup)

## The project

Pizza Shop Dashboard with login system.

For the backend, please [clone the project here](https://github.com/rocketseat-education/pizzashop-api) and run it locally.

## Requirements

- Node 18.18.0
- pnpm 8.1.0

## Built with

- Vite
- ReactJS
- TypeScript
- Shadcn UI
- React Hook Form
- Zod (validation)
- React Router
- Tailwind
- React Query
- Axios
- Vitest

## Test environment

Using Vitest with React Testing Library for unit tests.

Notes:

- `jsdom` was replaced with `happy-dom`
- global setup can be found on `vite.config.ts` so there's no need to import testing libs in the test files

## Project setup

```
pnpm install
```

### Start dev server

```
pnpm run dev
```

### Build for production

```
pnpm run build
```

### Locally preview production build

```
pnpm run preview
```

### Lint files

```
pnpm run lint
```

### Tests

```
pnpm run test
```
