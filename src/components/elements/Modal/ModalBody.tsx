import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface ModalBodyProps extends WithStylesProps {
    style?: Interpolation
}

@withStyles
export class ModalBody extends React.PureComponent<ModalBodyProps> {

    render() {
        const { css, style } = this.props
        const styles = {
            body: {
                padding: '2.5rem',
            },
        }
        return (
            <div className={css(styles.body, style)}>
                {this.props.children}
            </div>
        )
    }
}
