import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { PopperFocus, PopperFocusProps } from '../Popper/PopperFocus'

export interface TooltipProps {
    text: string
    placement?: PopperFocusProps['placement']
    offset?: PopperFocusProps['offset']
    style?: Interpolation
}

export class Tooltip extends React.PureComponent<TooltipProps> {

    static defaultProps: TooltipProps = {
        text: '',
        placement: 'top',
        offset: 0.25,
    }

    render() {
        const { placement, offset } = this.props
        return (
            <PopperFocus
                placement={placement}
                offset={offset}
                renderPopper={this.props.text ? this.renderPopper : undefined}
            >
                {this.props.children}
            </PopperFocus>
        )
    }

    renderPopper = () => {
        return <TooltipBase text={this.props.text} style={this.props.style} />
    }
}

export interface TooltipBaseProps extends WithStylesProps {
    text: string
    style?: Interpolation
}

@withStyles
export class TooltipBase extends React.PureComponent<TooltipBaseProps> {

    render() {
        const { css, theme, style, text } = this.props
        const styles: Styles = {
            base: {
                borderRadius: theme.radius.popper,
                maxWidth: theme.breakpoints.size.small,
                background: theme.pallete.gray.c20,
                color: '#fff',
                fontWeight: 'bold',
                lineHeight: 1.5,
            },
            small: {
                textAlign: 'center',
                padding: '0.5rem',
            },
            big: {
                textAlign: 'left',
                padding: '1rem',
                maxWidth: 277,
            },
        }

        const size = text.length > 60 ? 'big' : 'small'

        return (
            <div className={css(styles.base, styles[size], style)}>{text}</div>
        )
    }
}
