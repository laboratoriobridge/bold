import { render } from 'enzyme'
import * as React from 'react'

import { withRouter, withTheme } from '../../../test'

import { TabLink, Tabs } from './Tabs'

it('deve renderizar corretamente', () => {
    expect(render(withRouter(withTheme(
        <Tabs>
            <TabLink to='/'>Home</TabLink>
            <TabLink to='/test'>Test</TabLink>
            <TabLink to='/active' active>Active</TabLink>
        </Tabs>
    )))).toMatchSnapshot()
})
