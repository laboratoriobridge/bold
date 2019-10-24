import { Button, HFlow, VFlow } from 'bold-ui'
import React from 'react'

function ButtonSizes() {
  return (
    <VFlow>
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
      <Button kind='primary' block>
        Block button
      </Button>
    </VFlow>
  )
}

export default ButtonSizes
