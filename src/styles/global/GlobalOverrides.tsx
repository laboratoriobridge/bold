import React, { CSSProperties } from 'react'

import { useStyles } from '../hooks'
import { Theme } from '../theme/createTheme'

export interface GlobalOverridesProps {
  children?: React.ReactNode
}

export const GlobalOverrides = ({ children }: GlobalOverridesProps) => {
  const { classes } = useStyles(createStyles)
  return <div className={classes.root}>{children}</div>
}

export const createStyles = (theme: Theme) => ({
  root: {} as CSSProperties,
})
