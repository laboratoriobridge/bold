import { Button, ButtonGroup } from '../../../../lib'

function ContentSwitchDemo() {
  return (
    <ButtonGroup>
      <Button size='small' kind='primary'>
        First content
      </Button>
      <Button size='small'>Second content</Button>
      <Button size='small' disabled>
        Third content disabled
      </Button>
    </ButtonGroup>
  )
}

export default ContentSwitchDemo
