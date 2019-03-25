import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Progress, ProgressType } from './Progress'

const type: ProgressType[] = ['normal', 'secondary', 'disabled', 'primary', 'danger', 'info', 'alert', 'success']

storiesOf('Components|Progress', module).add('default', () => (
  <Progress type={select('color', type, 'primary')} value={number('percentage', 60)} />
))
