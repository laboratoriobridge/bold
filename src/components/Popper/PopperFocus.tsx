import React, { useState } from 'react'
import { Manager, PopperProps, Reference } from 'react-popper'

import { useStyles } from '../../styles'

import { PopperContent, PopperContentProps } from './PopperContent'

export interface PopperFocusProps {
  placement?: PopperProps['placement']
  offset?: PopperContentProps['offset']
  children?: React.ReactNode
  renderPopper?(): React.ReactNode
}

/**
 * Creates a popper element when the children is hovered or focused.
 */
export function PopperFocus(props: PopperFocusProps) {
  const { placement, offset, renderPopper, children } = props
  const [isShown, setShown] = useState(false)
  const { classes } = useStyles(() => ({
    wrapper: {
      display: 'inline-block',
    },
  }))

  const show = () => setShown(true)
  const hide = () => setShown(false)

  return (
    <Manager>
      <Reference>
        {refProps => (
          <div
            className={classes.wrapper}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
            data-show={isShown}
            ref={refProps.ref}
          >
            {React.Children.only(children)}
          </div>
        )}
      </Reference>
      {renderPopper && (
        <PopperContent show={isShown} placement={placement} offset={offset}>
          {renderPopper()}
        </PopperContent>
      )}
    </Manager>
  )
}

PopperFocus.defaultProps = {
  placement: 'right',
} as Partial<PopperFocusProps>
