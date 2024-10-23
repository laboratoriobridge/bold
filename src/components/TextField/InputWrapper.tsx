import React, { CSSProperties, Ref } from 'react'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { Button, ButtonProps } from '../Button'
import { Icon, IconImage } from '../Icon/Icon'

export interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconImage
  iconPosition?: 'left' | 'right'
  iconAriaLabel?: string
  iconDisabled?: boolean
  clearVisible?: boolean
  onIconClick?: ButtonProps['onClick']
  onClear?(e: React.MouseEvent<HTMLButtonElement>): any
}

export const InputWrapper = React.forwardRef((props: InputWrapperProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    icon,
    iconDisabled,
    iconAriaLabel,
    onIconClick,
    clearVisible,
    onClear,
    className,
    iconPosition,
    ...rest
  } = props
  const internalIconPosition = iconPosition || (onIconClick ? 'right' : 'left')
  const { classes, css } = useStyles(createStyles, {
    icon,
    iconPosition: internalIconPosition,
    clearVisible,
    onIconClick,
  })
  const locale = useLocale()

  const iconBoxClasses = css(
    classes.iconWrapper,
    internalIconPosition === 'left' && classes.iconLeft,
    internalIconPosition === 'right' && classes.iconRight
  )

  return (
    <div ref={ref} className={css(classes.wrapper, className)} {...rest}>
      {children}

      {clearVisible && (
        <span
          role='button'
          title={locale.input.clear}
          tabIndex={-1}
          onClick={onClear}
          className={classes.clearButton}
          aria-label={iconAriaLabel}
        >
          <Icon size={1.5} icon='timesDefault' />
        </span>
      )}

      {icon && (
        <span className={iconBoxClasses}>
          {onIconClick ? (
            <Button
              size='small'
              skin='ghost'
              tabIndex={-1}
              onClick={onIconClick}
              style={classes.icon}
              disabled={iconDisabled}
              aria-label={iconAriaLabel}
            >
              <Icon icon={icon} />
            </Button>
          ) : (
            <Icon icon={icon} style={classes.icon} aria-label={iconAriaLabel} />
          )}
        </span>
      )}
    </div>
  )
})

InputWrapper.defaultProps = {
  iconDisabled: false,
  clearVisible: false,
  onClear: () => null,
} as Partial<InputWrapperProps>

const createStyles = (theme: Theme, { icon, iconPosition, clearVisible, onIconClick }: InputWrapperProps) => {
  const clickable = typeof icon !== 'string' || onIconClick

  const paddingLeft =
    (icon && iconPosition === 'left' && clickable && '3rem') ||
    (icon && iconPosition === 'left' && '2.5rem') ||
    undefined

  const paddingRight =
    (icon && iconPosition === 'right' && clearVisible && clickable && '4.5rem') ||
    (icon && iconPosition === 'right' && clearVisible && '4rem') ||
    (icon && iconPosition === 'right' && clickable && '3rem') ||
    (icon && iconPosition === 'right' && '2.5rem') ||
    (clearVisible && '2rem') ||
    undefined

  return {
    wrapper: {
      position: 'relative',
      input: {
        paddingLeft,
        paddingRight,
      },
    } as CSSProperties,
    clearButton: {
      position: 'absolute',
      right: icon && iconPosition === 'right' ? (clickable && '2.5rem') || '2rem' : 1,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      height: '100%',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 0,
      color: theme.pallete.text.secondary,
      padding: '1px 6px',
      '&:hover': {
        color: theme.pallete.status.danger.main,
      },
    } as CSSProperties,
    iconWrapper: {
      position: 'absolute',
      backgroundColor: clickable ? theme.pallete.gray.c90 : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.25rem',
      width: '2.5rem',
      top: 1,
      bottom: 1,
    } as CSSProperties,
    iconLeft: {
      left: 1,
    } as CSSProperties,
    iconRight: {
      right: 1,
    } as CSSProperties,
    icon: {
      borderRadius: 'inherit',
      '&:focus': {
        boxShadow: 'none',
      },
    } as CSSProperties,
  }
}
