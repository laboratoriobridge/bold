import { Theme, useStyles } from 'bold-ui'
import React, { CSSProperties } from 'react'

function UseStylesDemo() {
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.container}>
      <p className={classes.first}>First paragraph</p>
      <p className={classes.second}>Second paragraph</p>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  container: {
    textAlign: 'center',

    '& > p': {
      fontSize: '1rem',
      lineHeight: 2,
    },
  } as CSSProperties,

  first: {
    color: theme.pallete.status.danger.main,
    '&:hover': {
      background: theme.pallete.surface.background,
    },
  } as CSSProperties,

  second: {
    background: theme.pallete.surface.background,
  } as CSSProperties,
})

export default UseStylesDemo
