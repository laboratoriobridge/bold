import React from 'react'

import { Button } from '../Button'
import { HFlow } from '../Flow/HFlow'
import { Icon } from '../Icon'

export interface AriaControlNavProps {}

export function AriaControlNav(props: AriaControlNavProps) {
  const handleDecreaseFont = () => null
  const handleIncreaseFont = () => null
  const handleContrastChange = () => null

  return (
    <HFlow hSpacing={0.5}>
      <Button size='small' skin='ghost' onClick={handleDecreaseFont}>
        <Icon icon='decreaseFont' />
      </Button>
      <Button size='small' skin='ghost' onClick={handleIncreaseFont}>
        <Icon icon='increaseFont' />
      </Button>
      <Button size='small' skin='ghost' onClick={handleContrastChange}>
        <Icon icon='contrast' />
      </Button>
    </HFlow>
  )
}
