import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { withForm } from '../../../stories-addons/withForm'

import { TextAreaField } from './TextAreaField'

storiesOf('Form|TextAreaField', module)
  .addDecorator(withForm())
  .add('default', () => (
    <TextAreaField
      disabled={boolean('disabled', false)}
      name='nome'
      label='Nome'
      placeholder='Nome'
      maxLength={number('maxLength', '' as any)}
      onChange={action('changed')}
      required
    />
  ))
