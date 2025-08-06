import React, { ComponentProps } from 'react'
import { ExternalStyles, useStyles } from '../../styles'

interface SwapMeProps extends Omit<ComponentProps<'div'>, 'style'> {
  style?: ExternalStyles
}

export function SwapMe(props: SwapMeProps) {
  const { style, ...rest } = props

  const { classes, css } = useStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.pallete.status.alert.c40,
      background: theme.pallete.status.alert.c90,
      padding: '0.25rem 0.5rem',
      borderRadius: '2px',
      border: `1px dashed ${theme.pallete.status.alert.c40}`,
    },
  }))

  return (
    <div className={css(classes.root, style)} {...rest}>
      Swap me
    </div>
  )
}
