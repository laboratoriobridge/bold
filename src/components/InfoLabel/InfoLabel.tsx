import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../styles'

export interface InfoLabelProps {
  title: string
  titleStyles?: any
  childStyles?: any
  placeholder?: string
  children?: React.ReactNode
}

export function InfoLabel(props: InfoLabelProps) {
  const { title, children, titleStyles, childStyles } = props
  const { classes, css } = useStyles(createStyles, props)

  return (
    <div className={classes.infoLabel}>
      <div className={css(classes.title, titleStyles)}>{title}</div>
      <div className={css(classes.child, childStyles)}>{children}</div>
    </div>
  )
}

export const createStyles = (theme: Theme, { placeholder }: InfoLabelProps) => ({
  infoLabel: {
    lineHeight: 1.5,
  } as CSSProperties,
  title: {
    fontWeight: 'bold',
  } as CSSProperties,
  child: {
    ':empty::before': {
      content: `"${placeholder || '-'}"`,
      color: theme.pallete.text.secondary,
      fontStyle: 'italic',
    },
  } as CSSProperties,
})
