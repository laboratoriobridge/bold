import { TabItem, Tabs } from '../../../../lib'

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
