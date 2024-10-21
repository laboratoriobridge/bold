import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { AgeRangeField } from './AgeRangeField'
import { AgeRange, AgeRangeUnitEnum } from './model'

const emptyAgeRange: AgeRange = { unit: AgeRangeUnitEnum.DAYS }

const START_INPUT_TEST_ID = 'age-range-start-input'
const END_INPUT_TEST_ID = 'age-range-end-input'

describe('AgeRangeInput', () => {
  it('should throw an error when an excluded option is selected', () => {
    expect(() =>
      render(<AgeRangeField value={emptyAgeRange} unitOptionsToExclude={[AgeRangeUnitEnum.DAYS]} />)
    ).toThrowError("You selected Days, but it's an excluded unit option defined in 'unitOptionsToExclude' prop.")
  })

  it('should use the given name to the inputs', () => {
    const { getByTestId } = render(<AgeRangeField name='test-name' value={emptyAgeRange} />)

    const startInput = getByTestId(START_INPUT_TEST_ID)
    expect(startInput['name']).toEqual('test-name.start')

    const endInput = getByTestId(END_INPUT_TEST_ID)
    expect(endInput['name']).toEqual('test-name.end')
  })

  it('should use the given name to the inputs', () => {
    const { getByTestId } = render(<AgeRangeField name='test-name' value={emptyAgeRange} />)

    const startInput = getByTestId(START_INPUT_TEST_ID)
    expect(startInput['name']).toEqual('test-name.start')

    const endInput = getByTestId(END_INPUT_TEST_ID)
    expect(endInput['name']).toEqual('test-name.end')
  })

  describe('onChange', () => {
    it("should call 'onChange' when the value of start input changes", () => {
      const onChange = jest.fn()
      const expectedAgeRange: AgeRange = { unit: AgeRangeUnitEnum.DAYS, start: 10 }

      const { getByTestId } = render(<AgeRangeField onChange={onChange} value={emptyAgeRange} />)

      const input = getByTestId(START_INPUT_TEST_ID)
      expect(onChange).not.toHaveBeenCalled()

      fireEvent.change(input, { target: { value: '10' } })
      expect(onChange).toHaveBeenCalledWith(expectedAgeRange)
    })

    it("should call 'onChange' when the value of end input changes", () => {
      const onChange = jest.fn()
      const expectedAgeRange: AgeRange = { unit: AgeRangeUnitEnum.DAYS, end: 25 }

      const { getByTestId } = render(<AgeRangeField onChange={onChange} value={emptyAgeRange} />)

      const input = getByTestId(END_INPUT_TEST_ID)
      expect(onChange).not.toHaveBeenCalled()

      fireEvent.change(input, { target: { value: '25' } })
      expect(onChange).toHaveBeenCalledWith(expectedAgeRange)
    })

    it("should call 'onChange' when the value of unit changes", async () => {
      const onChange = jest.fn()
      const expectedAgeRange: AgeRange = { unit: AgeRangeUnitEnum.YEARS }
      const { getByTestId } = render(<AgeRangeField onChange={onChange} value={emptyAgeRange} />)

      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)

      expect(onChange).not.toHaveBeenCalled()

      const yearsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.YEARS}`)
      fireEvent.click(yearsOption)

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(expectedAgeRange)
      })
    })

    it('should ignore non-numeric values in start input', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(<AgeRangeField name='test-name' value={emptyAgeRange} onChange={onChange} />)

      const startInput = getByTestId(START_INPUT_TEST_ID)
      fireEvent.change(startInput, { target: { value: 'abc' } })

      expect(onChange).toHaveBeenCalledWith(emptyAgeRange)
    })

    it('should ignore non-numeric values in end input', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(<AgeRangeField name='test-name' value={emptyAgeRange} onChange={onChange} />)

      const endInput = getByTestId(END_INPUT_TEST_ID)
      fireEvent.change(endInput, { target: { value: 'abc' } })

      expect(onChange).toHaveBeenCalledWith(emptyAgeRange)
    })
  })

  describe('Unit dropdown', () => {
    it('should show all unit options when the button is clicked', async () => {
      const { getByTestId } = render(<AgeRangeField />)
      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)

      await waitFor(() => {
        const daysOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.DAYS}`)
        expect(daysOption).not.toBeNull()

        const monthsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.MONTHS}`)
        expect(monthsOption).not.toBeNull()

        const yearsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.YEARS}`)
        expect(yearsOption).not.toBeNull()
      })
    })

    it('should show only avaible unit options when the button is clicked', async () => {
      const { getByTestId, queryByTestId } = render(
        <AgeRangeField value={emptyAgeRange} unitOptionsToExclude={[AgeRangeUnitEnum.YEARS]} />
      )

      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)

      await waitFor(() => {
        const daysOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.DAYS}`)
        expect(daysOption).not.toBeNull()

        const monthsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.MONTHS}`)
        expect(monthsOption).not.toBeNull()

        const yearsOption = queryByTestId(`age-range-unit-option-${AgeRangeUnitEnum.YEARS}`)
        expect(yearsOption).toBeNull()
      })
    })
  })

  describe('onFocus and onBlur', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    // https://testing-library.com/docs/using-fake-timers
    afterEach(() => {
      jest.runOnlyPendingTimers()
      jest.useRealTimers()
    })

    it("should call 'onFocus' and 'onBlur' when start input gets focus and it loses focus", async () => {
      const onFocus = jest.fn()
      const onBlur = jest.fn()

      const { getByTestId } = render(<AgeRangeField onFocus={onFocus} onBlur={onBlur} value={emptyAgeRange} />)

      const input = getByTestId(START_INPUT_TEST_ID)
      expect(onFocus).not.toHaveBeenCalled()
      expect(onBlur).not.toHaveBeenCalled()

      fireEvent.focus(input)
      fireEvent.blur(input)

      jest.runAllTimers()

      expect(onFocus).toHaveBeenCalled()
      expect(onBlur).toHaveBeenCalled()
    })

    it("should call 'onFocus' and 'onBlur' when end input gets focus and it loses focus", async () => {
      const onFocus = jest.fn()
      const onBlur = jest.fn()
      const { getByTestId } = render(<AgeRangeField onFocus={onFocus} onBlur={onBlur} value={emptyAgeRange} />)

      const input = getByTestId(END_INPUT_TEST_ID)
      expect(onFocus).not.toHaveBeenCalled()
      expect(onBlur).not.toHaveBeenCalled()

      fireEvent.focus(input)
      fireEvent.blur(input)

      jest.runAllTimers()

      expect(onFocus).toHaveBeenCalled()
      expect(onBlur).toHaveBeenCalled()
    })
  })
})
