import React from 'react'
import { select } from '@storybook/addon-knobs'
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
}

export const Default = () => {
  const type = select('type', types, 'info')

  return <Status type={type} text='This is a status message' />
}

export const Info = () => <Status type='info' text='Information message' />

export const Success = () => <Status type='success' text='Operation completed successfully' />

export const Warning = () => <Status type='warning' text='Please review this warning' />

export const Danger = () => <Status type='danger' text='An error has occurred' />

export const CustomIcon = () => {
  const icon = select('icon', icons, 'clockOutline')

  return <Status type='info' icon={icon} text='Added now' />
}
