import React = require('react')
import { fireEvent, render } from 'react-testing-library'

import { RangePickerCalendar } from './RangePickerCalendar'

const createComponent = (props?: RangePickerCalendar) => (
    <RangePickerCalendar
        onChange={props.onChange}
        getValues={props.getValues}
    />
)

describe('[Calendar][RangePicker]', () => {

    it('Should initialize with null values', () => {
        let init
        let final
        const { container } = render(createComponent({
            getValues: (initialDate: Date, finalDate: Date) => {
                init = initialDate
                final = finalDate
            },
        }))

        expect(init).toBeNull()
        expect(final).toBeNull()
    })

    it('Should update values on click', () => {
        let init: Date
        let final: Date
        const onChangeSpy = jest.fn((initialDate: Date, finalDate: Date) => {
            init = initialDate
            final = finalDate
        })
        const { getByText } = render(createComponent({
            getValues: (initialDate: Date, finalDate: Date) => {
                init = initialDate
                final = finalDate
            },
            onChange: onChangeSpy,
        }))

        expect(init).toBeNull()
        expect(final).toBeNull()

        fireEvent.click(getByText('10'))

        expect(init.getDate()).toBe(10)
        expect(onChangeSpy).toBeCalledTimes(1)

        fireEvent.click(getByText('20'))

        expect(final.getDate()).toBe(20)
        expect(onChangeSpy).toBeCalledTimes(2)
    })

    it('Should invert values case user select a final date less than the initial date', () => {
        let init: Date
        let final: Date
        const onChangeSpy = jest.fn((initialDate: Date, finalDate: Date) => {
            init = initialDate
            final = finalDate
        })
        const { getByText } = render(createComponent({
            getValues: (initialDate: Date, finalDate: Date) => {
                init = initialDate
                final = finalDate
            },
            onChange: onChangeSpy,
        }))

        expect(init).toBeNull()
        expect(final).toBeNull()

        fireEvent.click(getByText('10'))

        expect(init.getDate()).toBe(10)
        expect(onChangeSpy).toBeCalledTimes(1)

        fireEvent.click(getByText('5'))

        expect(init.getDate()).toBe(5)
        expect(final.getDate()).toBe(10)
        expect(onChangeSpy).toBeCalledTimes(2)
    })

})
