import React from 'react'
import { Manager, Reference } from 'react-popper'

import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util'

import { PopperContent, PopperContentProps } from './PopperContent'

export interface PopperProps extends Omit<PopperContentProps, 'show'> {
  closeOnOutsideClick?: boolean
  style?: ExternalStyles
  block?: boolean
  initialVisible?: boolean
  renderTarget(controller: PopperController): React.ReactNode
  children(controller: PopperController): React.ReactNode
  control?(controller: PopperController): void
  onShow?(controller: PopperController): void
  onHide?(controller: PopperController): void
}

export interface PopperController {
  show(): any
  hide(): any
  toggle(): any
  isShown(): boolean
}

export interface PopperState {
  show: boolean
}

export function Popper(props: PopperProps) {
  const { renderTarget, children, style, block, ...rest } = props

  const [visible, setVisible] = React.useState(props.initialVisible || false)

  const wrapperRef = React.useRef<HTMLDivElement>()
  const mounting = React.useRef(true)

  const { classes, css } = useStyles(() => ({
    wrapper: {
      display: block ? 'block' : 'inline-block',
    },
  }))

  const toggle = () => {
    visible ? hide() : show()
  }

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  const isShown = () => {
    return visible
  }

  const controller: PopperController = {
    show,
    hide,
    toggle,
    isShown,
  }

  React.useEffect(() => {
    if (!mounting.current) {
      if (visible) {
        props.onShow && props.onShow(controller)
      } else {
        props.onHide && props.onHide(controller)
      }
    }
    mounting.current = false
  }, [visible])

  React.useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (visible) {
          hide()
        }
      }
    }

    const handleOnkeypress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hide()
      }
    }

    if (props.closeOnOutsideClick) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    document.addEventListener('keydown', handleOnkeypress)

    props.control(controller)

    return () => {
      if (props.closeOnOutsideClick) {
        document.removeEventListener('mousedown', handleClickOutside)
      }
      document.removeEventListener('keydown', handleOnkeypress)
    }
  }, [visible])

  return (
    <div ref={wrapperRef} className={css(classes.wrapper, style)}>
      <Manager>
        <Reference>
          {refProps => (
            <div ref={refProps.ref} className={css(classes.wrapper)}>
              {renderTarget(controller)}
            </div>
          )}
        </Reference>
        <PopperContent
          show={visible}
          modifiers={{
            preventOverflow: {
              boundariesElement: 'window',
            },
          }}
          {...rest}
        >
          {children(controller)}
        </PopperContent>
      </Manager>
    </div>
  )
}

Popper.defaultProps = {
  placement: 'bottom',
  closeOnOutsideClick: true,
  offset: 0,
  block: false,
  renderTarget: () => null,
  children: () => null,
  control: () => null,
} as Partial<PopperProps>
