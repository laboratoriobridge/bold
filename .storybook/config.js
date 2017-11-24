import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'

setOptions({
  name: 'Bridge React',
  url: 'https://github.com/laboratoriobridge/bridge-react'
})

setDefaults({
  inline: true,
  header: false
})

const req = require.context('../src', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
