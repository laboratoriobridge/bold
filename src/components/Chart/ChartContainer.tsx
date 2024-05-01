import React from 'react'
import { Theme, useStyles } from '../../styles'

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function ChartContainer(props: ChartContainerProps) {
  const { children, ...rest } = props

  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.wrapper} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    display: 'inline-block',
    fontSize: '0.8rem',
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: 2,
    color: theme.pallete.gray.c20,
    width: '100%',
  },
})
