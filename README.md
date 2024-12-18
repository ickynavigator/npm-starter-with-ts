# npm-starter-with-ts

This is a starter template for creating a new package library. It is setup with typescript, vite, vitest, and eslint.

## Development

The entry point of the application is the `index.ts` file located in the `src` folder. This file should export all the components/types that are to be used in the package.

### Local Publishing

We use yalc to publish the package locally so you can test it without updating the registry. Make sure you have yalc installed globally

#### Publish

Do this in the root of the project to publish the package to the yalc

```bash
yalc publish # Run after building the package
```

#### Install

Do this in the project you want to test the package in

```bash
yalc add npm-starter-with-ts
pnpm install # to install the package dependencies
```
