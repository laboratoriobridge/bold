import { Checkbox, HFlow } from '../../../../lib'

function CheckboxDemo() {
  return (
    <HFlow>
      <Checkbox label='Beer' />
      <Checkbox disabled label='Chocolate' />
      <Checkbox indeterminate label='Indeterminate State Example' />
    </HFlow>
  )
}

export default CheckboxDemo
