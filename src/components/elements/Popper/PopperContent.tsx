import React from 'react'
import { Popper, PopperProps } from 'react-popper'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Omit } from '../../../util/types'

export interface PopperContentProps extends Omit<PopperProps, 'children'>, WithStylesProps {
    show: boolean
    offset?: number
}

@withStyles
export class PopperContent extends React.Component<PopperContentProps> {
    static defaultProps: PopperContentProps = {
        show: false,
        offset: 0.25,
    }

    render() {
        const { css, theme, show, offset, ...rest } = this.props
        const styles: Styles = {
            content: {
                transition: 'opacity .2s',
                zIndex: theme.zIndex.popper,
                padding: `${offset}rem`,
            },
            visible: {
                visibility: 'visible',
                opacity: 1,
            },
            hidden: {
                visibility: 'hidden',
                opacity: 0,
            },
        }

        return (
            <Popper {...rest}>
                {popperProps => (
                    <div
                        ref={popperProps.ref}
                        style={popperProps.style}
                        className={css(styles.content, show ? styles.visible : styles.hidden)}
                        data-visible={show}
                    >
                        {this.props.children}
                    </div>
                )}
            </Popper>
        )
    }
}
