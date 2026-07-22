import React from 'react'

import { TextInput } from '../TextField'

import { FormControl } from './FormControl'

export default {
  title: 'Components/FormControl',
  component: FormControl,
  args: {
    label: 'Label',
    htmlFor: 'input-id',
    error: '',
    inline: false,
    required: true,
  },
}

export const Default = (args) => (
  <FormControl {...args}>
    <TextInput id={args.htmlFor} />
  </FormControl>
)
