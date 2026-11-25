import React, { CSSProperties, useCallback, useMemo, useState } from 'react'

import { useRovingTabIndex } from '../../hooks/useRovingTabIndex'
import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'

import { ToggleButtonGroupContext, ToggleButtonGroupContextValue } from './ToggleButtonGroupContext'
import { ToggleButtonColor, ToggleButtonSkin } from './ToggleButtonSkins'

export interface ToggleButtonGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'onChange' | 'defaultValue'> {
  /**
   * Whether more than one button can be selected at the same time.
   */
  multiple?: boolean

  /**
   * Values of the selected buttons (controlled).
   */
  value?: string[]

  /**
   * Values of the initially selected buttons (uncontrolled).
   */
  defaultValue?: string[]

  onChange?(value: string[]): void

  /**
   * Visual style of all buttons of the group.
   */
  skin?: ToggleButtonSkin

  /**
   * Color of the selected state of all buttons of the group.
   */
  color?: ToggleButtonColor

  disabled?: boolean
  style?: ExternalStyles
}

const emptyValue: string[] = []

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  const { multiple, value, defaultValue, onChange, skin, color, disabled, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const [innerValue, setInnerValue] = useState<string[]>(defaultValue ?? emptyValue)
  const currentValue = value ?? innerValue

  const toggle = useCallback(
    (buttonValue: string) => {
      const isSelected = currentValue.includes(buttonValue)

      let next: string[]
      if (multiple) {
        next = isSelected ? currentValue.filter((v) => v !== buttonValue) : [...currentValue, buttonValue]
      } else {
        next = isSelected ? [] : [buttonValue]
      }

      if (value === undefined) {
        setInnerValue(next)
      }
      onChange?.(next)
    },
    [currentValue, multiple, onChange, value]
  )

  const context = useMemo<ToggleButtonGroupContextValue>(
    () => ({
      skin,
      color,
      disabled,
      isSelected: (buttonValue) => currentValue.includes(buttonValue),
      toggle,
    }),
    [skin, color, disabled, currentValue, toggle]
  )

  const getItems = useCallback(
    (root: HTMLElement) => Array.from(root.querySelectorAll<HTMLElement>('button[aria-pressed]:not(:disabled)')),
    []
  )

  const rootRef = useRovingTabIndex({
    getItems,
    nextKeys: ['ArrowRight'],
    prevKeys: ['ArrowLeft'],
    wrapAround: true,
  })

  return (
    <ToggleButtonGroupContext.Provider value={context}>
      <div ref={rootRef} role='group' className={css(classes.root, style)} {...rest} />
    </ToggleButtonGroupContext.Provider>
  )
}

const createStyles = () => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: '0.5rem', // minimum spacing between touch targets (WCAG 2.5.8)
  } as CSSProperties,
})
