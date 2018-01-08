import { setOptions } from '@storybook/addon-options'
import { configure } from '@storybook/react'

setOptions({
  name: 'Bridge React',
  url: 'https://github.com/laboratoriobridge/bridge-react',
})

const req = require.context('../src', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
