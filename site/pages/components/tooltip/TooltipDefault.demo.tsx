import { Tooltip, Button, Icon, HFlow } from '../../../../lib'

function TooltipDefault() {
  return (
    <HFlow hSpacing={0.5} alignItems='center'>
      <Tooltip text='Delete' placement='bottom-start'>
        <Button skin='ghost' size='small'>
          <Icon icon='trashOutline' />
        </Button>
      </Tooltip>
      <Tooltip text='This file cannot be deleted'>
        <Button skin='ghost' size='small' disabled>
          <Icon icon='trashOutline' />
        </Button>
      </Tooltip>
    </HFlow>
  )
}

export default TooltipDefault
