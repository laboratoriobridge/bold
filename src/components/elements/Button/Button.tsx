import * as React from 'react'

import { Theme, withStyles, WithStylesProps } from '../../../styles'
import { withHint, WithHintProps } from '../Hint'
import { Icon } from '../Icon'

export type Type = 'normal' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'link'

export type OnClickWithPromise = (event: React.MouseEvent<any>) => any

export interface ButtonProps extends WithHintProps, WithStylesProps {
    /**
     * css className
     */
    className?: string
    disabled?: boolean
    icon?: string
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
        borderRadius: 4,
        color: theme.color.gray50,
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: theme.font.textFamily,
        fontSize: '0.75rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        padding: '1rem 2.5rem',
        textTransform: 'uppercase',
        ':not(:disabled):active': {
            boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, .1)',
        },
        ':disabled': {
            opacity: 0.5,
        },
        ':focus': {
            border: '1px solid ' + theme.color.primary,
            outline: 'none',
        },
    },
    primary: {
        backgroundColor: theme.color.primary,
        border: '1px solid ' + theme.color.primary,
        color: theme.color.white,
    },
    loading: {
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
            this.state.loading && styles.loading,
            type === 'primary' && styles.primary
        )

        return (
            <button
                {...rest}
                className={classes}
                onClick={this.onClick}
                onKeyPress={this.handleOnKeyPress}
                type='button'
            >
                {icon && <Icon icon={icon} />}
                {label}
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
