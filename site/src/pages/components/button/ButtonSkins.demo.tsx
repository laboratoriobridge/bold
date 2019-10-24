import { Button, HFlow, VFlow } from 'bold-ui'
import React from 'react'

function ButtonSkins() {
  return (
    <VFlow>
      <HFlow alignItems='flex-end'>
        <Button kind='normal' skin='default'>
          Normal / Default
        </Button>
        <Button kind='normal' skin='ghost'>
          Normal / Ghost
        </Button>
      </HFlow>
      <HFlow alignItems='flex-end'>
        <Button kind='primary' skin='default'>
          Primary / Default
        </Button>
        <Button kind='primary' skin='outline'>
          Primary / Outline
        </Button>
        <Button kind='primary' skin='ghost'>
          Primary / Ghost
        </Button>
      </HFlow>
      <HFlow alignItems='flex-end'>
        <Button kind='danger' skin='default'>
          Danger / Default
        </Button>
        <Button kind='danger' skin='outline'>
          Danger / Outline
        </Button>
        <Button kind='danger' skin='ghost'>
          Danger / Ghost
        </Button>
      </HFlow>
    </VFlow>
  )
}

export default ButtonSkins
