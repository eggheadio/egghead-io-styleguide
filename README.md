# egghead.io Style Guide

This repo has 2 purposes:
- [A component library for npm](https://www.npmjs.com/package/egghead-ui)
- [A storybook for a living style guide with documentation](https://ui.egghead.io)

### Known Issues

`devDependencies` don't install on heroku. All deps need to be in the `dependencies` object.

---

# Usage

```
$ yarn add 'egghead-ui'`
```

```
import {ComponentName} from 'egghead-ui'
```

View [the storybook](https://ui.egghead.io) for visual examples and full API documentation.

---

# Development

## Dependencies

- Git
- Node
- Yarn

## Workflow

- `yarn` to install latest packages.
- `yarn dev` to develop (runs storybook, lints, and compiles).
- [localhost:2000](http://localhost:2000) to view storybook.
- `src/components/ComponentName`:
  - `index.js` defines and exports a component.
    - Styling is done using classes from [tachyons-egghead](https://github.com/eggheadio/tachyons-egghead)
    - The `*-ns` (not small) classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.
  - `index.examples.js` adds component to storybook.
    - `.addWithInfo` adds automatic API documentation.
    - `.addWithPropCombinations` adds automatic prop combinations.
- `src/index.js` imports all `src/components` and exports component library for npm.
- Submit pull requests:
  - Runs continuous integration in Codeship to ensure builds succeed
  - Somebody reviews and you merge when approved
  - Continuous deployment runs in Codeship
    - Publishes the latest component library version to npm.
    - Deploys the latest storybook to [ui.egghead.io](https://styleguide.egghead.io).
