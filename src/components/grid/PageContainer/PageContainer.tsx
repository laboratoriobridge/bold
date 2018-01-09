import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface PageContainerProps extends WithStylesProps {

}

@withStyles
export class PageContainer extends React.PureComponent<PageContainerProps> {
    render() {
        const styles = this.props.createStyles(theme => ({
            container: {
                width: '960px',
                margin: '0 auto',

                [theme.breakpoint.small]: {
                    width: '768px',
                },
            },
        }))

        return (
            <div className={this.props.css(styles.container)}>{this.props.children}</div>
        )
    }
}
