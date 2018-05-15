import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Spinner } from './Spinner'

it('should render correctly', () => {
    expect(render(withTheme(<Spinner />))).toMatchSnapshot()
})
