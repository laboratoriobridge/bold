import React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { Button } from '../Button'
import { HFlow } from '../Flow/HFlow'
import { Icon } from '../Icon'

export interface AriaControlNavProps extends WithStylesProps {}

@withStyles
export class AriaControlNav extends React.Component<AriaControlNavProps> {
  render() {
    return (
      <HFlow hSpacing={0.5}>
        <Button size='small' skin='ghost' onClick={this.handleDecreaseFont}>
          <Icon icon='decreaseFont' />
        </Button>
        <Button size='small' skin='ghost' onClick={this.handleIncreaseFont}>
          <Icon icon='increaseFont' />
        </Button>
        <Button size='small' skin='ghost' onClick={this.handleContrastChange}>
          <Icon icon='contrast' />
        </Button>
      </HFlow>
    )
  }

  private handleDecreaseFont = () => {
    return null
  }

  private handleIncreaseFont = () => {
    return null
  }

  private handleContrastChange = () => {
    return null
  }
}
