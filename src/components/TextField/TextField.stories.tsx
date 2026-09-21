import { action } from '@storybook/addon-actions'
import React from 'react'

import { VFlow } from '../VFlow'

import { TextField } from './TextField'

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
  },
  args: {
    disabled: false,
    onChange: action('changed'),
  },
}

export const Default = (args) => <TextField {...args} />

Default.args = {
  label: 'Text label',
  placeholder: 'Nome',
  error: '',
  required: true,
  inline: false,
}

export const Password = (args) => (
  <TextField
    {...args}
    id='password'
    name='password'
    label='Password'
    placeholder='Type your password...'
    type='password'
  />
)

export const WithIcon = (args) => (
  <VFlow>
    <TextField
      {...args}
      id='clickable'
      name='clickable'
      icon='zoomOutline'
      label='Clickable icon'
      onIconClick={action('icon-clicked')}
    />
    <TextField
      {...args}
      id='decorative'
      name='decorative'
      icon='zoomOutline'
      iconPosition='left'
      label='Decorative icon'
    />
  </VFlow>
)
