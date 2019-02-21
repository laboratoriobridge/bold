import { render } from 'enzyme'
import React from 'react'

import { withRouter, withTheme } from '../../../test'

import { TabLink, Tabs } from './Tabs'

it('renders correctly', () => {
    expect(render(withRouter(withTheme(
        <Tabs>
            <TabLink to='/'>Home</TabLink>
            <TabLink to='/test'>Test</TabLink>
            <TabLink to='/active' active>Active</TabLink>
            <TabLink to='/active' disabled>Disabled</TabLink>
        </Tabs>
    )))).toMatchSnapshot()
})
