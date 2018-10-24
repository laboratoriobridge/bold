import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles/withStyles'

export interface ButtonGroupProps extends WithStylesProps {
    style?: Interpolation
}

@withStyles
export class ButtonGroup extends React.PureComponent<ButtonGroupProps> {
    render() {
        const { children, css, style } = this.props
        const styles: Styles = {
            root: {
                '& > button:not(:first-child)': {
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                },
                '& > button:not(:last-child)': {
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                },
                '& > button:focus': {
                    zIndex: 1, // prevent box-shadow overlapping
                },
            },
        }

        return (
            <div className={css(styles.root, style)} role='group'>
                {children}
            </div>
        )
    }
}
