import React from 'react'
import { Icon, IconImage } from '../Icon'
import { IconColor } from '../Icon/Icon'

interface ModalHeaderIconProps {
  icon: IconImage
  iconFill: IconColor
}

export const ModalHeaderIcon = (props: ModalHeaderIconProps) => {
  const { icon, iconFill } = props

  return <Icon icon={icon} fill={iconFill} size={3} />
}
