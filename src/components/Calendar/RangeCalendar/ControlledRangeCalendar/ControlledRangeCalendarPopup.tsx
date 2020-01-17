import React from 'react'

import { Theme, useStyles } from '../../../styles'

import { ControlledRangeCalendar, ControlledRangeCalendarProps } from './ControlledRangeCalendar'

export interface ControlledRangeCalendarPopupProps extends ControlledRangeCalendarProps {}

export function ControlledRangeCalendarPopup(props: ControlledRangeCalendarPopupProps) {
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.root} tabIndex={-1}>
      <ControlledRangeCalendar {...props} />
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
