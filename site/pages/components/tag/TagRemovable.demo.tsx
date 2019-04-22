import { Tag, Icon, HFlow } from '../../../../lib'

function TagRemovable() {
  return (
    <HFlow>
      <Tag removable>Normal</Tag>
      <Tag type='alert' removable>
        Alert
      </Tag>
      <Tag type='danger' removable>
        Danger
      </Tag>
      <Tag type='info' removable>
        Info
      </Tag>
      <Tag type='success' removable>
        Success
      </Tag>
    </HFlow>
  )
}

export default TagRemovable
