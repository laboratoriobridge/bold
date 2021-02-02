import { array, text } from '@storybook/addon-knobs'
import React from 'react'

import { Highlight } from './Highlight'

export default {
  title: 'Components/Textual',
}

export const _Highlight = () => (
  <Highlight words={array('search', ['car'])} text={text('text', 'The blue car, the blue scarf')} />
)
