import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Icons } from '../../Icon/generated/Icons'
import { Icon } from '../../Icon/Icon'
import { BaseButton, BaseButtonProps } from '../BaseButton'

import { createBaseStyles, createSizeStyles, skinMap, SkinProps } from './ButtonSkins'

export interface ButtonProps extends SkinProps, BaseButtonProps, WithStylesProps {
    icon?: Icons
    label: string
    loading?: boolean
    block?: boolean
}

export interface ButtonState {
    loading: boolean
}

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
            block,
            ...rest,
        } = this.props

        const skinStyles = skinMap[skin](theme)
        const sizeStyles = createSizeStyles(theme)
        const baseStyles = createBaseStyles(theme)

        const classes = css(
            baseStyles.button,
            skinStyles.button,
            type === 'primary' && skinStyles.primary,
            size === 'large' && sizeStyles.large,
            size === 'medium' && sizeStyles.medium,
            size === 'small' && sizeStyles.small,
            (this.state.loading || loading) && baseStyles.loading,
            block && baseStyles.block
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
