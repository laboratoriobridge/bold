import { Button, HFlow } from '../../../../lib'

function ButtonSizes() {
  return (
    <HFlow alignItems='flex-end'>
      <Button kind='primary' size='large'>
        Large
      </Button>
      <Button kind='primary' size='medium'>
        Medium
      </Button>
      <Button kind='primary' size='small'>
        Small
      </Button>
    </HFlow>
  )
}

export default ButtonSizes
