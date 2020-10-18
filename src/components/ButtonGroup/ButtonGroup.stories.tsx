import React from 'react'

import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { Icon } from '../Icon'

import { ButtonGroup } from './ButtonGroup'

export default {
  title: 'Components/ButtonGroup',
}

export const Default = () => (
  <HFlow>
    <ButtonGroup>
      <Button size='small' kind='primary'>
        First
      </Button>
      <Button size='small'>Second</Button>
      <Button size='small' disabled>
        Third
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size='small'>
        <Icon icon='trashOutline' />
      </Button>
      <Button size='small'>
        <Icon icon='zoomOutline' />
      </Button>
    </ButtonGroup>
  </HFlow>
)
