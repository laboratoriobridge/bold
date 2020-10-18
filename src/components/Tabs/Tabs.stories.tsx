import React from 'react'

import { TabItem } from './TabItem'
import { Tabs } from './Tabs'

export default { title: 'Components/Tabs' }

export const Default = () => (
  <Tabs>
    <TabItem>First item</TabItem>
    <TabItem active>Second item</TabItem>
    <TabItem>Third item</TabItem>
    <TabItem>Fourth item</TabItem>
    <TabItem disabled>Disabled item</TabItem>
  </Tabs>
)
