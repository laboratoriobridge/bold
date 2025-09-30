import { act, renderHook } from '@testing-library/react-hooks'

import { Step } from './Step'
import { getStepStatus, useStepperState } from './useStepperState'

describe(`${getStepStatus.name}`, () => {
  it(`should return a ${Step.name} component status object based on parameters`, () => {
    expect(getStepStatus(0, 1)).toEqual('completed')
    expect(getStepStatus(1, 1)).toEqual('active')
    expect(getStepStatus(2, 1)).toEqual('incompleted')
  })
})

describe(`${useStepperState.name}`, () => {
  it(`should return a "getStepStatus" function which returns a ${Step.name} component status based on current Stepper state`, () => {
    const { result } = renderHook(() => useStepperState(1))
    expect(result.current.getStepStatus(0)).toEqual('completed')
    expect(result.current.getStepStatus(1)).toEqual('active')
    expect(result.current.getStepStatus(2)).toEqual('incompleted')
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
