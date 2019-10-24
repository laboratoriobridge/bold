import { HFlow, Tag } from 'bold-ui'
import React from 'react'

function TagDefault() {
  return (
    <HFlow>
      <Tag>Normal</Tag>
      <Tag type='alert'>Alert</Tag>
      <Tag type='danger'>Danger</Tag>
      <Tag type='info'>Info</Tag>
      <Tag type='success'>Success</Tag>
    </HFlow>
  )
}

export default TagDefault
