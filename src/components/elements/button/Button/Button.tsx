import * as React from 'react'

import { focusBoxShadow, shade, Theme, withStyles, WithStylesProps } from '../../../../styles'
import { Icons } from '../../Icon/generated/Icons'
import { Icon } from '../../Icon/Icon'
import { BaseButton, BaseButtonProps } from '../BaseButton'

export type Type = 'normal' | 'primary'

export interface ButtonProps extends BaseButtonProps, WithStylesProps {
    icon?: Icons
    label: string
    loading?: boolean
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
export class Button extends React.Component<ButtonProps, ButtonState> {

    static defaultProps: Partial<ButtonProps> = {
        type: 'normal',
    }

    constructor(props, context?) {
        super(props, context)

        this.state = {
            loading: false,
        }
    }

    render() {
        const {
            label,
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
            <BaseButton
                {...rest}
                className={classes}
                onLoadingChange={this.onLoadingChange}
            >
                <span>
                    {icon && <Icon icon={icon} />}
                    {label}
                </span>
            </BaseButton>
        )
    }

    private onLoadingChange = (loading: boolean) => {
        this.setState({ loading })
    }

}
