import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextArea } from './TextArea'

storiesOf('Components|TextArea', module).add('default', () => (
  <TextArea
    name='nome'
    label={text('label', 'Text area')}
    error={text('error', '')}
    disabled={boolean('disabled', false)}
    placeholder='Nome'
    maxLength={number('maxLength', '' as any)}
    onChange={action('changed')}
    required
  />
))
