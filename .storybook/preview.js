import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters } from '@storybook/react'
import 'loki/configure-react'
import { withStorybookTheme } from '../src/stories-addons'
import mockdate from 'mockdate'

if (process.env.STORYBOOK_LOKI) {
  // Mock date API on visual regression testing
  mockdate.set('2020-09-01 12:00:00')
}

addParameters({
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
addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withStorybookTheme)
