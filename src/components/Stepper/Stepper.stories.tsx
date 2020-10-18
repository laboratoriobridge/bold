import React from 'react'

import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'

import { Step } from './Step'
import { Stepper } from './Stepper'
import { useStepperState } from './useStepperState'

export default {
  title: 'Components/Stepper',
}

export const Default = () => (
  <Stepper>
    <Step status='completed' hasConnector={false}>
      Completed step
    </Step>
    <Step status='active'>Second and active step</Step>
    <Step>Some incompleted step</Step>
    <Step>Last and incompleted step</Step>
  </Stepper>
)

export const WithState = () => {
  const { getStepProps, nextStep, previousStep } = useStepperState()

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
