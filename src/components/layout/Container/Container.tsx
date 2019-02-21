import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface ContainerProps extends WithStylesProps {
    style?: Interpolation
}

@withStyles
export class Container extends React.PureComponent<ContainerProps> {

    static defaultProps: Partial<Container> = {}

    render() {
        const { theme, style } = this.props
        const styles = {
            container: {
                width: '960px',
                margin: '0 auto',

                [theme.breakpoints.down('small')]: {
                    width: '768px',
                },
            },
        }

        return (
            <div className={this.props.css(styles.container, style)}>{this.props.children}</div>
        )
    }
}
