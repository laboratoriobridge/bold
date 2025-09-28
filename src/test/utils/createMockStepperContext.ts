import { StepperContextValue } from '../../components/Stepper/useStepperContext'

export function createMockStepperContext(overrides: Partial<StepperContextValue> = {}): StepperContextValue {
  return {
    direction: 'horizontal',
    gap: undefined,
    stepCounterRef: { current: 0 },
    registerStep: () => 0,
    getNextStepStatus: () => 'incompleted',
    ...overrides,
  }
}
