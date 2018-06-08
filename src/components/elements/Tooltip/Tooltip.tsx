import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

import { PopperFocus, PopperFocusProps } from '../poppers/PopperFocus'

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
            <PopperFocus placement={this.props.placement} renderPopper={this.renderPopper}>
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
        const styles = {
            base: {
                borderRadius: theme.radius.main,
                maxWidth: theme.breakpoints.size.small,
                background: theme.pallete.gray.c20,
                color: theme.pallete.gray.c90,
                padding: '0.5rem 1rem',
                fontWeight: 'bold',
                textAlign: 'center',
            },
        }
        return (
            <div className={css(styles.base)}>{this.props.children}</div>
        )
    }
}
