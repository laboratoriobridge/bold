import { Cell, FormControl, Grid, TextInput } from '../../../../lib'

function TextInputDemo() {
  return (
    <Grid>
      <Cell size={6}>
        <FormControl label='Name'>
          <TextInput name='empty' placeholder='Ex: Daenerys Stormborn of the House Targaryen First of Her Name' />
        </FormControl>
      </Cell>
      <Cell size={3}>
        <FormControl label='Email' required>
          <TextInput name='disabled' disabled />
        </FormControl>
      </Cell>
      <Cell size={3}>
        <FormControl label='Password' required>
          <TextInput name='password' type='password' required />
        </FormControl>
      </Cell>
    </Grid>
  )
}

export default TextInputDemo
