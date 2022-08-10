# Plugin to integrate Vite ⚡️ with Rollbar

![Version](https://img.shields.io/npm/v/vite-plugin-rollbar) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/clinggroup/vite-plugin-rollbar)](https://github.com/clinggroup/vite-plugin-rollbar/issues)

This is a Vite plugin that simplifies uploading the sourcemaps, generated from a Vite build, to Rollbar.

## Installation

Install the plugin with npm:

```shell
npm install vite-plugin-rollbar --save-dev
```

## Basic Usage

An example vite.config.js:

```typescript
// vite.config.ts
// other declarations
import viteRollbar from 'vite-plugin-rollbar'

/*
  Configure Rollbar plugin
*/
const rollbarConfig = {
  accessToken: '<SECRET_TOKEN_HERE>',
  version: '1.0',
  baseUrl: 'yourwebsite.com',
  silent: true,
}

export default defineConfig({
  // other options
  plugins: [ viteRollbar(rollbarConfig) ],
  build: {
    // Required: tells Vite to create source maps
    sourcemap: true,
  }
})
```

