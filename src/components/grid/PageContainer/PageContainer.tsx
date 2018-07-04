import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface PageContainerProps extends WithStylesProps {
    style?: Interpolation
}

@withStyles
export class PageContainer extends React.PureComponent<PageContainerProps> {
    render() {
        const { theme, style } = this.props
        const styles = {
            container: {
                width: '960px',
                margin: '0 auto',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',

                [theme.breakpoints.down('small')]: {
                    width: '768px',
                    padding: '0.25rem 0.5rem',
                },
            },
        }

        return (
            <div className={this.props.css(styles.container, style)}>{this.props.children}</div>
        )
    }
}
