import { Button, HFlow, Icon, Text } from 'bold-ui'
import React from 'react'

function ButtonIcons() {
  return (
    <HFlow alignItems='flex-end'>
      <Button kind='primary'>
        <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
        <Text color='inherit'>Launch</Text>
      </Button>
      <Button>
        <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
        <Text color='inherit'>Launch</Text>
      </Button>
      <Button skin='ghost' kind='primary'>
        <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
        <Text color='inherit'>Launch</Text>
      </Button>
    </HFlow>
  )
}

export default ButtonIcons
