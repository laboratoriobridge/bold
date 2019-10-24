import { HFlow, Tag } from 'bold-ui'
import React from 'react'

function TagRemovable() {
  return (
    <HFlow>
      <Tag removable onRemove={console.log}>
        Normal
      </Tag>
      <Tag type='alert' removable onRemove={console.log}>
        Alert
      </Tag>
      <Tag type='danger' removable onRemove={console.log}>
        Danger
      </Tag>
      <Tag type='info' removable onRemove={console.log}>
        Info
      </Tag>
      <Tag type='success' removable onRemove={console.log}>
        Success
      </Tag>
    </HFlow>
  )
}

export default TagRemovable
