import React, { MouseEvent, useState } from 'react'

import { useIsMounted } from '../../../hooks/useIsMounted'
import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util'
import { ButtonBase, ButtonBaseProps } from '../ButtonBase'

import { createBaseStyles, createSizeStyles, skinMap, SkinProps } from './ButtonSkins'

export interface ButtonProps extends SkinProps, Omit<ButtonBaseProps, 'style'> {
  loading?: boolean
  block?: boolean
  style?: ExternalStyles
}

export function Button(props: ButtonProps) {
  const { loading, block, style, skin, size, kind, onClick, children, ...rest } = props

  const isMounted = useIsMounted()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onLoadingChange = (value: boolean) => {
    if (isMounted.current) {
      setIsLoading(value)
    }
  }
  const isReallyLoading = isLoading || loading

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
    isReallyLoading && baseStyles.loading,
    props.disabled && baseStyles.disabled,
    block && baseStyles.block,
    style
  )

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isReallyLoading) {
      return onClick && onClick(e)
    }
  }

  return (
    <ButtonBase
      className={classes}
      onLoadingChange={onLoadingChange}
      data-loading={isLoading ? true : undefined}
      onClick={handleClick}
      {...rest}
    >
      <span>{children}</span>
    </ButtonBase>
  )
}

Button.defaultProps = {
  kind: 'normal',
  skin: 'default',
  size: 'medium',
} as Partial<ButtonProps>
