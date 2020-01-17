import React from 'react'
import { Theme, useStyles } from '../../../../styles'
import { ControlledPeriodRangeCalendar, ControlledPeriodRangeCalendarProps } from './ControlledPeriodRangeCalendar'

export interface ControlledPeriodRangeCalendarPopupProps extends ControlledPeriodRangeCalendarProps {}

export function ControlledPeriodRangeCalendarPopup(props: ControlledPeriodRangeCalendarPopupProps) {
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.root} tabIndex={-1}>
      <ControlledPeriodRangeCalendar {...props} />
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
