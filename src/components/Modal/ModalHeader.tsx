import React, { useContext } from 'react'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { HFlow } from '../HFlow'
import { IconImage } from '../Icon'
import { IconColor } from '../Icon/Icon'
import { VFlow } from '../VFlow'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeaderIcon } from './ModalHeaderIcon'
import { ModalContext, ModalScroll } from './Modal'

export type HeaderIconObject = {
  name: IconImage
  fill?: IconColor
}

export type HeaderIconType = IconImage | HeaderIconObject

export type HeaderType = {
  icon?: HeaderIconType
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
  const { icon } = header ?? {}

  const { scroll } = useContext(ModalContext)
  const { classes } = useStyles(createStyles, scroll)

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

export const createStyles = (theme: Theme, scroll: ModalScroll) => ({
  header: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: '6rem',
    padding: '1.5rem 1rem 1rem 2rem',
    backgroundColor: theme.pallete.surface.main,
    boxShadow:
      scroll === 'paper' ? `0 1px 5px 0 ${theme.pallete.divider}, 0 2px 1px -1px ${theme.pallete.divider}` : '',
  } as React.CSSProperties,
})
