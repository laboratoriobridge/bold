import React = require('react')
import { render } from 'react-testing-library'

import { withTheme } from '../../../test'

import { RangeCalendar, RangeCalendarProps } from './RangeCalendar'

const createComponent = (props: Partial<RangeCalendarProps> = {}) => (
    withTheme(
        <RangeCalendar
            initialVisibleDate={new Date('2019-02-09')}
            initialDate={null}
            finalDate={null}
            {...props}
        />
    )
)

describe('[Calendar][RangePicker]', () => {

    it('Should initialize with null values', () => {
        const { container } = render(createComponent())
        expect(container).toMatchSnapshot()
    })

})
