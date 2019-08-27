import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MaskedTextField } from './MaskedTextField'

storiesOf('Components|MaskedTextField', module).add('default', () => (
  <MaskedTextField
    label='Masked field'
    mask={['(', /\d/, /\d/, /\d/, ')']}
    placeholder='(___)'
    name='generic'
    disabled={boolean('disabled', false)}
    guide={boolean('guide', true)}
    keepCharPositions={boolean('keepCharPositions', false)}
    onChange={action('changed')}
  />
))
