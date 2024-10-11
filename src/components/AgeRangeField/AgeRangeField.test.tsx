import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { AgeRangeField } from './AgeRangeField'
import { AgeRangeUnitEnum } from './model'

describe('AgeRangeField', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<AgeRangeField label='My label' />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with value', () => {
      const { container } = render(
        <AgeRangeField label='My label' value={{ firstValue: 11, secondValue: 20, unit: AgeRangeUnitEnum.DAYS }} />
      )
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with placeholders', () => {
      const { container } = render(
        <AgeRangeField label='My label' placeholders={{ first: 'first value', second: 'second value' }} />
      )
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<AgeRangeField disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<AgeRangeField invalid />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with error', () => {
      const { container } = render(<AgeRangeField error='Error' />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with required', () => {
      const { container } = render(<AgeRangeField required />)
      expect(container).toMatchSnapshot()
    })

    it('should accept style prop', () => {
      const { container } = render(<AgeRangeField style={{ color: 'pink', backgroundColor: 'yellow' }} />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when unit dropdown is clicked', () => {
      const { container, getByTestId } = render(<AgeRangeField />)
      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when only one unit option is avaliable', () => {
      const { container, getByTestId } = render(
        <AgeRangeField
          value={{ unit: AgeRangeUnitEnum.DAYS }}
          unitOptionsToExclude={[AgeRangeUnitEnum.MONTHS, AgeRangeUnitEnum.YEARS]}
        />
      )
      const button = getByTestId('age-range-unit-button')
      fireEvent.click(button)
      expect(container).toMatchSnapshot()
    })
  })
})
