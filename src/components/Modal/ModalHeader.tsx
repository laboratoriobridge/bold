import React, { CSSProperties, ReactNode } from 'react'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'
import { useIsOverflowing } from '../../hooks'
import { useModalContext } from '../../hooks'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeaderIconType, ModalHeaderIcon } from './ModalHeaderIcon'

type ModalHeaderBaseProps = {
  hasCloseIcon?: boolean
  onCloseButtonClick?: () => void
}

export type ModalHeaderWithProps = ModalHeaderBaseProps & {
  title: ReactNode
  subtitle?: ReactNode
  icon?: ModalHeaderIconType
}

export type ModalHeaderWithChildren = ModalHeaderBaseProps & {
  children: ReactNode
}

export function ModalHeader(props: ModalHeaderWithChildren): JSX.Element
export function ModalHeader(props: ModalHeaderWithProps): JSX.Element

export function ModalHeader(props: ModalHeaderWithProps | ModalHeaderWithChildren) {
  const { hasCloseIcon = true, onCloseButtonClick } = props

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
      {isHeaderWithChildren(props) ? (
        props.children
      ) : (
        <HFlow hSpacing={1} justifyContent='flex-start' alignItems='center'>
          {props.icon && <ModalHeaderIcon icon={props.icon} />}
          <VFlow vSpacing={0}>
            <Heading level={1} color='normal' fontWeight='bold'>
              {props.title}
            </Heading>
            {props.subtitle && (
              <Heading level={5} color='normal' fontWeight='normal'>
                {props.subtitle}
              </Heading>
            )}
          </VFlow>
        </HFlow>
      )}
      {hasCloseIcon && <ModalCloseButton onClick={onCloseButtonClick} />}
    </HFlow>
  )
}

const isHeaderWithChildren = (
  props: ModalHeaderWithProps | ModalHeaderWithChildren
): props is ModalHeaderWithChildren => 'children' in props

const createStyles = (theme: Theme, showHeaderShadow: boolean) => ({
  header: {
    width: '100%',
    gridTemplateColumns: '1fr auto',
    padding: '1.5rem 1rem 1rem 2rem',
    zIndex: 1,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: showHeaderShadow ? theme.shadows.outer[10] : '',
  } as CSSProperties,
})
