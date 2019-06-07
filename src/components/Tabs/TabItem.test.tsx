import { render } from '@testing-library/react'
import React from 'react'
import { AnchorHTMLAttributes } from 'react'

import { TabItem, TabItemProps } from './TabItem'
import { Tabs } from './Tabs'

it('should render correctly', () => {
  const { container } = render(<TabItem>Item</TabItem>)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<TabItem style={{ color: 'red' }}>Item</TabItem>)
  expect(container).toMatchSnapshot()
})

it('should accept "component" prop', () => {
  const TabLink = (props: AnchorHTMLAttributes<HTMLAnchorElement> & TabItemProps) => (
    <TabItem component='a' {...props} />
  )

  const { container } = render(
    <Tabs>
      <TabLink href='/'>Home</TabLink>
      <TabLink href='/'>Test</TabLink>
      <TabLink href='/' active>
        Active
      </TabLink>
      <TabLink href='/' disabled>
        Disabled
      </TabLink>
    </Tabs>
  )
  expect(container).toMatchSnapshot()
})
