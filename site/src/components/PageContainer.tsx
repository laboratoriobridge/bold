import { useStyles } from 'bold-ui'
import React from 'react'

export function PageContainer(props: React.HTMLAttributes<HTMLDivElement>) {
  const { classes } = useStyles(createStyles)
  return <div className={classes.container} {...props} />
}

export const createStyles = () => ({
  container: {
    width: '100%',
    maxWidth: 960,
  },
})
