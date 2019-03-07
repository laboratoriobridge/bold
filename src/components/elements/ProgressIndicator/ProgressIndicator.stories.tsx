import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextColor } from '../../../styles'

import { ProgressIndicator } from './ProgressIndicator'

const colors: TextColor[] = ['normal', 'secondary', 'disabled', 'primary', 'danger', 'info', 'alert', 'success']

storiesOf('Components|ProgressIndicator', module).add('default', () => (
  <ProgressIndicator color={select('color', colors, 'primary')} value={number('percentage', 60)} />
))
