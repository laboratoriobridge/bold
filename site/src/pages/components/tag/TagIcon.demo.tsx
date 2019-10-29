import { HFlow, Tag } from 'bold-ui'
import React from 'react'

function TagIcon() {
  return (
    <HFlow>
      <Tag icon='userFilled'>Normal</Tag>
      <Tag type='alert' icon='exclamationTriangleFilled'>
        Alert
      </Tag>
      <Tag type='danger' icon='banFilled'>
        Danger
      </Tag>
      <Tag type='info' icon='infoCircleFilled'>
        Info
      </Tag>
      <Tag type='success' icon='checkCircleFilled'>
        Success
      </Tag>
    </HFlow>
  )
}

export default TagIcon
