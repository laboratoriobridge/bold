import * as React from 'react'
import Transition, { TransitionProps, TransitionStatus } from 'react-transition-group/Transition'

import { ClassNames, useStyles } from '../../../styles'

export interface FadeTransitionProps extends Partial<TransitionProps> {
    children?(renderProps: FadeTransitionRenderProps): React.ReactNode
}

export interface FadeTransitionRenderProps {
    state: TransitionStatus
    classes: ClassNames<'default' | 'entering' | 'entered'>
    className?: string
}

export const FadeTransition = (props: FadeTransitionProps) => {
    const { children, ...rest } = props
    const { classes, css } = useStyles(() => ({
        default: {
            transition: `opacity ${props.timeout}ms ease-in-out`,
            opacity: 0,
        },
        entering: { opacity: 1 },
        entered: { opacity: 1 },
    }))

    return (
        <Transition timeout={200} {...rest}>
            {(state) => children({
                state,
                classes,
                className: css(classes.default, classes[state]),
            })}
        </Transition >
    )
}

FadeTransition.defaultProps = {
    timeout: 200,
}
