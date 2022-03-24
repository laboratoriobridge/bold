import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { TextInput } from '../TextField'

import { FormControl } from './FormControl'

export default {
  title: 'Components/FormControl',
}

export const Default = () => (
  <FormControl
    label={text('label', 'Label')}
    htmlFor={text('id', 'input-id')}
    error={text('error', '')}
    inline={boolean('inline', false)}
    required={boolean('required', true)}
  >
    <TextInput id={text('id', 'input-id')} />
  </FormControl>
)
