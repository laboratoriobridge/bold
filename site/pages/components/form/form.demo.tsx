import { TextField, RadioButton, Checkbox, Grid, Cell, Flow } from '../../../../lib'

function FormDemo() {
  return (
    <Flow>
      <TextField label='Name' name='sqqs' required />
      <TextField label='Last name' name='ss' required />
    </Flow>
  )
}

export default FormDemo
