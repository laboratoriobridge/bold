import { HFlow, ToggleButton } from 'bold-ui'
import React from 'react'

function ToggleButtonColors() {
  return (
    <HFlow>
      <ToggleButton color='blue' defaultSelected>
        Blue
      </ToggleButton>
      <ToggleButton color='red' defaultSelected>
        Red
      </ToggleButton>
      <ToggleButton color='green' defaultSelected>
        Green
      </ToggleButton>
    </HFlow>
  )
}

export default ToggleButtonColors
