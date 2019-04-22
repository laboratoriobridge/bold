import { Tag, HFlow } from '../../../../lib'

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
