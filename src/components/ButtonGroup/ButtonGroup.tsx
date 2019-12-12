import React, { CSSProperties } from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return <div className={css(classes.root, style)} role='group' {...rest} />
}

export const createStyles = () => ({
  root: {
    '& > button:not(:first-of-type), & > a:not(:first-of-type)': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    '& > button:not(:last-of-type), & > a:not(:last-of-type)': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
    },
    '& > button:focus, & > a:focus': {
      zIndex: 1, // prevent box-shadow overlapping
    },
  } as CSSProperties,
})
