import { Button, HFlow, Icon, Text } from '../../../../lib'

function ButtonDanger() {
  return (
    <HFlow alignItems='flex-end'>
      <Button kind='danger' size='large'>
        <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
        <Text>Delete</Text>
      </Button>
      <Button kind='danger' size='large' disabled>
        <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
        <Text>Delete</Text>
      </Button>
      <Button kind='danger' skin='outline' size='small'>
        <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
        <Text>Delete</Text>
      </Button>
      <Button kind='danger' skin='outline' size='small' disabled>
        <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
        <Text>Delete</Text>
      </Button>
    </HFlow>
  )
}

export default ButtonDanger
