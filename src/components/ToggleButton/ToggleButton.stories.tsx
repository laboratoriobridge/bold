import React, { useState } from 'react'

import { HFlow } from '../HFlow'
import { Text } from '../Text'
import { VFlow } from '../VFlow'

import { ToggleButton } from './ToggleButton'
import { ToggleButtonGroup } from './ToggleButtonGroup'

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
}

export const Default = () => (
  <HFlow>
    <ToggleButton>Button</ToggleButton>
    <ToggleButton defaultSelected>Button</ToggleButton>
    <ToggleButton disabled>Button</ToggleButton>
    <ToggleButton disabled defaultSelected>
      Button
    </ToggleButton>
  </HFlow>
)

export const Skins = () => (
  <VFlow>
    <HFlow>
      <ToggleButton skin='outline'>Outline</ToggleButton>
      <ToggleButton skin='outline' defaultSelected>
        Outline
      </ToggleButton>
    </HFlow>
    <HFlow>
      <ToggleButton skin='ghost'>Ghost</ToggleButton>
      <ToggleButton skin='ghost' defaultSelected>
        Ghost
      </ToggleButton>
    </HFlow>
  </VFlow>
)

export const Colors = () => (
  <VFlow>
    {(['outline', 'ghost'] as const).map((skin) => (
      <HFlow key={skin}>
        <ToggleButton skin={skin} color='blue' defaultSelected>
          Blue
        </ToggleButton>
        <ToggleButton skin={skin} color='red' defaultSelected>
          Red
        </ToggleButton>
        <ToggleButton skin={skin} color='green' defaultSelected>
          Green
        </ToggleButton>
      </HFlow>
    ))}
  </VFlow>
)

export const IconOnly = () => (
  <VFlow>
    <HFlow>
      <ToggleButton icon='gearOutline' aria-label='Settings' />
      <ToggleButton icon='gearOutline' aria-label='Settings' defaultSelected />
      <ToggleButton icon='gearOutline' aria-label='Settings' disabled />
    </HFlow>
    <HFlow>
      <ToggleButton skin='ghost' icon='gearOutline' selectedIcon='gearFilled' aria-label='Settings' />
      <ToggleButton skin='ghost' icon='gearOutline' selectedIcon='gearFilled' aria-label='Settings' defaultSelected />
      <ToggleButton skin='ghost' icon='gearOutline' selectedIcon='gearFilled' aria-label='Settings' disabled />
    </HFlow>
  </VFlow>
)

export const Controlled = () => {
  const [selected, setSelected] = useState(false)

  return (
    <HFlow alignItems='center'>
      <ToggleButton selected={selected} onChange={setSelected}>
        Controlled
      </ToggleButton>
      <Text>{selected ? 'Selected' : 'Not selected'}</Text>
    </HFlow>
  )
}

export const YesNoGroup = () => {
  const [value, setValue] = useState<string[]>(['yes'])

  return (
    <HFlow alignItems='center'>
      <Text fontWeight='bold'>Question?</Text>
      <ToggleButtonGroup value={value} onChange={setValue} aria-label='Question'>
        <ToggleButton value='yes'>Yes</ToggleButton>
        <ToggleButton value='no'>No</ToggleButton>
      </ToggleButtonGroup>
    </HFlow>
  )
}

export const FormattingToolbar = () => (
  <ToggleButtonGroup multiple defaultValue={['bold']} aria-label='Text formatting'>
    <ToggleButton value='bold' icon='bold' aria-label='Bold' />
    <ToggleButton value='italic' icon='italic' aria-label='Italic' />
    <ToggleButton value='underline' icon='underline' aria-label='Underline' />
    <ToggleButton value='strikethrough' icon='strikethrough' aria-label='Strikethrough' />
  </ToggleButtonGroup>
)

export const GhostGroup = () => (
  <ToggleButtonGroup skin='ghost' color='green' multiple defaultValue={['b']} aria-label='Options'>
    <ToggleButton value='a'>Option A</ToggleButton>
    <ToggleButton value='b'>Option B</ToggleButton>
    <ToggleButton value='c' disabled>
      Option C
    </ToggleButton>
  </ToggleButtonGroup>
)
