import { Interpolation } from 'emotion'
import * as React from 'react'

import { useStyles } from '../../../../styles'
import { Omit } from '../../../../util'
import { ButtonBase, ButtonBaseProps } from '../ButtonBase'

import { createBaseStyles, createSizeStyles, skinMap, SkinProps } from './ButtonSkins'

export interface ButtonProps extends SkinProps, Omit<ButtonBaseProps, 'style'> {
    loading?: boolean
    block?: boolean
    style?: Interpolation

    /**
     * @deprecated Use the children props instead.
     */
    label?: string
}

export const Button = (props: ButtonProps) => {
    const {
        loading,
        block,
        style,
        skin,
        size,
        kind,
        children,
        label,
        ...rest
    } = props

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const onLoadingChange = (value: boolean) => setIsLoading(value)

    const { theme, css } = useStyles()
    const skinStyles = skinMap[skin](theme)
    const sizeStyles = createSizeStyles(theme)
    const baseStyles = createBaseStyles(theme)

    const classes = css(
        baseStyles.button,
        skinStyles.button,
        kind === 'primary' && skinStyles.primary,
        kind === 'danger' && skinStyles.danger,
        size === 'large' && sizeStyles.large,
        size === 'medium' && sizeStyles.medium,
        size === 'small' && sizeStyles.small,
        (isLoading || loading) && baseStyles.loading,
        props.disabled && baseStyles.disabled,
        block && baseStyles.block,
        style
    )

    React.useEffect(() => {
        if (label && process.env.NODE_ENV !== 'production') {
            // tslint:disable-next-line no-console
            console.warn(`Button: the 'label' prop is deprecated. Use children prop instead.`)
        }
    }, [])

    return (
        <ButtonBase
            className={classes}
            onLoadingChange={onLoadingChange}
            data-loading={isLoading ? true : undefined}
            {...rest}
        >
            <span>
                {label ? label : children}
            </span>
        </ButtonBase>
    )
}

Button.defaultProps = {
    kind: 'normal',
    skin: 'default',
    size: 'medium',
} as Partial<ButtonProps>
