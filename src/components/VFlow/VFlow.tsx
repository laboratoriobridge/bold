import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface VFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  vSpacing?: number
  style?: ExternalStyles
}

/**
 * @deprecated Use `Flow` component with `direction='vertical'` instead.
 *
 * @example
 * // Before
 * <VFlow gap={2}>...</VFlow>
 *
 * // After
 * <Flow direction='vertical' gap={2}>...</Flow>
 *
 * @deprecatedSince 1.0.1
 */
export function VFlow(props: VFlowProps) {
  const { vSpacing, style, children, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return (
    <div className={css(classes.container, style)} {...rest}>
      {React.Children.map(children, (child) => child && <div className={classes.childWrapper}>{child}</div>)}
    </div>
  )
}

VFlow.defaultProps = {
  vSpacing: 1,
} as VFlowProps

const createStyles = (theme: Theme, { vSpacing }: VFlowProps) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,
  childWrapper: {
    display: 'inline-block',
    marginBottom: `${vSpacing / 2}rem`,
    marginTop: `${vSpacing / 2}rem`,

    ':first-of-type': {
      marginTop: 0,
    },
    ':last-of-type': {
      marginBottom: 0,
    },
    ':empty': {
      display: 'none',
    },
  } as CSSProperties,
})
