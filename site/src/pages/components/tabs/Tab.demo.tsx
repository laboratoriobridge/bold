import { TabItem, Tabs } from 'bold-ui'
import React from 'react'

function TabEx() {
  return (
    <Tabs>
      <TabItem onClick={console.log}>First item</TabItem>
      <TabItem onClick={console.log} active>
        Active item
      </TabItem>
      <TabItem onClick={console.log}>Third item</TabItem>
      <TabItem onClick={console.log} disabled>
        Disabled item
      </TabItem>
    </Tabs>
  )
}

export default TabEx
