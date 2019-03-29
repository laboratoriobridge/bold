import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export interface ContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: Interpolation
}

export function Container(props: ContainerProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return <div className={css(classes.container, style)} {...rest} />
}

Container.defaultProps = {} as Partial<ContainerProps>

export const createStyles = (theme: Theme) => ({
  container: {
    width: '960px',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
      width: '768px',
    },
  } as CSSProperties,
})
