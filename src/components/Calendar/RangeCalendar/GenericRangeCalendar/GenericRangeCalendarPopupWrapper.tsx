import React from 'react'

import { Theme, useStyles } from '../../../../styles'

export interface GenericRangeCalendarPopupWrapperProps {
  children?: React.ReactNode
}

export function GenericRangeCalendarPopupWrapper(props: GenericRangeCalendarPopupWrapperProps) {
  const { children } = props
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.root} tabIndex={-1}>
      {children}
    </div>
  )
}

export const createStyles = (theme: Theme) => ({
  root: {
    background: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer[40],
    borderRadius: theme.radius.popper,
    padding: '0.5rem .25rem .25rem .25rem',
    outline: 'none',
  },
})
