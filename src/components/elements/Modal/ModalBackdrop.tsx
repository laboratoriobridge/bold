import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface ModalBackdropProps extends WithStylesProps {
    onClick(): any
}

@withStyles
export class ModalBackdrop extends React.PureComponent<ModalBackdropProps> {

    render() {
        const { css, onClick } = this.props
        const styles = {
            backdrop: {
                position: 'fixed',
                zIndex: 1030,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
        }
        return (
            <div className={css(styles.backdrop)} onClick={onClick} />
        )
    }
}
