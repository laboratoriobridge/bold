import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Select } from './Select'

it('should render correctly', () => {
    const wrapper = render(withTheme(<Select />))
    expect(wrapper).toMatchSnapshot()
})

it('should accept to override components', () => {
    const wrapper = render(withTheme(
        <Select
            components={{
                Placeholder: (p) => <span className='placeholder' />,
            }}
        />
    ))
    expect(wrapper).toMatchSnapshot()
})
