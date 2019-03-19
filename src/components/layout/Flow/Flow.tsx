import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { AlignItems, JustifyContent } from '../Grid/Grid'

export interface FlowProps {
  direction?: 'horizontal' | 'vertical'
  vSpacing?: number
  hSpacing?: number
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  style?: Interpolation
  children?: React.ReactNode
}

export const Flow = (props: FlowProps) => {
  const { direction, style } = props
  const { classes, css } = useStyles(createStyles, props)

  const renderChild = (child: any) => {
    return child && <div className={classes.child}>{child}</div>
  }

  const className = css(classes.flow, direction === 'horizontal' ? classes.flowHorizontal : classes.flowVertical, style)

  return <div className={className}>{React.Children.map(props.children, child => renderChild(child))}</div>
}

Flow.defaultProps = {
  direction: 'horizontal',
  vSpacing: 0,
  hSpacing: 1,
} as Partial<FlowProps>

export const createStyles = (
  theme: Theme,
  { alignItems, justifyContent, direction, vSpacing, hSpacing }: FlowProps
) => ({
  flow: {
    display: 'flex',
    alignItems,
    justifyContent,
  } as CSSProperties,
  flowHorizontal: {} as CSSProperties,
  flowVertical: {
    flexDirection: 'column',
  } as CSSProperties,
  child: {
    marginBottom: `${vSpacing / 2}rem`,
    marginTop: `${vSpacing / 2}rem`,
    marginLeft: `${hSpacing / 2}rem`,
    marginRight: `${hSpacing / 2}rem`,
    display: 'inline-block',

    ':first-of-type': {
      marginTop: direction === 'vertical' && 0,
      marginLeft: direction === 'horizontal' && 0,
    },
    ':last-of-type': {
      marginBottom: direction === 'vertical' && 0,
      marginRight: direction === 'horizontal' && 0,
    },
    ':empty': {
      display: 'none',
    },
  } as CSSProperties,
})
