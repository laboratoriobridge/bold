import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { AlignItems, JustifyContent } from '../Grid/Grid'
import { Spacing } from '../Spacing/Spacing'

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
  const { direction, vSpacing, hSpacing, style } = props
  const { classes, css } = useStyles(createStyles, props)

  const renderChild = (child: any) => {
    return (
      child && (
        <Spacing
          style={classes.child}
          top={vSpacing / 2}
          bottom={vSpacing / 2}
          left={hSpacing / 2}
          right={hSpacing / 2}
        >
          {child}
        </Spacing>
      )
    )
  }

  const className = css(classes.flow, direction === 'horizontal' ? classes.flowHorizontal : classes.flowVertical, style)

  return <div className={className}>{React.Children.map(props.children, child => renderChild(child))}</div>
}

Flow.defaultProps = {
  direction: 'horizontal',
  vSpacing: 0,
  hSpacing: 1,
} as Partial<FlowProps>

export const createStyles = (theme: Theme, { alignItems, justifyContent, direction }: FlowProps) => ({
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
