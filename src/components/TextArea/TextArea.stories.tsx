import { action } from '@storybook/addon-actions'
import React from 'react'

import { TextArea } from './TextArea'

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
  },
  args: {
    name: 'nome',
    label: 'Text area',
    error: '',
    disabled: false,
    inline: false,
    placeholder: 'Nome',
    maxLength: '' as any,
    onChange: action('changed'),
    required: true,
  },
}

export const Default = (args) => <TextArea {...args} />
