import { act, renderHook } from '@testing-library/react-hooks'

import { Step } from './Step'
import { getStepProps, useStepperState } from './useStepperState'

describe(`${getStepProps.name}`, () => {
  it(`should return a ${Step.name} component props object based on parameters`, () => {
    expect(getStepProps(0, 1)).toEqual({ hasConnector: false, status: 'completed' })
    expect(getStepProps(1, 1)).toEqual({ hasConnector: true, status: 'active' })
    expect(getStepProps(2, 1)).toEqual({ hasConnector: true, status: 'incompleted' })
  })
})

describe(`${useStepperState.name}`, () => {
  it(`should return a "getStepProps" function which returns a ${Step.name} component props object based on current Stepper state`, () => {
    const { result } = renderHook(() => useStepperState(1))
    expect(result.current.getStepProps(0)).toEqual({ hasConnector: false, status: 'completed' })
    expect(result.current.getStepProps(1)).toEqual({ hasConnector: true, status: 'active' })
    expect(result.current.getStepProps(2)).toEqual({ hasConnector: true, status: 'incompleted' })
  })
  it(`should return a "currentStep" attribute with the current step state`, () => {
    const { result } = renderHook(() => useStepperState(1))
    expect(result.current.currentStep).toEqual(1)
  })
  it(`should return a "setCurrentStep" function that sets the current step state`, () => {
    const { result } = renderHook(() => useStepperState())
    expect(result.current.currentStep).toEqual(0)
    act(() => result.current.setCurrentStep(2))
    expect(result.current.currentStep).toEqual(2)
  })
  it(`should return a "nextStep" function that sets the current step state to the next one`, () => {
    const { result } = renderHook(() => useStepperState())
    expect(result.current.currentStep).toEqual(0)
    act(() => result.current.nextStep())
    expect(result.current.currentStep).toEqual(1)
    act(() => result.current.nextStep())
    expect(result.current.currentStep).toEqual(2)
  })
  it(`should return a "previousStep" function that sets the current step state to the next one`, () => {
    const { result } = renderHook(() => useStepperState(2))
    expect(result.current.currentStep).toEqual(2)
    act(() => result.current.previousStep())
    expect(result.current.currentStep).toEqual(1)
    act(() => result.current.previousStep())
    act(() => result.current.previousStep())
    expect(result.current.currentStep).toEqual(-1)
  })
})
