import React from 'react'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { HFlow } from '../HFlow'
import { IconImage } from '../Icon'
import { IconColor } from '../Icon/Icon'
import { VFlow } from '../VFlow'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeaderIcon } from './ModalHeaderIcon'

export type HeaderIconObject = {
  name: IconImage
  fill?: IconColor
  stroke?: IconColor
}

export type HeaderIconType = IconImage | HeaderIconObject

export type HeaderType = {
  icon?: HeaderIconType
  background?: string
  showBottomBorder?: boolean
}

interface ModalHeaderProps {
  title: string
  subtitle?: string
  header?: HeaderType
  showCloseIcon?: boolean
  onCloseButtonClick?: () => void
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { title, subtitle, header, showCloseIcon = true, onCloseButtonClick } = props
  const { icon, background, showBottomBorder = true } = header ?? {}

  const { classes } = useStyles(createStyles, background, showBottomBorder)

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
        {icon && <ModalHeaderIcon icon={icon} />}
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
      {showCloseIcon && <ModalCloseButton onClick={onCloseButtonClick} />}
    </HFlow>
  )
}

export const createStyles = (theme: Theme, background: string, showBottomBorder: boolean) => ({
  header: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: 'fit-content',
    padding: '1.5rem 1rem 1rem 2rem',
    backgroundColor: background ? background : theme.pallete.surface.main,
    ...(showBottomBorder && {
      boxShadow: `0 1px 5px 0 ${theme.pallete.divider}, 0 2px 1px -1px ${theme.pallete.divider}`,
    }),
  } as React.CSSProperties,
})
