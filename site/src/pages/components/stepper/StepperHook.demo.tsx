import { Button, HFlow, Step, Stepper, useStepperState, VFlow } from 'bold-ui'
import React from 'react'

function StepperHookDemo() {
  const { getStepStatus, nextStep, previousStep } = useStepperState(1)

  return (
    <VFlow>
      <Stepper>
        <Step status={getStepStatus(0)} title='Step 1' />
        <Step status={getStepStatus(1)} title='Step 2' />
        <Step status={getStepStatus(2)} title='Step 3' />
        <Step status={getStepStatus(3)} title='Step 4' />
      </Stepper>

      <HFlow justifyContent='center'>
        <Button size='small' onClick={previousStep}>
          Previous
        </Button>
        <Button size='small' kind='primary' onClick={nextStep}>
          Next
        </Button>
      </HFlow>
    </VFlow>
  )
}

export default StepperHookDemo
