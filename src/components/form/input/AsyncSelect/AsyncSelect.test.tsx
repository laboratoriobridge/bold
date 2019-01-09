import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { AsyncSelect } from './AsyncSelect'

it('should render correctly', () => {
    const wrapper = render(withTheme(<AsyncSelect />))
    expect(wrapper).toMatchSnapshot()
})

it('should accept to override components', () => {
    const wrapper = render(withTheme(
        <AsyncSelect
            components={{
                Placeholder: (p) => <span className='placeholder' />,
            }}
        />
    ))
    expect(wrapper).toMatchSnapshot()
})
