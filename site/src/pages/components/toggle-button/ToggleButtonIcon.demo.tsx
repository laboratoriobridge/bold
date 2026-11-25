import { ToggleButton, ToggleButtonGroup } from 'bold-ui'
import React from 'react'

function ToggleButtonIcon() {
  return (
    <ToggleButtonGroup multiple defaultValue={['bold']} aria-label='Text formatting'>
      <ToggleButton value='bold' icon='bold' aria-label='Bold' />
      <ToggleButton value='italic' icon='italic' aria-label='Italic' />
      <ToggleButton value='underline' icon='underline' aria-label='Underline' />
      <ToggleButton value='strikethrough' icon='strikethrough' aria-label='Strikethrough' />
    </ToggleButtonGroup>
  )
}

export default ToggleButtonIcon
