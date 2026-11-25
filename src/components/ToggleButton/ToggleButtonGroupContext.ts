import React from 'react'

import { ToggleButtonColor, ToggleButtonSkin } from './ToggleButtonSkins'

export interface ToggleButtonGroupContextValue {
  skin?: ToggleButtonSkin
  color?: ToggleButtonColor
  disabled?: boolean
  isSelected(value: string): boolean
  toggle(value: string): void
}

export const ToggleButtonGroupContext = React.createContext<ToggleButtonGroupContextValue | null>(null)
