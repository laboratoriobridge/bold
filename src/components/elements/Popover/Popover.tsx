import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { PopperFocus, PopperFocusProps } from '../Popper/PopperFocus'

export interface PopoverProps {
    text: string
    title?: string
    placement?: PopperFocusProps['placement']
}

export class Popover extends React.PureComponent<PopoverProps> {

    static defaultProps: PopoverProps = {
        text: '',
        title: null,
        placement: 'right',
    }

    render() {
        return (
            <PopperFocus renderPopper={this.renderPopper} placement={this.props.placement} offset={0.75}>
                {this.props.children}
            </PopperFocus>
        )
    }

    renderPopper = () => {
        return (
            <PopoverBase title={this.props.title}>
                <p>{this.props.text}</p>
            </PopoverBase>
        )
    }
}

export interface PopoverBaseProps extends WithStylesProps {
    title?: string
}

@withStyles
export class PopoverBase extends React.PureComponent<PopoverBaseProps> {
    render() {
        const { css, theme, title } = this.props
        const styles: Styles = {
            base: {
                borderRadius: theme.radius.main,
                maxWidth: 300,
                background: theme.pallete.surface.main,
                boxShadow: `
                    0 1px 3px 0 rgba(0, 0, 0, 0.2),
                    0 2px 1px -1px rgba(0, 0, 0, 0.12),
                    0 1px 1px 0 rgba(0, 0, 0, 0.14)
                `,
                padding: '1rem',
            },
            title: {
                fontSize: theme.typography.fontSize,
                textAlign: 'center',
                marginBottom: '0.5rem',
            },
        }
        return (
            <div className={css(styles.base)}>
                {title &&
                    <h4 className={css(styles.title)}>{title}</h4>
                }

                {this.props.children}
            </div>
        )
    }
}
