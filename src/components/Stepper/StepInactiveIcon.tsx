import React, { CSSProperties } from 'react'
import { Theme, useStyles } from '../../styles'

export function StepInactiveIcon() {
  const { classes, css } = useStyles(createStyles)

  return (
    <div className={css(classes.container)}>
      <div className={css(classes.icon)} />
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  container: {
    width: '1rem',
    height: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
  icon: {
    width: '6px',
    height: '2px',
    background: theme.pallete.surface.main,
  } as CSSProperties,
})
