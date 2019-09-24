import React, { useRef, useState } from 'react'
import { PopperProps } from 'react-popper'

import usePopper from '../../hooks/usePopper'
import { ExternalStyles, useTheme } from '../../styles'
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

  const theme = useTheme()
  const [visible, setVisible] = useState<boolean>(false)

  const tooltipIdRef = useRef<string>(`tooltip-${randomStr()}`)
  const anchorRef = useRef()
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

  const handleMouseEnter = e => {
    setVisible(true)
    child.props.onMouseEnter && child.props.onMouseEnter(e)
  }
  const handleMouseLeave = e => {
    setVisible(false)
    child.props.onMouseLeave && child.props.onMouseLeave(e)
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
          onMouseLeave: handleMouseLeave,
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
              className={className}
              role='tooltip'
              aria-hidden={!visible ? 'true' : 'false'}
              style={{ ...popperStyle, zIndex: theme.zIndex.tooltip }}
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
