import React from 'react'

import { number, select } from '@storybook/addon-knobs'
import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { VFlow } from '../VFlow'

import { Step } from './Step'
import { Stepper, StepperDirection } from './Stepper'
import { useStepperState } from './useStepperState'

export default {
  title: 'Components/Stepper',
}

const directions: { [key in StepperDirection]: StepperDirection } = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

export const Horizontal = () => {
  const gap = number('gap', undefined)

  return (
    <Stepper gap={gap}>
      <Step status='completed' title='Completed step' />
      <Step status='active' title='Second and active step' />
      <Step title='Some incompleted step' />
      <Step status='inactive' title='Last and inactive step' />
    </Stepper>
  )
}
export const Vertical = () => {
  const gap = number('gap', undefined)

  return (
    <div style={{ height: '400px' }}>
      <Stepper direction='vertical' gap={gap}>
        <Step status='completed' title='Completed step' />
        <Step status='active' title='Second and active step' />
        <Step title='Some incompleted step' />
        <Step status='inactive' title='Last and inactive step' />
      </Stepper>
    </div>
  )
}

export const Components = () => {
  const direction = select<StepperDirection>('direction', directions, 'horizontal')
  const gap = number('gap', undefined)

  return (
    <Stepper direction={direction} gap={gap}>
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

export const WithState = () => {
  const { getStepStatus, nextStep, previousStep } = useStepperState()
  const direction = select<StepperDirection>('direction', directions, 'horizontal')

  return (
    <VFlow>
      <Stepper direction={direction}>
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
