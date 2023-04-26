# Design System

## Requirements

- Node v16.15.0

## Turborepo

### Quick start
- `npm run dev` runs development mode on every package in parallel
- `npm run build` runs build for all packages

### Reasons to use Turborepo
- Helps to execute scripts on every package
- Speeds up building time by caching the build locally and doing an incremental build (only build stuff that has changed)

## Storybook

Live documentation: https://leandrodalmolin.github.io/ignite-react/

## Changesets

Manage versioning and changelogs with a focus on monorepos.

Note: we need to log in to the npm account via the terminal so the changes can get published to NPM.

- `npm run changeset`
  - contributors can inform a change to the repository by adding a new changeset
  - a new markdown file will be created under the .changeset folder where extra info about the changes can be added
- `npm run version-packages`
  - update packages versions (package.json files) based on the changeset added previously
  - update the CHANGELOG.md file with the latest changes using the extra info added on the changeset step
- `npm run release`
  - build and publish all changed packages to npm

## Components

- [ ] Button
- [ ] Heading
- [ ] Text
- [ ] TextInput
- [ ] Textarea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep