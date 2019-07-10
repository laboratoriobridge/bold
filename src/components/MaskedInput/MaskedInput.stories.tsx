import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MaskedInput } from './MaskedInput'

storiesOf('Components|MaskedInput', module).add('default', () => (
  <MaskedInput
    mask={['(', /\d/, /\d/, /\d/, ')']}
    placeholder='(___)'
    name='generic'
    disabled={boolean('disabled', false)}
    guide={boolean('guide', true)}
    keepCharPositions={boolean('keepCharPositions', false)}
    onChange={action('changed')}
  />
))
