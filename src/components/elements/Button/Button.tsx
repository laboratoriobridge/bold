import * as React from 'react'
import * as classnames from 'classnames'
import { Icon } from '../Icon'
import withHint, { WithHintProps } from '../../../decorators/withHint'
import { withStyles, WithStylesProps, css } from '../../../decorators/withStyles'
import { MouseEventHandler } from 'react'

export type Type = 'success' | 'grey' | 'primary' | 'transparent' | 'neon' | 'danger' | 'warning' | 'info' | 'link'

export interface ButtonProps extends WithHintProps, WithStylesProps {
    /**
     * css className
     */
    className?: string
    dashed?: boolean
    disabled?: boolean
    icon?: string
    loading?: boolean
    name?: string,
    onClick?: Function
    onMouseEnter?: MouseEventHandler<any>
    onMouseLeave?: MouseEventHandler<any>
    outlined?: boolean
    shadow?: boolean
    size?: string
    square?: boolean
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

    constructor(props, context?) {
        super(props, context)

        this.state = {
            loading: false
        }
    }

    render() {
        const {
            children,
            className,
            createStyles,
            dashed,
            icon,
            loading,
            outlined,
            shadow,
            size,
            square,
            type,
            ...rest
        } = this.props

        const styles = createStyles(theme => ({
            button: {
                borderRadius: 100,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                height: 34,
                paddingLeft: 20,
                paddingRight: 20
            },
            primary: {
                backgroundColor: theme.primary,
                border: '1px solid ' + theme.primary,
                color: 'white'
            }
        }))

        const classes = css(
            styles.button,
            type === 'primary' && styles.primary
        )
        classnames('button', className, {
            'is-grey': type && type === 'grey',
            'is-primary': type && type === 'primary',
            'is-transparent': type && type === 'transparent',
            'is-neon': type && type === 'neon',
            'is-success': type && type === 'success',
            'is-danger': type && type === 'danger',
            'is-warning': type && type === 'warning',
            'is-info': type && type === 'info',
            'is-link': type && type === 'link',
            'is-small': size && size === 'small',
            'is-normal': size && size === 'normal',
            'is-medium': size && size === 'medium',
            'is-large': size && size === 'large',
            'is-dashed': dashed,
            'is-loading': loading || this.state.loading,
            'is-outlined': outlined,
            'is-square': square,
            'has-shadow': shadow,
        })

        return (
            <button
                {...rest}
                className={classes}
                onClick={this.onClick}
                onKeyPress={this.handleOnKeyPress}
                type='button'
            >
                {icon && <span className='icon'><Icon icon={icon} /></span>}
                {children && <span>{children}</span>}
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
