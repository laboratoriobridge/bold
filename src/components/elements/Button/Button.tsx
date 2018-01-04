import * as React from 'react'
import { Icon } from '../Icon'
import withHint, { WithHintProps } from '../../../decorators/withHint'
import withStyles, { WithStylesProps, css } from '../../../decorators/withStyles'
import { MouseEventHandler } from 'react'

export type Type = 'normal' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'link'

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
    onClick?: Function
    onMouseEnter?: MouseEventHandler<any>
    onMouseLeave?: MouseEventHandler<any>
    tabIndex?: number
    title?: string
    type?: Type
}

export interface ButtonState {
    loading: boolean
}

@withStyles
@withHint
export class Button extends React.Component<ButtonProps, ButtonState> {

    private timeout: number
    static defaultProps: Partial<ButtonProps> = {
        type: 'normal'
    }

    constructor(props, context?) {
        super(props, context)

        this.state = {
            loading: false
        }
    }

    render() {
        const {
            label,
            className,
            createStyles,
            icon,
            loading,
            type,
            ...rest
        } = this.props

        const styles = createStyles(theme => ({
            button: {
                backgroundColor: theme.white,
                border: '1px solid ' + theme.gray30,
                borderRadius: 2,
                color: theme.gray50,
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                lineHeight: 1.58,
                letterSpacing: 1,
                padding: '0.85rem 2.5rem',
                ':active': {
                    boxShadow: 'inset 0 2px 8px 0 ' + theme.gray10,
                },
                ':disabled': {
                    opacity: 0.5
                },
                ':focus': {
                    border: '1px solid ' + theme.primary,
                    outline: 'none'
                },
            },
            primary: {
                backgroundColor: theme.primary,
                border: '1px solid ' + theme.primary,
                color: theme.white
            }
        }))

        const classes = css(
            styles.button,
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
                {icon && <span className='icon'><Icon icon={icon} /></span>}
                {label && <span>{label}</span>}
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

    componentWillUnmount() {
        clearTimeout(this.timeout)
        this.timeout = -1
    }

    private onClick = (event) => {
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
