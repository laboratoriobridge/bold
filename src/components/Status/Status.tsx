import React from 'react'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { HFlow, HFlowProps } from '../HFlow'
import { Icon, Icons } from '../Icon'
import { Text } from '../Text'

export type StatusType = 'info' | 'success' | 'warning' | 'danger'

export interface StatusProps extends Pick<HFlowProps, 'hSpacing'> {
  type: StatusType
  text: string
  style?: ExternalStyles
}

export function Status(props: StatusProps) {
  const { type, text, hSpacing = 0.5, style } = props

  const { theme, css } = useStyles()
  const typeStyle = createTypesStyles(theme)[type]

  return (
    <HFlow hSpacing={hSpacing} alignItems='center' justifyContent='flex-start' style={css(typeStyle.style, style)}>
      <Icon icon={typeStyle.icon} size={1} />
      <Text color='inherit'>{text}</Text>
    </HFlow>
  )
}

export const createTypesStyles = (
  theme: Theme
): {
  [key in StatusType]: {
    icon: Icons
    style: ExternalStyles
  }
} => {
  return {
    info: {
      icon: 'infoCircleOutline',
      style: {
        color: theme.pallete.status.info.main,
      },
    },
    success: {
      icon: 'checkCircleOutline',
      style: {
        color: theme.pallete.status.success.main,
      },
    },
    warning: {
      icon: 'exclamationTriangleOutline',
      style: {
        color: theme.pallete.status.alert.main,
      },
    },
    danger: {
      icon: 'banOutline',
      style: {
        color: theme.pallete.status.danger.main,
      },
    },
  }
}
