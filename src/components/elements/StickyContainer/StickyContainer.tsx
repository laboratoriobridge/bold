import { PositionProperty } from 'csstype'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export interface StickyContainerProps extends WithStylesProps {
    top?: number
    left?: number
}

export interface StickContainerState {
    position: PositionProperty
}

@withStyles
export class StickyContainer extends React.PureComponent<StickyContainerProps, StickContainerState> {

    constructor(props: StickyContainerProps) {
        super(props)
        this.state = {
            position: 'absolute',
        }
    }

    render() {
        const { css, top, left } = this.props
        const root: Styles = {
            container: {
                top: this.state.position === 'fixed' ? 0 : top,
                position: this.state.position,
                width: '100%',
                zIndex: 2,
                left,
            },
        }

        return (
            <div className={css(root.container)}>{this.props.children}</div>
        )
    }

    public listener = () => {
        if (window.scrollY > this.props.top) {
            this.setState({ position: 'fixed' })
        } else {
            this.setState({ position: 'absolute' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listener)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener)
    }
}
