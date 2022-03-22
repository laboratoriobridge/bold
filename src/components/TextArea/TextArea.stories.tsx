import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'
import React from 'react'

import { TextArea } from './TextArea'

export default {
  title: 'Components/TextArea',
}

export const Default = () => (
  <TextArea
    name='nome'
    label={text('label', 'Text area')}
    error={text('error', '')}
    disabled={boolean('disabled', false)}
    inline={boolean('inline', false)}
    placeholder='Nome'
    maxLength={number('maxLength', '' as any)}
    onChange={action('changed')}
    required
  />
)
