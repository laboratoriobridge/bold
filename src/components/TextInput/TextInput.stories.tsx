import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextInput } from './TextInput'

storiesOf('Components|TextInput', module)
  .add('default', () => (
    <TextInput
      id='nome'
      name='nome'
      placeholder='Nome'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
      required
    />
  ))
  .add('password', () => (
    <TextInput
      id='password'
      name='password'
      placeholder='Type your password...'
      type='password'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
    />
  ))
  .add('with icon', () => (
    <TextInput
      id='iconized'
      name='iconized'
      icon='zoomOutline'
      iconPosition={select('iconPosition', ['left', 'right'], 'right')}
      onIconClick={action('icon-clicked')}
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
    />
  ))
