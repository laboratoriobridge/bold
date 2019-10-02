import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { VFlow } from '../VFlow'

import { TextField } from './TextField'

storiesOf('Components|TextField', module)
  .add('default', () => (
    <TextField
      label={text('label', 'Text label')}
      placeholder='Nome'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
      error={text('error', '')}
      required={boolean('required', true)}
    />
  ))
  .add('password', () => (
    <TextField
      id='password'
      name='password'
      label='Password'
      placeholder='Type your password...'
      type='password'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
    />
  ))
  .add('with icon', () => (
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
  ))
