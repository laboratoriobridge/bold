import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Icon } from '../../elements/Icon/Icon'

export interface FormErrorProps extends WithStylesProps {
    error: string
    style?: Interpolation
}

@withStyles
export class FormError extends React.Component<FormErrorProps, any> {

    render() {
        const { css, theme, style } = this.props
        const styles: Styles = {
            wrapper: {
                display: 'flex',
                alignItems: 'center',
                color: theme.pallete.status.danger.main,
            },
            icon: {
                marginLeft: '0.25rem',
            },
        }
        return (
            <div className={css(styles.wrapper, style)}>
                {this.props.error}
                <Icon icon='informationCircle' style={styles.icon} size={1} />
            </div>
        )
    }

}
