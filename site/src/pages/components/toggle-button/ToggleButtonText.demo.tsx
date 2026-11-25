import { HFlow, Text, ToggleButton, ToggleButtonGroup } from 'bold-ui'
import React from 'react'

function ToggleButtonText() {
  return (
    <HFlow alignItems='center'>
      <Text fontWeight='bold'>Question?</Text>
      <ToggleButtonGroup defaultValue={['yes']} aria-label='Question'>
        <ToggleButton value='yes'>Yes</ToggleButton>
        <ToggleButton value='no'>No</ToggleButton>
      </ToggleButtonGroup>
    </HFlow>
  )
}

export default ToggleButtonText
