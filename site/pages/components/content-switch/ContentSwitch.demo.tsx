import { ButtonGroup, Button, HFlow } from '../../../../lib'

function ContentSwitchDemo() {
  return (
    <HFlow>
      <ButtonGroup>
        <Button size='small' kind='primary'>
          First content
        </Button>
        <Button size='small'>Second content</Button>
        <Button size='small'>Third content</Button>
      </ButtonGroup>
    </HFlow>
  )
}

export default ContentSwitchDemo
