import * as React from 'react'

import { Theme, withStyles, WithStylesProps } from '../../../../styles'
import { Icons } from '../../Icon/generated/Icons'
import { Icon } from '../../Icon/Icon'
import { BaseButton, BaseButtonProps } from '../BaseButton'

import { skinMap, Skins } from './ButtonSkins'

export type Type = 'normal' | 'primary'
export type Size = 'medium' | 'small'

export interface ButtonProps extends BaseButtonProps, WithStylesProps {
    icon?: Icons
    label: string
    loading?: boolean
    skin?: Skins
    size?: Size
    type?: Type
}

export interface ButtonState {
    loading: boolean
}

const createBaseStyles = (theme: Theme) => ({
    button: {
        backfaceVisibility: 'hidden',
        display: 'inline-flex',
        fontFamily: theme.font.textFamily,
        lineHeight: '1.5rem',
        position: 'relative',
        userSelect: 'none',
        transition: 'all .2s',
        ':disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
        },
        ':not(:disabled)': {
            cursor: 'pointer',
        },
        '& > span': {
            alignItems: 'center',
            display: 'inline-flex',
            transition: 'color .2s',
            '& > :not(:last-child)': {
                marginRight: '0.5rem',
            },
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

export const createSizeStyles = (theme: Theme) => ({
    medium: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        padding: 'calc(0.75rem - 1px) 2.5rem',
    },
    small: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        padding: 'calc(0.25rem - 1px) 1rem',
    },
})

@withStyles
export class Button extends React.Component<ButtonProps, ButtonState> {

    static defaultProps: Partial<ButtonProps> = {
        type: 'normal',
        skin: 'default',
        size: 'medium',
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
            skin,
            size,
            theme,
            type,
            ...rest,
        } = this.props

        const skinStyles = skinMap[skin](theme)
        const sizeStyles = createSizeStyles(theme)
        const baseStyles = createBaseStyles(theme)

        const classes = css(
            baseStyles.button,
            skinStyles.button,
            type === 'primary' && skinStyles.primary,
            size === 'medium' && sizeStyles.medium,
            size === 'small' && sizeStyles.small,
            (this.state.loading || loading) && baseStyles.loading
        )

        return (
            <BaseButton
                {...rest}
                className={classes}
                onLoadingChange={this.onLoadingChange}
            >
                <span>
                    {icon && <Icon icon={icon} />}
                    {label && <span>{label}</span>}
                </span>
            </BaseButton>
        )
    }

    private onLoadingChange = (loading: boolean) => {
        this.setState({ loading })
    }

}
