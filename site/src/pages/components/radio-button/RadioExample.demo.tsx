import { HFlow, Radio } from 'bold-ui'
import React from 'react'

function RadioExample() {
  return (
    <HFlow>
      <Radio name='default' label='Whiskey' value='whiskey' />
      <Radio name='default' label='Coconut water' value='coconut water' />
      <Radio name='disabled' label='Whatever' value='whatever' disabled />
    </HFlow>
  )
}

export default RadioExample
