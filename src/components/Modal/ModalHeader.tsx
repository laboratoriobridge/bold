import React from 'react'

import { Color } from 'csstype'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { IconImage } from '../Icon'
import { Icon, IconColor } from '../Icon/Icon'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'
import { ModalCloseButton } from './ModalCloseButton'

export type SurfaceColor = 'main' | 'background'

export interface ModalHeaderProps {
  title: string
  subtitle?: string
  icon?: IconImage
  iconFill?: IconColor
  iconStroke?: IconColor
  hasCloseIcon?: boolean
  backgroundColor?: SurfaceColor
  hasDivider?: boolean
  onCloseButtonClick?: () => void
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const {
    title,
    subtitle,
    icon,
    iconFill,
    iconStroke,
    backgroundColor = 'main',
    hasDivider = true,
    hasCloseIcon = true,
    onCloseButtonClick,
  } = props

  const { classes } = useStyles(createStyles, backgroundColor, hasDivider)

  return (
    <HFlow
      hSpacing={1}
      justifyContent='space-between'
      alignItems='flex-start'
      data-testid='modal-header'
      style={classes.header}
    >
      <HFlow hSpacing={1.25} justifyContent='flex-start' alignItems='flex-start'>
        {icon && <Icon icon={icon} size={3} fill={iconFill} stroke={iconStroke} />}
        <VFlow vSpacing={0}>
          <Heading level={1} color='normal' fontWeight='bold'>
            {title}
          </Heading>
          {subtitle && (
            <Heading level={5} color='normal' fontWeight='normal'>
              {subtitle}
            </Heading>
          )}
        </VFlow>
      </HFlow>
      {hasCloseIcon && <ModalCloseButton onClick={onCloseButtonClick} />}
    </HFlow>
  )
}

export const createStyles = (theme: Theme, backgroundColor: Color, hasDivider: boolean) => ({
  header: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: 'fit-content',
    padding: '1.5rem 1rem 1rem 2rem',
    backgroundColor: theme.pallete.surface[backgroundColor],
    ...(hasDivider && {
      boxShadow: `0 1px 5px 0 ${theme.pallete.divider}, 0 2px 1px -1px ${theme.pallete.divider}`,
    }),
  } as React.CSSProperties,
})
