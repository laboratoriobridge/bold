import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export type TagType = 'normal' | 'danger' | 'info' | 'success' | 'alert'

export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  type?: TagType
  style?: Interpolation
}

export function Tag(props: TagProps) {
  const { type, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return <span className={css(classes.tag, classes[type], style)} {...rest} />
}

Tag.defaultProps = {
  type: 'normal',
} as Partial<TagProps>

const createStyles = (theme: Theme) => ({
  tag: {
    padding: '0.25rem',
    fontWeight: 'bold',
    borderRadius: 4,
    whiteSpace: 'nowrap',
  } as CSSProperties,
  normal: {
    background: theme.pallete.gray.c80,
  } as CSSProperties,
  danger: {
    background: theme.pallete.status.danger.main,
    color: theme.pallete.status.danger.onColor,
  } as CSSProperties,
  info: {
    background: theme.pallete.status.info.main,
    color: theme.pallete.status.info.onColor,
  } as CSSProperties,
  success: {
    background: theme.pallete.status.success.main,
    color: theme.pallete.status.success.onColor,
  } as CSSProperties,
  alert: {
    background: theme.pallete.status.alert.main,
    color: theme.pallete.status.alert.onColor,
  } as CSSProperties,
})
