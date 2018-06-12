import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export interface InfoLabelProps extends WithStylesProps {
    title: string
    titleStyles?: any
    childStyles?: any
    placeholder?: string
}

@withStyles
export class InfoLabel extends React.PureComponent<InfoLabelProps> {

    render() {
        const { css, theme, title, children, titleStyles, childStyles, placeholder } = this.props
        const styles: Styles = {
            infoLabel: {
                lineHeight: 1.5,
            },
            title: {
                fontWeight: 'bold',
            },
            child: {
                ':empty::before': {
                    content: `"${placeholder || '-'}"`,
                    color: theme.pallete.text.secondary,
                    fontStyle: 'italic',
                },
            },
        }
        return (
            <div className={css(styles.infoLabel)}>
                <div className={css(styles.title, titleStyles)}>{title}</div>
                <div className={css(styles.child, childStyles)}>{children}</div>
            </div>
        )
    }
}
