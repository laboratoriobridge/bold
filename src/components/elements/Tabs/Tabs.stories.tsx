import { storiesOf } from '@storybook/react'
import React from 'react'

import { TabItem } from './TabItem'
import { Tabs } from './Tabs'

storiesOf('Components|Tabs', module).add('default', () => (
  <Tabs>
    <TabItem>First item</TabItem>
    <TabItem active>Second item</TabItem>
    <TabItem>Third item</TabItem>
    <TabItem>Fourth item</TabItem>
    <TabItem disabled>Disabled item</TabItem>
  </Tabs>
))
