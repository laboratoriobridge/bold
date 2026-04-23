import React, { CSSProperties, ReactNode, Ref, RefAttributes, useEffect } from 'react'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Heading } from '../Heading'
import { useIsOverflowing } from '../../hooks'
import { useModalContext } from '../../hooks'
import { Flow } from '../Flow'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeaderIconType, ModalHeaderIcon } from './ModalHeaderIcon'

type ModalHeaderBaseProps = RefAttributes<HTMLDivElement> & {
  hasCloseButton?: boolean
  style?: ExternalStyles
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

interface ModalHeaderComponent {
  (props: ModalHeaderContentProps): JSX.Element
  (props: ModalHeaderChildrenProps): JSX.Element
}

export const ModalHeader = React.forwardRef(
  (props: ModalHeaderContentProps | ModalHeaderChildrenProps, ref: Ref<HTMLDivElement>) => {
    const { hasCloseButton = true, style, onCloseButtonClick } = props

    const { scroll, bodyRef, hasLeftSidebar, hasRightSidebar, setSectionState } = useModalContext()
    const isBodyOverflowing = useIsOverflowing(bodyRef, 'vertical')
    const hasSidebar = hasLeftSidebar || hasRightSidebar
    const showHeaderShadow = scroll === 'body' && isBodyOverflowing
    const showHeaderBorder = hasSidebar && (scroll === 'full' || (scroll === 'body' && !isBodyOverflowing))
    const { classes, css } = useStyles(createStyles, showHeaderShadow, showHeaderBorder, hasSidebar)

    useEffect(() => {
      setSectionState('hasHeader', true)
      return () => setSectionState('hasHeader', false)
    }, [setSectionState])

    return (
      <Flow
        ref={ref}
        direction='horizontal'
        gap={0.5}
        justifyContent='space-between'
        alignItems='flex-start'
        style={css(classes.header, style)}
        data-testid='modal-header'
      >
        {isHeaderWithChildren(props) ? (
          props.children
        ) : (
          <Flow direction='horizontal' gap={1} justifyContent='flex-start' alignItems='center'>
            {props.icon && <ModalHeaderIcon icon={props.icon} />}
            <Flow direction='vertical' gap={0}>
              <Heading level={1} color='normal' fontWeight='bold'>
                {props.title}
              </Heading>
              {props.subtitle && (
                <Heading level={5} color='normal' fontWeight='normal'>
                  {props.subtitle}
                </Heading>
              )}
            </Flow>
          </Flow>
        )}
        {hasCloseButton && <ModalCloseButton onClick={onCloseButtonClick} />}
      </Flow>
    )
  }
) as ModalHeaderComponent

const isHeaderWithChildren = (
  props: ModalHeaderContentProps | ModalHeaderChildrenProps
): props is ModalHeaderChildrenProps => 'children' in props

const createStyles = (theme: Theme, showHeaderShadow: boolean, showHeaderBorder: boolean, hasSidebar: boolean) => ({
  header: {
    width: '100%',
    gridTemplateColumns: '1fr auto',
    padding: '1.5rem 1rem 1rem 2rem',
    zIndex: 1,
    backgroundColor: hasSidebar ? theme.pallete.gray.c90 : theme.pallete.surface.main,
    borderBottom: showHeaderBorder ? `1px solid ${theme.pallete.divider}` : 'none',
    boxShadow: showHeaderShadow ? theme.shadows.outer[10] : '',
    gridRow: '1',
    gridColumn: '1 / -1',
  } as CSSProperties,
})
