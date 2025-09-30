import { StepperContextValue } from '../../components/Stepper/useStepperContext'

export function createMockStepperContext(overrides: Partial<StepperContextValue> = {}): StepperContextValue {
  return {
    direction: 'horizontal',
    gap: undefined,
    incrementStep: () => 0,
    getNextStepStatus: () => 'incompleted',
    ...overrides,
  }
}
