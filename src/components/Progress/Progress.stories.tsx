import { number, select } from '@storybook/addon-knobs'
import React from 'react'

import { Progress, ProgressType } from './Progress'

const type: ProgressType[] = ['normal', 'secondary', 'disabled', 'primary', 'danger', 'info', 'alert', 'success']

export default {
  title: 'Components/Progress',
}

export const Default = () => <Progress type={select('color', type, 'primary')} value={number('percentage', 60)} />
