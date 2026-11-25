import React, { useContext, useState } from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'
import { Icon, IconImage } from '../Icon'
import { Tooltip } from '../Tooltip'

import { ToggleButtonGroupContext } from './ToggleButtonGroupContext'
import { createBaseStyles, createSkinStyles, ToggleButtonColor, ToggleButtonSkin } from './ToggleButtonSkins'

interface ToggleButtonBaseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'onChange' | 'value' | 'color' | 'children'> {
  /**
   * Identifies the button inside a `ToggleButtonGroup`.
   */
  value?: string

  /**
   * Whether the button is selected (controlled).
   */
  selected?: boolean

  /**
   * Whether the button is initially selected (uncontrolled).
   */
  defaultSelected?: boolean

  /**
   * Called when the user toggles the button. Not called for buttons controlled by a `ToggleButtonGroup`
   * (use the group's `onChange` instead).
   */
  onChange?(selected: boolean): void

  /**
   * Visual style. Use the same skin for every button of an action group.
   * Inherited from the `ToggleButtonGroup` when not informed.
   */
  skin?: ToggleButtonSkin

  /**
   * Color of the selected state. Use only one color per action group.
   * Inherited from the `ToggleButtonGroup` when not informed.
   */
  color?: ToggleButtonColor

  /**
   * Tooltip text. Defaults to `aria-label` on icon-only buttons.
   */
  tooltip?: string

  style?: ExternalStyles
}

export interface ToggleButtonTextProps extends ToggleButtonBaseProps {
  /**
   * The label must be the same on every state.
   */
  children: React.ReactNode
  icon?: IconImage

  /**
   * Icon used when the button is selected. Falls back to `icon`.
   */
  selectedIcon?: IconImage
}

export interface ToggleButtonIconProps extends ToggleButtonBaseProps {
  icon: IconImage

  /**
   * Icon used when the button is selected. Falls back to `icon`. Prefer filled icons.
   */
  selectedIcon?: IconImage
  children?: undefined

  /**
   * Icon-only buttons must have a descriptive label (e.g. "Bold", not "B").
   */
  'aria-label': string
}

export type ToggleButtonProps = ToggleButtonTextProps | ToggleButtonIconProps

export function ToggleButton(props: ToggleButtonProps) {
  const {
    value,
    selected: selectedProp,
    defaultSelected,
    onChange,
    onClick,
    skin: skinProp,
    color: colorProp,
    tooltip,
    icon,
    selectedIcon,
    disabled: disabledProp,
    style,
    children,
    ...rest
  } = props

  const group = useContext(ToggleButtonGroupContext)
  const isGrouped = !!group && value !== undefined

  const [innerSelected, setInnerSelected] = useState(!!defaultSelected)
  const selected = isGrouped ? group.isSelected(value) : selectedProp ?? innerSelected

  const skin = skinProp ?? group?.skin ?? 'outline'
  const color = colorProp ?? group?.color ?? 'blue'
  const disabled = disabledProp ?? group?.disabled

  const { theme, css } = useStyles()
  const baseStyles = createBaseStyles(theme, color)
  const skinStyles = createSkinStyles(theme, skin, color)

  const iconOnly = !!icon && (children === undefined || children === null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)

    if (e.defaultPrevented) {
      return
    }

    if (isGrouped) {
      group.toggle(value)
    } else {
      if (selectedProp === undefined) {
        setInnerSelected(!selected)
      }
      onChange?.(!selected)
    }
  }

  const classes = css(baseStyles.button, skinStyles.button, iconOnly && baseStyles.iconOnly, style)
  const currentIcon = selected && selectedIcon ? selectedIcon : icon

  const button = (
    <button
      type='button'
      aria-pressed={selected}
      value={value}
      // Disabled buttons are removed from the tab order.
      tabIndex={disabled ? -1 : undefined}
      {...rest}
      disabled={disabled}
      className={classes}
      onClick={handleClick}
    >
      {currentIcon && <Icon icon={currentIcon} size={1} style={baseStyles.icon} />}
      {typeof children === 'string' ? (
        <span className={css(baseStyles.text)} data-text={children}>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )

  const tooltipText = tooltip ?? (iconOnly ? props['aria-label'] : undefined)

  return tooltipText ? <Tooltip text={tooltipText}>{button}</Tooltip> : button
}
