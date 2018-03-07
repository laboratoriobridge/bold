import * as React from 'react'

import { focusBoxShadow, shade, Theme, withStyles, WithStylesProps } from '../../../styles'
import { withHint, WithHintProps } from '../Hint'
import { Icons } from '../Icon/generated/Icons'
import { Icon } from '../Icon/Icon'

export type Type = 'normal' | 'primary'

export type OnClickWithPromise = (event: React.MouseEvent<any>) => any

export interface ButtonProps extends WithHintProps, WithStylesProps {
    /**
     * css className
     */
    className?: string
    disabled?: boolean
    icon?: Icons
    label: string
    loading?: boolean
    name?: string,
    onClick?: React.MouseEventHandler<any> | OnClickWithPromise
    onMouseEnter?: React.MouseEventHandler<any>
    onMouseLeave?: React.MouseEventHandler<any>
    tabIndex?: number
    title?: string
    type?: Type
}

export interface ButtonState {
    loading: boolean
}

export const createStyles = (theme: Theme) => ({
    button: {
        backgroundColor: theme.color.white,
        border: '1px solid ' + theme.color.gray70,
        borderRadius: theme.baseRadius + 2,
        color: theme.color.gray40,
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: theme.font.textFamily,
        position: 'relative',
        userSelect: 'none',
        fontSize: '0.875rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        padding: '1rem 2.5rem',
        transition: 'all .2s',
        transform: 'translate3d(0,0,0)',
        'span': {
            transition: 'color .2s',
        },
        ':not(:disabled):active': {
            boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
        },
        ':disabled': {
            opacity: 0.5,
        },
        ':focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme),
        },
        ':hover': {
            backgroundColor: shade(-0.08, theme.color.white),
        },
    },
    primary: {
        backgroundColor: theme.color.primary,
        border: '1px solid ' + theme.color.primary,
        color: theme.color.white,
        ':hover': {
            backgroundColor: shade(-0.08, theme.color.primary),
        },
    },
    loading: {
        pointerEvents: 'none',
        'span': {
            color: 'transparent',
        },
        ':after': {
            animation: `${theme.animation.spinAround} 500ms infinite linear`,
            border: '3px solid currentColor',
            borderRadius: '50%',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            content: '""',
            display: 'block',
            height: '1.5em',
            width: '1.5em',
            position: 'absolute',
            left: 'calc(50% - (1.5em / 2))',
            top: 'calc(50% - (1.5em / 2))',
        },
    },
})

@withStyles
@withHint
export class Button extends React.Component<ButtonProps, ButtonState> {

    static defaultProps: Partial<ButtonProps> = {
        type: 'normal',
    }

    private timeout: number

    constructor(props, context?) {
        super(props, context)

        this.state = {
            loading: false,
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        this.timeout = -1
    }

    render() {
        const {
            label,
            className,
            css,
            icon,
            loading,
            theme,
            type,
            ...rest,
        } = this.props

        const styles = createStyles(theme)

        const classes = css(
            styles.button,
            type === 'primary' && styles.primary,
            (this.state.loading || loading) && styles.loading
        )

        return (
            <button
                {...rest}
                className={classes}
                onClick={this.onClick}
                onKeyPress={this.handleOnKeyPress}
                type='button'
            >
                <span>
                    {icon && <Icon icon={icon} />}
                    {label}
                </span>
            </button>
        )
    }

    private handleOnKeyPress = (event) => {
        event.preventDefault()
        if (!event) { event = window.event } // cross-browser shenanigans
        if (event.charCode === 32 || event.charCode === 13 && this.props.onClick) { // this is the spacebar
            this.onClick(event)
        }
        return true // treat all other keys normally;
    }

    private onClick = (event: React.MouseEvent<any>) => {
        if (this.props.onClick) {

            const promise = this.props.onClick(event)
            if (promise && promise.then) {
                this.setState({ loading: true })
                promise
                    .then(() => this.stopLoading())
                    .catch((error) => {
                        this.stopLoading()
                        throw new Error(error)
                    })
            }
        }
    }

    private stopLoading() {
        if (!this.timeout) {
            this.timeout = window.setTimeout(() => {
                this.setState({ loading: false })
                this.timeout = null
            }, 10)
        }
    }

}
