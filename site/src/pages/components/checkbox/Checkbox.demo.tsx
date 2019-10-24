import { Checkbox, HFlow } from 'bold-ui'
import React from 'react'

function CheckboxDemo() {
  return (
    <HFlow>
      <Checkbox label='Beer' />
      <Checkbox label='Chocolate' disabled />
      <Checkbox label='Indeterminate State Example' indeterminate />
    </HFlow>
  )
}

export default CheckboxDemo
