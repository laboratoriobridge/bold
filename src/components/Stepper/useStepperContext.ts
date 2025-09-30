import { createContext, useContext } from 'react'
import { StepperDirection } from './Stepper'
import { StepStatus } from './Step'

export interface StepperContextValue {
  direction: StepperDirection
  gap: number | undefined
  getNextStepStatus: (currentIndex: number) => StepStatus | undefined
  incrementStep: () => number
}

const StepperContext = createContext<StepperContextValue | undefined>(undefined)

export const StepperContextProvider = StepperContext.Provider

export function useStepperContext() {
  const context = useContext(StepperContext)

  if (!context) {
    throw new Error(
      'Stepper subcomponents (like Step, StepLabel, StepConnector and StepContent) must be used inside <Stepper>'
    )
  }

  return context
}
