import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { HFlow } from '../Flow'

import { Radio } from './Radio'

storiesOf('Components|Radio', module).add('default', () => (
  <HFlow>
    <Radio
      name='radio1'
      label={text('label', 'Component label')}
      value='1'
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
    />
    <Radio
      name='radio1'
      label={text('label', 'Component label')}
      value='2'
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
    />
  </HFlow>
))
