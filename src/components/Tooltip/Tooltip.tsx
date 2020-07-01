import { Options as PopperOptions } from '@popperjs/core'
import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useTransition } from '../../hooks/useTransition'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { randomStr } from '../../util/string'
import { Portal } from '../Portal'
import { RootRef } from '../RootRef'
import { TooltipPopper } from './TooltipPopper'

export interface TooltipProps extends PopperOptions {
  text: string
  style?: ExternalStyles
  offset?: number
  container?: Element
  transitionDelay?: number
  children: React.ReactElement<any>
}

export interface TooltipState {
  visible: boolean
}

export function Tooltip(props: TooltipProps) {
  const { text, offset, children, style: externalStyle, transitionDelay, container, ...rest } = props
  const child = React.Children.only(children)

  const { css, theme, classes } = useStyles(createStyles, props)
  const [visible, setVisible] = useState<boolean>(false)

  const rootRef = useRef<HTMLElement>()
  const [popperRef, setPopperRef] = useState<HTMLDivElement>()
  const tooltipId = useMemo(() => `tooltip-${randomStr()}`, [])
  const transitionState = useTransition(visible, { exitTimeout: transitionDelay })

  const {
    styles: { popper: popperStyles },
  } = usePopper(rootRef.current, popperRef, {
    modifiers: [
      {
        name: 'default',
        options: {
          offset: { offset: `0, ${theme.typography.sizes.html * offset}` },
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
      },
    ],
    ...rest,
  })

  useEffect(() => {
    if (!rootRef || !visible) {
      return
    }

    const handleWindowPointerOver = (e: PointerEvent) => {
      // This is implemented using mouseover since mouseleave does not trigger
      // for disabled elements due to browser/react bugs (https://github.com/facebook/react/issues/4251)
      const target = e.target as Node
      if (!rootRef.current?.contains(target)) {
        setVisible(false)
      }
    }

    window.addEventListener('pointerover', handleWindowPointerOver)
    return () => window.removeEventListener('pointerover', handleWindowPointerOver)
  }, [rootRef, visible])

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLElement>) => {
    setVisible(true)
    child.props.onPointerEnter && child.props.onPointerEnter(e)
  }, [])

  const handleFocus = useCallback((e) => {
    setVisible(true)
    child.props.onFocus && child.props.onFocus(e)
  }, [])

  const handleBlur = useCallback((e) => {
    setVisible(false)
    child.props.onBlur && child.props.onBlur(e)
  }, [])

  if (!text) {
    return child
  }

  return (
    <>
      <RootRef rootRef={rootRef}>
        {React.cloneElement(child, {
          title: !visible ? child.props.title || text : child.props.title,
          'aria-describedby': visible ? tooltipId : undefined,
          onPointerEnter: handlePointerEnter,
          onFocus: handleFocus,
          onBlur: handleBlur,
        })}
      </RootRef>

      {transitionState !== 'exited' && (
        <Portal container={container}>
          <div
            id={tooltipId}
            ref={setPopperRef}
            className={css(classes.popper, transitionState === 'entered' && classes.visible)}
            style={popperStyles}
            role='tooltip'
            aria-hidden={!visible ? 'true' : 'false'}
          >
            <TooltipPopper text={text} style={externalStyle} />
          </div>
        </Portal>
      )}
    </>
  )
}

Tooltip.defaultProps = {
  placement: 'top',
  offset: 0.25,
  transitionDelay: 200,
} as Partial<TooltipProps>

const createStyles = (theme: Theme, { transitionDelay }: TooltipProps) => ({
  popper: {
    zIndex: theme.zIndex.tooltip,
    transition: `opacity ${transitionDelay}ms ease`,
    opacity: 0,
  } as CSSProperties,
  visible: {
    opacity: 1,
  } as CSSProperties,
})
