import React from 'react'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { IconImage } from '../Icon'
import { Icon, IconColor } from '../Icon/Icon'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'
import { ModalCloseButton } from './ModalCloseButton'

export type HeaderIconObject = {
  icon: IconImage
  fill?: IconColor
  stroke?: IconColor
}

export type HeaderIconType = IconImage | HeaderIconObject

export interface ModalHeaderProps {
  title: string
  subtitle?: string
  icon?: HeaderIconType
  background?: string
  hasCloseIcon?: boolean
  hasBorder?: boolean
  onCloseButtonClick?: () => void
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { title, subtitle, icon, background, hasBorder = true, hasCloseIcon = true, onCloseButtonClick } = props

  const { classes } = useStyles(createStyles, background, hasBorder)

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Icon icon={icon} size={3} />
    } else {
      const { icon: iconName, fill, stroke } = icon as HeaderIconObject
      return <Icon icon={iconName} size={3} fill={fill} stroke={stroke} />
    }
  }

  return (
    <HFlow
      hSpacing={1}
      justifyContent='space-between'
      alignItems='flex-start'
      style={classes.header}
      data-testid='modal-header'
    >
      <HFlow
        hSpacing={1.25}
        justifyContent='flex-start'
        alignItems={subtitle ? 'flex-start' : 'center'}
        data-testid='modal-header-title-area'
      >
        {icon && renderIcon()}
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

export const createStyles = (theme: Theme, background: string, hasDivider: boolean) => ({
  header: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: 'fit-content',
    padding: '1.5rem 1rem 1rem 2rem',
    backgroundColor: background ? background : theme.pallete.surface.main,
    ...(hasDivider && {
      boxShadow: `0 1px 5px 0 ${theme.pallete.divider}, 0 2px 1px -1px ${theme.pallete.divider}`,
    }),
  } as React.CSSProperties,
})
