import React from 'react'

import { Highlight } from './Highlight'

export default {
  title: 'Components/Textual',
  component: Highlight,
  args: {
    words: ['car'],
    text: 'The blue car, the blue scarf',
  },
}

export const _Highlight = (args) => <Highlight {...args} />
