import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { OuterShadows } from '../../../styles/theme/createShadows'

export interface PaperProps extends WithStylesProps {
    elevation?: keyof OuterShadows
    style?: Interpolation
}

@withStyles
export class Paper extends React.Component<PaperProps> {

    render() {
        const { css, elevation, style, theme } = this.props

        const styles: Styles = {
            paper: {
                border: '1px solid ' + theme.pallete.gray.c80,
                borderRadius: theme.radius.button,
            },
        }
        return (
            <div
                className={css(
                    styles.paper,
                    elevation && this.createShadowStyle(elevation),
                    style
                )}
            >
                {this.props.children}
            </div>
        )
    }

    private createShadowStyle(elevation: keyof OuterShadows) {
        return {
            boxShadow: this.props.theme.shadows.outer[elevation],
        }
    }

}
