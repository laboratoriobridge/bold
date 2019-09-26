import React, { useEffect, useRef, useState } from 'react'
import { PopperProps } from 'react-popper'

import usePopper from '../../hooks/usePopper'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { randomStr } from '../../util/string'
import { Portal } from '../Portal'
import { RootRef } from '../RootRef'
import { FadeTransition } from '../Transition/FadeTransition'

import { TooltipPopper } from './TooltipPopper'

export interface TooltipProps extends Omit<PopperProps, 'children'> {
  text: string
  style?: ExternalStyles
  offset?: number
  container?: Element
  children: React.ReactElement<any>
}

export interface TooltipState {
  visible: boolean
}

export function Tooltip(props: TooltipProps) {
  const { text, children, offset, style: externalStyle, container, ...rest } = props
  const child = React.Children.only(children)

  const { theme, css, classes } = useStyles(createStyles)
  const [visible, setVisible] = useState<boolean>(false)

  const tooltipIdRef = useRef<string>(`tooltip-${randomStr()}`)
  const anchorRef = useRef<HTMLElement>()
  const tooltipRef = useRef()

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: tooltipRef,
      modifiers: {
        offset: { offset: `0, ${theme.typography.sizes.html * offset}` },
        preventOverflow: {
          boundariesElement: 'window',
        },
      },
      ...rest,
    },
    [visible]
  )

  useEffect(() => {
    if (!anchorRef.current || !visible) {
      return
    }

    const handleWindowMouseOver = (e: MouseEvent) => {
      // This is implemented using mouseover since mouseleave does not trigger
      // for disabled elements due to browser/react bugs (https://github.com/facebook/react/issues/4251)
      const target = e.target as Node
      if (!anchorRef.current.contains(target)) {
        setVisible(false)
      }
    }

    window.addEventListener('mouseover', handleWindowMouseOver)
    return () => window.removeEventListener('mouseover', handleWindowMouseOver)
  }, [anchorRef.current, visible])

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setVisible(true)
    child.props.onMouseEnter && child.props.onMouseEnter(e)
  }
  const handleFocus = e => {
    setVisible(true)
    child.props.onFocus && child.props.onFocus(e)
  }
  const handleBlur = e => {
    setVisible(false)
    child.props.onBlur && child.props.onBlur(e)
  }

  if (!text) {
    return child
  }

  return (
    <>
      <RootRef rootRef={anchorRef}>
        {React.cloneElement(child, {
          'aria-describedby': tooltipIdRef.current,
          onMouseEnter: handleMouseEnter,
          onFocus: handleFocus,
          onBlur: handleBlur,
        })}
      </RootRef>

      <FadeTransition in={visible}>
        {({ className }) => (
          <Portal container={container}>
            <div
              id={tooltipIdRef.current}
              ref={tooltipRef}
              className={css(className, popperStyle, classes.popper, visible && classes.shown)}
              role='tooltip'
              aria-hidden={!visible ? 'true' : 'false'}
              data-placement={placement}
            >
              <TooltipPopper text={text} style={externalStyle} />
            </div>
          </Portal>
        )}
      </FadeTransition>
    </>
  )
}

Tooltip.defaultProps = {
  placement: 'top',
  offset: 0.25,
} as Partial<TooltipProps>

const createStyles = (theme: Theme) => ({
  popper: {
    zIndex: theme.zIndex.tooltip,
    display: 'none',
  },
  shown: {
    display: 'block',
  },
})
