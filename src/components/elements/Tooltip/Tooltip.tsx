import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

import { PopperFocus, PopperFocusProps } from '../Popper/PopperFocus'

export interface TooltipProps {
    text: string
    placement?: PopperFocusProps['placement']
}

export class Tooltip extends React.PureComponent<TooltipProps> {

    static defaultProps: TooltipProps = {
        text: '',
        placement: 'top',
    }

    render() {
        return (
            <PopperFocus placement={this.props.placement} renderPopper={this.renderPopper} offset={0.25}>
                {this.props.children}
            </PopperFocus>
        )
    }

    renderPopper = () => {
        return <TooltipBase>{this.props.text}</TooltipBase>
    }
}

export interface TooltipBaseProps extends WithStylesProps {
}

@withStyles
export class TooltipBase extends React.PureComponent<TooltipBaseProps> {
    render() {
        const { css, theme } = this.props
        const styles: Styles = {
            base: {
                borderRadius: theme.radius.main,
                maxWidth: theme.breakpoints.size.small,
                background: theme.pallete.gray.c20,
                color: '#fff',
                padding: '0.5rem 1rem',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '0.75rem',
            },
        }
        return (
            <div className={css(styles.base)}>{this.props.children}</div>
        )
    }
}
