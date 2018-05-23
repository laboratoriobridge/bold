import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface ModalBodyProps extends WithStylesProps {
}

@withStyles
export class ModalBody extends React.PureComponent<ModalBodyProps> {

    render() {
        const { css } = this.props
        const styles = {
            body: {
                padding: '3rem',
            },
        }
        return (
            <div className={css(styles.body)}>
                {this.props.children}
            </div>
        )
    }
}
