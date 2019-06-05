import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextInput } from '../form'

import { FormControl } from './FormControl'

storiesOf('Components|FormControl', module).add('default', () => (
  <FormControl
    name={text('name', 'Name')}
    label={text('label', 'Label')}
    required={boolean('required', true)}
    error={text('error', '')}
  >
    <TextInput />
  </FormControl>
))
