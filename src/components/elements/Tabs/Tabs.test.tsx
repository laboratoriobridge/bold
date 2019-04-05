import React from 'react'
import { render } from 'react-testing-library'

import { withRouter } from '../../../test'

import { TabLink, Tabs } from './Tabs'

it('renders correctly', () => {
  expect(
    render(
      withRouter(
        <Tabs>
          <TabLink to='/'>Home</TabLink>
          <TabLink to='/test'>Test</TabLink>
          <TabLink to='/active' active>
            Active
          </TabLink>
          <TabLink to='/disabled' disabled>
            Disabled
          </TabLink>
        </Tabs>
      )
    ).container
  ).toMatchSnapshot()
})
