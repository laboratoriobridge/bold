import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withOptions } from '@storybook/addon-options'
import { addDecorator, configure } from '@storybook/react'

import { withTheme } from '../src/stories-addons'

addDecorator(withOptions({
  name: 'Bridge React',
  url: 'https://github.com/laboratoriobridge/bridge-react',
  addonPanelInRight: true,
  sortStoriesByKind: true,
  selectedAddonPanel: 'storybooks/storybook-addon-knobs',
}))
addDecorator(withInfo({
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
}))
addDecorator(withTheme())
addDecorator(withKnobs())

const req = require.context('../src', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
