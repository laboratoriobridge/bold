import React from 'react'

import { Theme, useStyles } from '../../styles'
import { Calendar, CalendarProps } from '../Calendar'

export interface CalendarPopupProps extends CalendarProps {}

export function CalendarPopup(props: CalendarPopupProps) {
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.root} tabIndex={-1}>
      <Calendar {...props} />
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
