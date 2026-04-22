import 'loki/configure-react'
import { withStorybookTheme } from '../src/stories-addons'
import mockdate from 'mockdate'

if (process.env.STORYBOOK_LOKI) {
  // Mock date API on visual regression testing
  mockdate.set('2020-09-01 12:00:00')
}

export const parameters = {
  docs: {
    canvas: {
      sourceState: 'shown',
    },
  },
}

export const decorators = [(Story, context) => withStorybookTheme(Story, context)]
