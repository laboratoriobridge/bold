import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Plural } from './Plural'

storiesOf('Components|Textual', module).add('Plural', () => (
  <Plural word={text('word', 'cidadão')} count={number('count', 2)} inclusive={boolean('inclusive', false)} />
))
