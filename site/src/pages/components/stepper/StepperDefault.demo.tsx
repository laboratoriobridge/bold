import { Step, Stepper } from 'bold-ui'
import React from 'react'

function StepperDefaultDemo() {
  return (
    <Stepper>
      <Step status='completed' title='Completed step' />
      <Step status='active' title='Second and active step' />
      <Step title='Some incompleted step' />
      <Step title='Last and incompleted step' />
    </Stepper>
  )
}

export default StepperDefaultDemo
