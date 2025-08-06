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

export interface ModalHeaderProps {
  title: string
  subtitle?: string
  icon?: IconImage
  iconFill?: IconColor
  showCloseButton?: boolean
  onCloseButtonClick?: () => void
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { title, subtitle, icon, iconFill = 'normal', showCloseButton = true, onCloseButtonClick } = props

  const { scroll } = useContext(ModalContext)
  const { classes } = useStyles(createStyles, scroll)

  return (
    <HFlow
      hSpacing={0.5}
      justifyContent='space-between'
      alignItems='flex-start'
      style={classes.header}
      data-testid='modal-header'
    >
      <HFlow hSpacing={1} justifyContent='flex-start' alignItems='center' data-testid='modal-header-title-area'>
        {icon && <ModalHeaderIcon icon={icon} iconFill={iconFill} />}
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
      {showCloseButton && <ModalCloseButton onClick={onCloseButtonClick} />}
    </HFlow>
  )
}

export const createStyles = (theme: Theme, scroll: ModalScroll) => ({
  header: {
    width: '100%',
    padding: '1.5rem 1rem 1rem 2rem',
    zIndex: 1,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: scroll === 'body' ? theme.shadows.outer[10] : '',
  } as React.CSSProperties,
})
