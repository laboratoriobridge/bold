import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { VFlow } from '../VFlow'

import { TextField } from './TextField'

export default {
  title: 'Components/TextField',
}

export const Default = () => (
  <TextField
    label={text('label', 'Text label')}
    placeholder='Nome'
    disabled={boolean('disabled', false)}
    onChange={action('changed')}
    error={text('error', '')}
    required={boolean('required', true)}
    inline={boolean('inline', false)}
  />
)

export const Password = () => (
  <TextField
    id='password'
    name='password'
    label='Password'
    placeholder='Type your password...'
    type='password'
    disabled={boolean('disabled', false)}
    onChange={action('changed')}
  />
)

export const WithIcon = () => (
  <VFlow>
    <TextField
      id='clickable'
      name='clickable'
      icon='zoomOutline'
      label='Clickable icon'
      onIconClick={action('icon-clicked')}
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
    />
    <TextField
      id='decorative'
      name='decorative'
      icon='zoomOutline'
      iconPosition='left'
      label='Decorative icon'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
    />
  </VFlow>
)
