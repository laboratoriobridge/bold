import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface InfoLabelProps extends WithStylesProps {
    title: string
    titleStyles?: any
    childStyles?: any
}

@withStyles
export class InfoLabel extends React.Component<InfoLabelProps> {
    render() {
        const { css, title, children, titleStyles, childStyles } = this.props
        const styles = {
            infoLabel: {
                lineHeight: 1.5,
            },
            title: {
                fontWeight: 'bold',
            },
        }
        return (
            <div className={css(styles.infoLabel)}>
                <div className={css(styles.title, titleStyles)}>{title}</div>
                <div className={css(childStyles)}>{children}</div>
            </div>
        )
    }
}
