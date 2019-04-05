import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { PopperFocus, PopperFocusProps } from '../Popper/PopperFocus'

export interface PopoverProps {
  text: string
  title?: string
  placement?: PopperFocusProps['placement']
  children?: React.ReactNode
}

export function Popover(props: PopoverProps) {
  const { text, title, placement, children } = props

  const renderPopper = () => {
    return (
      <PopoverBase title={title}>
        <p>{text}</p>
      </PopoverBase>
    )
  }

  return (
    <PopperFocus renderPopper={renderPopper} placement={placement} offset={0.75}>
      {children}
    </PopperFocus>
  )
}

Popover.defaultProps = {
  text: '',
  title: null,
  placement: 'right',
} as Partial<PopoverProps>

export interface PopoverBaseProps {
  title?: string
  children?: React.ReactNode
}

export function PopoverBase(props: PopoverBaseProps) {
  const { title, children } = props
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.base}>
      {title && <h4 className={classes.title}>{title}</h4>}

      {children}
    </div>
  )
}

export const createStyles = (theme: Theme) => ({
  base: {
    borderRadius: theme.radius.popper,
    maxWidth: 300,
    background: theme.pallete.surface.main,
    boxShadow: `
        0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 2px 1px -1px rgba(0, 0, 0, 0.12),
        0 1px 1px 0 rgba(0, 0, 0, 0.14)
    `,
    padding: '1rem',
  } as CSSProperties,
  title: {
    textAlign: 'center',
    marginBottom: '0.5rem',
  } as CSSProperties,
})
