import { Button, HFlow, Icon, Text } from '../../../../lib'

function ButtonDanger() {
  return (
    <HFlow alignItems='flex-end'>
      <Button kind='danger' size='large'>
        <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
        <Text color='inherit'>Delete</Text>
      </Button>
      <Button kind='danger' size='large' disabled>
        Delete
      </Button>
      <Button kind='danger' skin='outline' size='small'>
        Delete
      </Button>
      <Button kind='danger' skin='outline' size='small' disabled>
        <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
        <Text color='inherit'>Delete</Text>
      </Button>
    </HFlow>
  )
}

export default ButtonDanger
