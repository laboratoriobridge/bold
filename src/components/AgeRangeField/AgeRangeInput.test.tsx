import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { AgeRangeField } from './AgeRangeField'
import { AgeRange, AgeRangeUnitEnum } from './model'

const emptyAgeRange: AgeRange = { unit: AgeRangeUnitEnum.DAYS, firstValue: undefined, secondValue: undefined }

describe('AgeRangeInput', () => {
  describe('', () => {})

  describe('onChange', () => {
    it("should call 'onChange' when the value of first input changes", () => {
      const onChange = jest.fn()
      const expectedAgeRange: AgeRange = { unit: AgeRangeUnitEnum.DAYS, firstValue: 10, secondValue: undefined }

      const { getByTestId } = render(<AgeRangeField onChange={onChange} value={emptyAgeRange} />)

      const input = getByTestId('age-range-first-input')
      expect(onChange).not.toHaveBeenCalled()

      fireEvent.change(input, { target: { value: '10' } })
      expect(onChange).toHaveBeenCalledWith(expectedAgeRange)
    })

    it("should call 'onChange' when the value of second input changes", () => {
      const onChange = jest.fn()
      const expectedAgeRange: AgeRange = { unit: AgeRangeUnitEnum.DAYS, firstValue: undefined, secondValue: 25 }

      const { getByTestId } = render(<AgeRangeField onChange={onChange} value={emptyAgeRange} />)

      const input = getByTestId('age-range-second-input')
      expect(onChange).not.toHaveBeenCalled()

      fireEvent.change(input, { target: { value: '25' } })
      expect(onChange).toHaveBeenCalledWith(expectedAgeRange)
    })

    it("should call 'onChange' when the value of unit changes", () => {
      const onChange = jest.fn()
      const expectedAgeRange: AgeRange = { unit: AgeRangeUnitEnum.YEARS, firstValue: null, secondValue: null }
      const { getByTestId } = render(<AgeRangeField onChange={onChange} value={emptyAgeRange} />)

      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)
      expect(onChange).not.toHaveBeenCalled()

      const yearsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.YEARS}`)
      fireEvent.click(yearsOption)

      expect(onChange).toHaveBeenCalledWith(expectedAgeRange)
    })
  })

  describe('Unit dropdown', () => {
    it('should show all unit options when the button is clicked', () => {
      const { getByTestId } = render(<AgeRangeField />)

      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)

      const daysOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.DAYS}`)
      expect(daysOption).not.toBeNull()

      const monthsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.MONTHS}`)
      expect(monthsOption).not.toBeNull()

      const yearsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.YEARS}`)
      expect(yearsOption).not.toBeNull()
    })

    it('should show only avaible unit options when the button is clicked', () => {
      const { getByTestId, queryByTestId } = render(
        <AgeRangeField value={emptyAgeRange} unitOptionsToExclude={[AgeRangeUnitEnum.YEARS]} />
      )

      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)

      const daysOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.DAYS}`)
      expect(daysOption).not.toBeNull()

      const monthsOption = getByTestId(`age-range-unit-option-${AgeRangeUnitEnum.MONTHS}`)
      expect(monthsOption).not.toBeNull()

      const yearsOption = queryByTestId(`age-range-unit-option-${AgeRangeUnitEnum.YEARS}`)
      expect(yearsOption).toBeNull()
    })
  })

  describe('onFocus and onBlur', () => {
    it("should call 'onFocus' and 'onBlur' when first input gets focus and it loses focus", () => {
      const onFocus = jest.fn()
      const onBlur = jest.fn()

      const { getByTestId } = render(<AgeRangeField onFocus={onFocus} onBlur={onBlur} value={emptyAgeRange} />)

      const input = getByTestId('age-range-first-input')
      expect(onFocus).not.toHaveBeenCalled()
      expect(onBlur).not.toHaveBeenCalled()

      fireEvent.focus(input)
      fireEvent.blur(input)

      expect(onFocus).toHaveBeenCalled()
      expect(onBlur).toHaveBeenCalled()
    })

    it("should call 'onFocus' and 'onBlur' when second input gets focus and it loses focus", () => {
      const onFocus = jest.fn()
      const onBlur = jest.fn()
      const { getByTestId } = render(<AgeRangeField onFocus={onFocus} onBlur={onBlur} value={emptyAgeRange} />)

      const input = getByTestId('age-range-second-input')
      expect(onFocus).not.toHaveBeenCalled()
      expect(onBlur).not.toHaveBeenCalled()

      fireEvent.focus(input)
      fireEvent.blur(input)

      expect(onFocus).toHaveBeenCalled()
      expect(onBlur).toHaveBeenCalled()
    })
  })
})
