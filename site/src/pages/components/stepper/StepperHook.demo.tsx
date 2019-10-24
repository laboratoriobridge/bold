import { Button, HFlow, Step, Stepper, useStepperState, VFlow } from 'bold-ui'
import React from 'react'

function StepperHookDemo() {
  const { getStepProps, nextStep, previousStep } = useStepperState(1)

  return (
    <VFlow>
      <Stepper>
        <Step {...getStepProps(0)}>Step 1</Step>
        <Step {...getStepProps(1)}>Step 2</Step>
        <Step {...getStepProps(2)}>Step 3</Step>
        <Step {...getStepProps(3)}>Step 4</Step>
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
