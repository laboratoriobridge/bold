import React from 'react'
import { IconMap, Icons } from '../Icon/generated/types'
import { Status, StatusType } from './Status'

const types: { [key in StatusType]: StatusType } = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
}

const icons: Icons[] = Object.keys(IconMap) as Icons[]

export default {
  title: 'Components/Status',
  component: Status,
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(types),
    },
    icon: {
      control: 'select',
      options: icons,
    },
  },
  args: { type: 'info', text: 'This is a status message' },
}

export const Default = (args) => {
  return <Status {...args} />
}

export const Info = () => <Status type='info' text='Information message' />

export const Success = () => <Status type='success' text='Operation completed successfully' />

export const Warning = () => <Status type='warning' text='Please review this warning' />

export const Danger = () => <Status type='danger' text='An error has occurred' />

export const CustomIcon = (args) => {
  return <Status type='info' icon={args.icon} text='Added now' />
}

CustomIcon.args = {
  icon: 'clockOutline',
}
