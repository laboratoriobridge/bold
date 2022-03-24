import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import { MaskedTextField } from './MaskedTextField'

export default {
  title: 'Components/MaskedTextField',
}

export const Default = () => (
  <MaskedTextField
    label='Masked field'
    mask={['(', /\d/, /\d/, /\d/, ')']}
    placeholder='(___)'
    name='generic'
    required={boolean('required', false)}
    inline={boolean('inline', false)}
    disabled={boolean('disabled', false)}
    guide={boolean('guide', true)}
    keepCharPositions={boolean('keepCharPositions', false)}
    onChange={action('changed')}
  />
)
