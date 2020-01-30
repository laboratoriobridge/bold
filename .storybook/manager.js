import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'Bold',
  brandUrl: 'https://github.com/laboratoriobridge/bold',
})

addons.setConfig({
  panelPosition: 'right',
  theme,
})
