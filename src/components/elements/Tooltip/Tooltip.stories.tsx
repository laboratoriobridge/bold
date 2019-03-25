import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { HFlow } from '../Flow'
import { Icon } from '../Icon'

import { Tooltip } from './Tooltip'

storiesOf('Components|Tooltip', module).add('default', () => (
  <HFlow hSpacing={0.5} alignItems='center'>
    <Tooltip text='Lorem ipsum'>
      <Button kind='primary' size='small'>
        Action
      </Button>
    </Tooltip>
    <Tooltip
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In non urna sit amet eros finibus auctor ut vitae magna.
            Donec mollis eu velit nec ullamcorper.'
      placement='bottom-start'
    >
      <Button skin='ghost' size='small'>
        <Icon icon='trashOutline' />
      </Button>
    </Tooltip>
    <Tooltip text='Disabled action'>
      <Button skin='outline' size='small' disabled>
        Disabled
      </Button>
    </Tooltip>
  </HFlow>
))
