import * as React from 'react'
import * as classnames from 'classnames'
import { helpersClassnames, UtilProps } from '../../../util/Util'
import { Icon } from '../Icon'
import withHint, { WithHintProps } from '../../decorators/withHint'
import { withStyles, WithStylesProps, css } from '../../decorators/withStyles'
import { MouseEventHandler } from 'react'

export type Type = 'success' | 'grey' | 'primary' | 'transparent' | 'neon' | 'danger' | 'warning' | 'info' | 'link'

export interface ButtonProps extends UtilProps, WithHintProps, WithStylesProps {
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
        const styles = this.props.createStyles(theme => ({
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
                border: '1px solid' + theme.primary,
                color: 'white'
            }
        }))

        const classes = css(
            styles.button,
            this.props.type === 'primary' && styles.primary
        )
        classnames('button', this.props.className, helpersClassnames(this.props), {
            'is-grey': this.props.type && this.props.type === 'grey',
            'is-primary': this.props.type && this.props.type === 'primary',
            'is-transparent': this.props.type && this.props.type === 'transparent',
            'is-neon': this.props.type && this.props.type === 'neon',
            'is-success': this.props.type && this.props.type === 'success',
            'is-danger': this.props.type && this.props.type === 'danger',
            'is-warning': this.props.type && this.props.type === 'warning',
            'is-info': this.props.type && this.props.type === 'info',
            'is-link': this.props.type && this.props.type === 'link',
            'is-small': this.props.size && this.props.size === 'small',
            'is-normal': this.props.size && this.props.size === 'normal',
            'is-medium': this.props.size && this.props.size === 'medium',
            'is-large': this.props.size && this.props.size === 'large',
            'is-dashed': this.props.dashed,
            'is-loading': this.props.loading || this.state.loading,
            'is-outlined': this.props.outlined,
            'is-square': this.props.square,
            'has-shadow': this.props.shadow,
        })

        return (
            <button
                className={classes}
                name={this.props.name}
                onClick={this.onClick}
                onKeyPress={this.handleOnKeyPress}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                tabIndex={this.props.tabIndex}
                title={this.props.title}
                type='button'
            >
                {this.props.icon && <span className='icon'><Icon icon={this.props.icon} /></span>}
                {this.props.children && <span>{this.props.children}</span>}
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
