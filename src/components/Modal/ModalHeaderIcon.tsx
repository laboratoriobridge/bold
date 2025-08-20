import React from 'react'
import { Icon, IconImage } from '../Icon'
import { IconColor } from '../Icon/Icon'

export type ModalHeaderIconObject = {
  name: IconImage
  fill: IconColor
}

export type ModalHeaderIconType = IconImage | ModalHeaderIconObject

export interface ModalHeaderIconProps {
  icon: ModalHeaderIconType
}

const isHeaderIconObject = (icon: ModalHeaderIconType): icon is ModalHeaderIconObject =>
  typeof icon === 'object' && 'name' in icon

export const ModalHeaderIcon = (props: ModalHeaderIconProps) => {
  const { icon } = props

  if (isHeaderIconObject(icon)) {
    return <Icon icon={icon.name} fill={icon.fill} size={3} />
  }

  return <Icon icon={icon} size={3} />
}
