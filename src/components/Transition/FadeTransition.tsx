import React from 'react'
import Transition, { TransitionProps, TransitionStatus } from 'react-transition-group/Transition'

import { ClassNames, useStyles } from '../../styles'

export type FadeTransitionProps = Partial<TransitionProps> & {
  children?(renderProps: FadeTransitionRenderProps): React.ReactNode
}

export interface FadeTransitionRenderProps {
  state: TransitionStatus
  classes: ClassNames<'default' | 'entering' | 'entered'>
  className?: string
}

export function FadeTransition(props: FadeTransitionProps) {
  const { children, ...rest } = props
  const { classes, css } = useStyles(() => ({
    default: {
      transition: `opacity ${props.timeout}ms ease-in-out`,
      opacity: 0,
    },
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }))

  return (
    <Transition {...rest} timeout={0}>
      {(state) =>
        children({
          state,
          classes,
          className: css(classes.default, classes[state]),
        })
      }
    </Transition>
  )
}

FadeTransition.defaultProps = {
  timeout: 200,
}
