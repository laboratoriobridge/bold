import React from 'react'
import { Icon } from '../Icon'
import { HeaderIconObject, HeaderIconType } from './ModalHeader'

interface ModalHeaderIconProps {
  icon: HeaderIconType
}

const isHeaderIconObject = (icon: HeaderIconType): icon is HeaderIconObject =>
  typeof icon === 'object' && 'name' in icon

export const ModalHeaderIcon = (props: ModalHeaderIconProps) => {
  const { icon } = props

  if (isHeaderIconObject(icon)) {
    return <Icon icon={icon.name} size={3} fill={icon.fill} stroke={icon.stroke} />
  }

  return <Icon icon={icon} size={3} />
}
