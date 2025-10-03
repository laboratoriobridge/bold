# Bold

React implementation of the **Bold Design System**.

![Build Status](https://github.com/laboratoriobridge/bold/actions/workflows/yarn.yml/badge.svg)
[![codecov](https://codecov.io/gh/laboratoriobridge/bold/branch/main/graph/badge.svg)](https://codecov.io/gh/laboratoriobridge/bold)

[Bold website](https://bold.bridge.ufsc.br/)

[Storybook](https://bold.bridge.ufsc.br/storybook/)

---

### 🚧 Beta phase

Bold is currently in beta phase (`1.0.0-beta.*` versions) and its API may change without following semver.

### 👩‍💻 Usage

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
---

### 🚀 Getting started
>Visit https://bold.bridge.ufsc.br/getting-started for more information.

```sh
# with npm
npm install bold-ui --save

# with yarn
yarn add bold-ui --save
```

> IBM Plex Sans Font family

```html
<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i" rel="stylesheet" />
```
---

### ✅ Requirements

- [Git](https://git-scm.com/)
- [Node 14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### 🛠 Used technologies and tools

- [Typescript](https://www.typescriptlang.org/) as the main programming language
- [React](https://reactjs.org/) as main UI library for the default and reference Bold Design System implementation
- [Storybook](https://storybook.js.org/) for component documentation and development playground
- [Jest](https://jestjs.io/) for testing
- [loki](https://loki.js.org/) for visual regression testing based on the storybook stories
- [Gatsby](https://www.gatsbyjs.org/) to generate the site documentation (see the `site/` folder)
- [Prettier](https://prettier.io/) for code formatting
- [Eslint](https://eslint.org/) for code linting
- [TravisCI](https://travis-ci.org/laboratoriobridge/bold) for continuous integration
- [Codecov](https://codecov.io/gh/laboratoriobridge/bold) for code coverage analysis
- [svgr](https://github.com/gregberge/svgr) for generating the icon components

---

### 🏁 Quick start

First run `yarn install` on the project root folder to install all the npm dependencies necessary for the project.

Use `yarn build` to build the entire project and generate the `lib` distribution folder. For a better development experience, use `yarn test:watch` to execute jest tests in watch mode and `yarn storybook` to start the storybook dev server.

> #### Running tests

Running `yarn test` will run all the jest tests. For a nicer development experience, you can use `yarn test:watch` to run jest in watch mode.

Our tests use [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) to guarantee the generated HTML output of our components.

> #### Running the storybook

Each component has an associated `.stories` file that contains some common use cases of that component.

Use `yarn storybook` to start the development storybook server. The server will start localhost on port `6006`.

Use `yarn build-storybook` to generate a production-ready version of the storybook. The output will be placed at `storybook-static` folder (git ignored).

> #### Generating icon components

The icon components are generated from the `icons` source folder. We use `svgr` to read them and generate corresponding React components that will be placed in the `src/components/Icon/generated` folder.

To do so, use the `yarn icons` command.

> #### Updating loki

Loki takes a screenshot of every storybook stories and places the resulting PNG file on the `.loki` folder, that must be git commited.

Use `yarn test:loki` to run the loki visual regression tests. It will fail if there is a visual difference. Follow the command line instructions provided by running the command to update the reference images if that's the case.

> #### Generating the documentation website

Use `yarn site:start` to start the Gatsby development server of the documentation website.

The documentation uses the local built version of bold (from the `lib/` folder), so make sure to run `yarn build` every time you want the changes from the bold components take effect on the Gatsby site generation.

> #### Releasing a new version

First you need to login via `yarn login` and make sure that you have permission to publish a new version.

Then use `yarn publish`, it will ask what `version` you are publishing, change the `package.json` accordingly, tag the repo, build and publish.

Finally, just `git push --tags` to send everything to GitHub.

---

### 🤓 More about contributing

See our [Contributing guide](./CONTRIBUTING.md).
