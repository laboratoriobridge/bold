# Contributing to Bold 🌈

**Hello! 👋**

We are happy for your interest in contributing to Bold! But before you start it is important that you read the contribution guide.

**⚠️ Attention: All issues must be written in English!**

## Updating Bold website

If you’re a **Bridger** then you can see [our documentation here](https://docs.google.com/document/d/1z3MCUUL9TdCFscZbWOhUUvSxNDWD16dAe5R5pwI1lGI/edit#). 
Before updating the website with new components or making any changes, please change the doc file and inform the team on the Bold channel on slack.
Please remember to write the documentation in both languages (Portuguese/English).

## Reporting Bugs 🐛

1. Search for issues with the BUG tag to see if the issue has already been reported by another contributor.
1. Check if the bug has already been resolved - try to reproduce the bug using the main or branch related to the issue.
1. When reporting the bug, use our template and try to insert as much information as possible about the problem. Describe the bug, the steps to reproduce the error, the expected behavior and the version of the system. Whenever possible, include images and supplementary information to help explain the context.
1. To facilitate the search, name the issue as follows: [Component] Error found and add the tag BUG. Use the names specified on the website http://bold.bridge.ufsc.tech/

Example: [Select] Component doesn't render correctly in Safari

## Reporting accessibility issues

1. Search for issues with the tag A11Y to check if the issue has already been reported by another contributor.
1. Check if the bug has already been resolved - try to reproduce the bug using the main or branch related to the issue.
1. When reporting the problem, use our template and try to insert as much information as possible about the problem.
1. Describe the problem and which WCAG rule is being violated (components must comply with AA compliance level). Also inform the steps to reproduce the error, the expected behavior and the version of the system. Whenever possible, include images and supplementary information to help explain the context.
1. To facilitate the search, name the issue as follows: [Component] Error found and add the tag A11Y.

Example: [DatePicker] Keyboard navigation isn't working

## Proposing new components ⭐️

New components are welcome, but before creating an issue, you should check if the component already exists or if it is possible to adjust your need to use an existing component. Analyze the flowchart below before suggesting new components, so we avoid duplication and guarantee the consistency of the Design System.

![Contributing to Bold flowchart](https://i.imgur.com/ziuCTtN.png)

If the right component does not exist:

1. Search for issues with the NEW COMPONENT tag to see if the issue has already been reported.
2. Create a new issue if it doesn't exist. Use our template to propose new components and include a link or image with the prototype of the proposed component, describe its context of use, what problem the new component solves and inform the possible status of the component. Add as much detail as possible, including your search and user needs. Try to use existing components to create the new pattern.

## Change an existing component

Like the Design System, components are always in constant evolution and changes in components are expected.
But, before proposing any changes, certify whether the component will continue to meet existing requirements after your proposed change.
Analyze the flowchart above before proposing an amendment, so we avoid duplication and guarantee the consistency of the Design System.

If the right component does not exist:

1. Search for issues with the ENHANCEMENT tag to see if the issue has already been reported.
2. Create a new issue if it doesn't exist. Use our template to propose an amendment and include a link or image with the proposed changes, describe its context of use, what problem the new propose solves and inform the possible status of the component. Add as much detail as possible, including your search and user needs.

# Developing

## Requirements

- [Git](https://git-scm.com/)
- [Node 14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Used technologies and tools

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

## Quick start

First run `yarn install` on the project root folder to install all the npm dependencies necessary for the project.

Use `yarn build` to build the entire project and generate the `lib` distribution folder. For a better development experience, use `yarn test:watch` to execute jest tests in watch mode and `yarn storybook` to start the storybook dev server.

## Common tasks

The following are a list of common tasks necessary to maintain the project:

### Running tests

Running `yarn test` will run all the jest tests. For a nicer development experience, you can use `yarn test:watch` to run jest in watch mode.

Our tests use [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) to guarantee the generated HTML output of our components.

### Running the storybook

Each component has an associated `.stories` file that contains some common use cases of that component.

Use `yarn storybook` to start the development storybook server. The server will start localhost on port `6006`.

Use `yarn build-storybook` to generate a production-ready version of the storybook. The output will be placed at `storybook-static` folder (git ignored).

### Generating icon components

The icon components are generated from the `icons` source folder. We use `svgr` to read them and generate corresponding React components that will be placed in the `src/components/Icon/generated` folder.

To do so, use the `yarn icons` command.

### Updating loki

Loki takes a screenshot of every storybook stories and places the resulting PNG file on the `.loki` folder, that must be git commited.

Use `yarn test:loki` to run the loki visual regression tests. It will fail if there is a visual difference. Follow the command line instructions provided by running the command to update the reference images if that's the case.

### Generating the documentation website

Use `yarn site:start` to start the Gatsby development server of the documentation website.

The documentation uses the local built version of bold (from the `lib/` folder), so make sure to run `yarn build` every time you want the changes from the bold components take effect on the Gatsby site generation.

### Releasing a new version

First you need to login via `yarn login` and make sure that you have permission to publish a new version.

Then use `yarn publish`, it will ask what `version` you are publishing, change the `package.json` accordingly, tag the repo, build and publish.

Finally, just `git push --tags` to send everything to GitHub.
