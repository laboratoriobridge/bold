import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles/withStyles'
import { Heading, HeadingProps } from '../Heading/Heading'

export interface HeadingSectionProps extends WithStylesProps {
    title: React.ReactNode
    level: HeadingProps['level']
    color?: HeadingProps['color']
    style?: Interpolation
}

@withStyles
export class HeadingSection extends React.Component<HeadingSectionProps> {
    render() {
        const { css, theme, style, title, children, ...rest } = this.props
        const styles = {
            section: {
            },
            title: {
                marginBottom: '1rem',
            },
        }

        return (
            <div className={css(styles.section, style)}>
                <Heading style={styles.title} {...rest}>{title}</Heading>
                {children}
            </div>
        )
    }
}
