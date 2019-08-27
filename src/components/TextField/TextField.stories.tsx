import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

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
    <TextField
      id='iconized'
      name='iconized'
      icon='zoomOutline'
      label='Input with icon'
      iconPosition={select('iconPosition', ['left', 'right'], 'right')}
      onIconClick={action('icon-clicked')}
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
    />
  ))
