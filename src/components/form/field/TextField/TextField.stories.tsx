import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { TextField } from './TextField'

storiesOf('Form|TextField', module)
  .addDecorator(withForm())
  .add('default', () => (
    <TextField
      id='nome'
      name='nome'
      label='Nome'
      placeholder='Nome'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
      required
    />
  ))
  .add('password', () => (
    <TextField
      id='password'
      name='password'
      label='Password'
      placeholder='Type your password...'
      type='password'
      required
    />
  ))
  .add('with icon', () => (
    <TextField
      id='iconized'
      name='iconized'
      label='Input with icon'
      icon='zoomOutline'
      iconPosition={select('iconPosition', ['left', 'right'], 'right')}
      onIconClick={action('icon-clicked')}
      disabled={boolean('disabled', false)}
    />
  ))
