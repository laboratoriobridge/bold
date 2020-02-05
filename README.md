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
import { Button } from 'bold-ui'

const App = () => {
  return <Button kind='primary'>Hello World</Button>
}

ReactDOM.render(<App />, document.querySelector('#root'))
```

## Storybook

https://bold.bridge.ufsc.br/storybook/

## Contributing

See our [Contributing guide](./CONTRIBUTING.md).
