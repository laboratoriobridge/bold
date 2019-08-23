import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextInput } from '../TextInput'

import { FormControl } from './FormControl'

storiesOf('Components|FormControl', module).add('default', () => (
  <FormControl
    label={text('label', 'Label')}
    htmlFor={text('id', 'input-id')}
    error={text('error', '')}
    required={boolean('required', true)}
  >
    <TextInput id={text('id', 'input-id')} />
  </FormControl>
))
