import { Interpolation } from 'emotion'
import React from 'react'

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
                '& > button:not(:first-of-type), & > a:not(:first-of-type)': {
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                },
                '& > button:not(:last-of-type), & > a:not(:last-of-type)': {
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                },
                '& > button:focus, & > a:focus': {
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
