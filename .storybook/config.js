// import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, configure, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import addons, { mockChannel } from '@storybook/addons'
import { withTheme } from '../src/stories-addons'

addons.setChannel(mockChannel())

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'bridge-react',
      brandUrl: 'https://github.com/laboratoriobridge/bridge-react',
      // brandImage: 'http://url.of/some.svg',
    }),
    panelPosition: 'right',
  },
  info: {
    inline: true,
    styles: {
      infoBody: {
        border: 'none',
        boxShadow: 'none',
        marginTop: 0,
        marginBottom: 0,
        padding: '20px 40px',
      },
      infoPage: {
        padding: '0 5px 0 5px',
      },
      infoStory: {
        padding: '0 45px 0 45px',
      },
    },
  },
})

addDecorator(withInfo)
// addDecorator(withA11y)
addDecorator(withTheme())
addDecorator(withKnobs())

const req = require.context('../src', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
