import { array, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Highlight } from './Highlight'

storiesOf('Components|Textual', module).add('Highlight', () => (
  <Highlight words={array('search', ['car'])} text={text('text', 'The blue car, the blue scarf')} />
))
