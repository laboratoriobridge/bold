import React from 'react'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'
import { useIsOverflowing } from '../../hooks'
import { useModalContext } from '../../hooks'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeaderIconType, ModalHeaderIcon } from './ModalHeaderIcon'

export interface ModalHeaderProps {
  title: string
  subtitle?: string
  icon?: ModalHeaderIconType
  hasCloseIcon?: boolean
  onCloseButtonClick?: () => void
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { title, subtitle, icon, hasCloseIcon = true, onCloseButtonClick } = props

  const { scroll, bodyRef } = useModalContext()
  const isBodyOverflowing = useIsOverflowing(bodyRef, 'vertical')
  const { classes } = useStyles(createStyles, scroll === 'body' && isBodyOverflowing)

  return (
    <HFlow
      hSpacing={0.5}
      justifyContent='space-between'
      alignItems='flex-start'
      style={classes.header}
      data-testid='modal-header'
    >
      <HFlow hSpacing={1} justifyContent='flex-start' alignItems='center'>
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
      {hasCloseIcon && <ModalCloseButton onClick={onCloseButtonClick} />}
    </HFlow>
  )
}

const createStyles = (theme: Theme, showHeaderShadow: boolean) => ({
  header: {
    width: '100%',
    padding: '1.5rem 1rem 1rem 2rem',
    zIndex: 1,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: showHeaderShadow ? theme.shadows.outer[10] : '',
  } as React.CSSProperties,
})
