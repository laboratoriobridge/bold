import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextArea } from './TextArea'

storiesOf('Components|TextArea', module).add('default', () => (
  <TextArea
    disabled={boolean('disabled', false)}
    name='nome'
    placeholder='Nome'
    maxLength={number('maxLength', '' as any)}
    onChange={action('changed')}
    required
  />
))
