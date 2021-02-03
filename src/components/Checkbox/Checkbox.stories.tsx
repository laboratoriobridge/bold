import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
}

export const Default = () => (
  <Checkbox
    name='check'
    label={text('label', 'Component label')}
    disabled={boolean('disabled', false)}
    indeterminate={boolean('indeterminate', false)}
    onChange={action('changed')}
  />
)
