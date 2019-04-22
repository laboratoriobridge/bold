import { HFlow, RadioButton } from '../../../../lib'
import { MemoryRouter } from 'react-router'

function RadioButtonDefault() {
  return (
    <HFlow>
      <RadioButton name='default' label='Whiskey' value='whiskey' />
      <RadioButton name='default' label='Coconut water' value='coconut water' />
      <RadioButton name='disabled' label='Whatever' value='whatever' disabled />
    </HFlow>
  )
}

export default RadioButtonDefault
