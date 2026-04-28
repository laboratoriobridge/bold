import { action } from '@storybook/addon-actions'
import React from 'react'

import { MaskedTextField } from './MaskedTextField'

export default {
  title: 'Components/MaskedTextField',
  component: MaskedTextField,
  args: {
    required: false,
    inline: false,
    disabled: false,
    guide: true,
    keepCharPositions: false,
  },
}

export const Default = (args) => (
  <MaskedTextField
    {...args}
    label='Masked field'
    mask={['(', /\d/, /\d/, /\d/, ')']}
    placeholder='(___)'
    name='generic'
    onChange={action('changed')}
  />
)
