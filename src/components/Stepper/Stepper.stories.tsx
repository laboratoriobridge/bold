import React from 'react'

import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'

import { Step } from './Step'
import { Stepper, StepperDirection } from './Stepper'
import { useStepperState } from './useStepperState'

const directions: { [key in StepperDirection]: StepperDirection } = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    direction: {
      control: 'select',
      options: Object.keys(directions),
    },
  },
}

export const Horizontal = (args) => {
  return (
    <Stepper {...args}>
      <Step status='completed' title='Completed step' />
      <Step status='active' title='Second and active step' />
      <Step title='Some incompleted step' />
      <Step status='inactive' title='Last and inactive step' />
    </Stepper>
  )
}

export const Vertical = (args) => {
  return (
    <div style={{ height: '400px' }}>
      <Stepper {...args}>
        <Step status='completed' title='Completed step' />
        <Step status='active' title='Second and active step' />
        <Step title='Some incompleted step' />
        <Step status='inactive' title='Last and inactive step' />
      </Stepper>
    </div>
  )
}

Vertical.args = {
  direction: 'vertical',
}

export const Components = (args) => {
  return (
    <Stepper {...args}>
      <Step status='completed' title='Completed step' subtitle='Optional'>
        <VFlow vSpacing={0.5}>
          <div>Subitem A</div>
          <div>Subitem B</div>
          <div>Subitem C</div>
        </VFlow>
      </Step>
      <Step status='active' title='Second and active step' subtitle='Optional'>
        <VFlow vSpacing={0.5}>
          <div>Subitem A</div>
          <div>Subitem B</div>
          <div>Subitem C</div>
          <div>Subitem D</div>
        </VFlow>
      </Step>
      <Step title='Some incompleted step' />
      <Step status='inactive' title='Last and inactive step' />
    </Stepper>
  )
}

export const WithState = (args) => {
  const { getStepStatus, nextStep, previousStep } = useStepperState()

  return (
    <VFlow>
      <Stepper {...args}>
        <Step title='Step 1' status={getStepStatus(0)} />
        <Step title='Step 2' status={getStepStatus(1)} />
        <Step title='Step 3' status={getStepStatus(2)} />
        <Step title='Step 4' status={getStepStatus(3)} />
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
