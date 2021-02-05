import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { HFlow } from '../HFlow'

import { Radio } from './Radio'

export default {
  title: 'Components/Radio',
}

export const Default = () => (
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
)
