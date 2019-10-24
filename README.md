# Bold

React implementation of the **Bold Design System**.

[![Build Status](https://travis-ci.org/laboratoriobridge/bold.svg?branch=master)](https://travis-ci.org/laboratoriobridge/bold)
[![codecov](https://codecov.io/gh/laboratoriobridge/bold/branch/master/graph/badge.svg)](https://codecov.io/gh/laboratoriobridge/bold)

https://bold.bridge.ufsc.br/

## WARNING: Beta phase

This project is currently in beta phase (`1.0.0-beta.*` versions) and its API may change without following semver.

## Getting started

```sh
# with npm
npm install bold-ui --save

# with yarn
yarn add bold-ui --save
```

### Font family: IBM Plex Sans

```html
<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i" rel="stylesheet" />
```

Visit https://bold.bridge.ufsc.br/getting-started for more information.

## Usage

Quick demonstration of the library usage:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'from '../../../lib''

const App = () => {
  return <Button kind='primary'>Hello World</Button>
}

ReactDOM.render(<App />, document.querySelector('#root'))
```

## Storybook

https://bold.bridge.ufsc.br/storybook/

## Contributing

After cloning this repository, run `yarn install` to locally install all npm dependencies.

### Storybook

We use [storybook](https://storybook.js.org/) as a local sandbox environment to manually test and prototype components. You can start a local storybook server using the `yarn storybook` script.

### Jest tests

Use `yarn test` to run all components jest tests. You can also use `yarn test:watch` to run tests and watch for file changes.

### Visual regression tests

We use [loki](https://loki.js.org/) as a visual regression test tool. Use `yarn test:loki` to run it.

### Documentation website

Our documentation website is built using [nextjs](https://nextjs.org/). Use `yarn site:dev` to run a local documentation website server.

You might need to run `yarn build` to compile the bold components (which generates the `lib` folder) before running the nextjs server since it uses the local bundle to run.
