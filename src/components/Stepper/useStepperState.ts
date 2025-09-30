import { useState } from 'react'

import { StepStatus } from './Step'

export function useStepperState(initialCurrStep = 0) {
  const [currentStep, setCurrentStep] = useState(initialCurrStep)

  const nextStep = () => setCurrentStep((step) => step + 1)
  const previousStep = () => setCurrentStep((step) => step - 1)

  return {
    getStepStatus: (step: number) => getStepStatus(step, currentStep),
    currentStep,
    setCurrentStep,
    nextStep,
    previousStep,
  }
}

/**
 * Create a StepProps properties object to pass to a Step component, based on its index and current Stepper state.
 *
 * @param step The step index that will receive the props.
 * @param currentActiveStep The current active stepper step.
 */
export function getStepStatus(step: number, currentActiveStep: number): StepStatus {
  return (step < currentActiveStep && 'completed') || (step > currentActiveStep && 'incompleted') || 'active'
}
