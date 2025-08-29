import React, { CSSProperties, ReactNode, useEffect } from 'react'
import { Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'
import { useIsOverflowing } from '../../hooks'
import { useModalContext } from '../../hooks'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeaderIconType, ModalHeaderIcon } from './ModalHeaderIcon'

type ModalHeaderBaseProps = {
  hasCloseButton?: boolean
  onCloseButtonClick?: () => void
}

export type ModalHeaderContentProps = ModalHeaderBaseProps & {
  title: ReactNode
  subtitle?: ReactNode
  icon?: ModalHeaderIconType
}

export type ModalHeaderChildrenProps = ModalHeaderBaseProps & {
  children: ReactNode
}

export function ModalHeader(props: ModalHeaderContentProps): JSX.Element
export function ModalHeader(props: ModalHeaderChildrenProps): JSX.Element

export function ModalHeader(props: ModalHeaderContentProps | ModalHeaderChildrenProps) {
  const { hasCloseButton = true, onCloseButtonClick } = props

  const { scroll, bodyRef, setHasHeader } = useModalContext()
  const isBodyOverflowing = useIsOverflowing(bodyRef, 'vertical')
  const { classes } = useStyles(createStyles, scroll === 'body' && isBodyOverflowing)

  useEffect(() => {
    setHasHeader(true)
    return () => setHasHeader(false)
  }, [setHasHeader])

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
      {hasCloseButton && <ModalCloseButton onClick={onCloseButtonClick} />}
    </HFlow>
  )
}

const isHeaderWithChildren = (
  props: ModalHeaderContentProps | ModalHeaderChildrenProps
): props is ModalHeaderChildrenProps => 'children' in props

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
