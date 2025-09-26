import { createContext, MutableRefObject, useContext } from 'react'
import { StepperDirection } from './Stepper'
import { StepStatus } from './Step'

export interface StepperContextValue {
  direction: StepperDirection
  gap: number | undefined
  stepCounterRef: MutableRefObject<number>
  getNextStepStatus: (currentIndex: number) => StepStatus | undefined
  registerStep: () => number
}

const StepperContext = createContext<StepperContextValue | undefined>(undefined)

export const StepperContextProvider = StepperContext.Provider

export function useStepperContext() {
  const context = useContext(StepperContext)

  if (!context) {
    throw new Error('Stepper subcomponents (like Step, StepConnector) must be used inside <Stepper>')
  }

  return context
}
