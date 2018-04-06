import { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'
import { configure } from '@storybook/react'

setOptions({
  name: 'Bridge React',
  url: 'https://github.com/laboratoriobridge/bridge-react',
})

setDefaults({
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
})

const req = require.context('../src', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
