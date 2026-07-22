import React from 'react'

import { Progress, ProgressType } from './Progress'

const type: ProgressType[] = ['normal', 'secondary', 'disabled', 'primary', 'danger', 'info', 'alert', 'success']

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    color: {
      options: type,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    color: 'primary',
    value: 60,
  },
}

export const Default = (args) => <Progress {...args} />
