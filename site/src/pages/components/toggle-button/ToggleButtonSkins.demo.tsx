import { ToggleButton, ToggleButtonGroup, VFlow } from 'bold-ui'
import React from 'react'

function ToggleButtonSkins() {
  return (
    <VFlow>
      <ToggleButtonGroup skin='outline' defaultValue={['b']} aria-label='Outline'>
        <ToggleButton value='a'>Button</ToggleButton>
        <ToggleButton value='b'>Button</ToggleButton>
        <ToggleButton value='c' disabled>
          Button
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup skin='ghost' defaultValue={['b']} aria-label='Ghost'>
        <ToggleButton value='a'>Button</ToggleButton>
        <ToggleButton value='b'>Button</ToggleButton>
        <ToggleButton value='c' disabled>
          Button
        </ToggleButton>
      </ToggleButtonGroup>
    </VFlow>
  )
}

export default ToggleButtonSkins
