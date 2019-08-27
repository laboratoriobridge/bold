import { Cell, Grid, TextField } from '../../../../lib'

function TextFieldDemo() {
  return (
    <Grid>
      <Cell xs={12} md={6}>
        <TextField
          label='Name'
          name='empty'
          placeholder='Ex: Daenerys Stormborn of the House Targaryen First of Her Name'
        />
      </Cell>
      <Cell xs={12} md={3}>
        <TextField label='Email' name='disabled' disabled />
      </Cell>
      <Cell xs={12} md={3}>
        <TextField label='Password' name='password' type='password' required />
      </Cell>
      <Cell xs={12} md={4}>
        <TextField label='Favourite show' name='password' defaultValue='Game of Thrones' error='Incorrect answer' />
      </Cell>
    </Grid>
  )
}

export default TextFieldDemo
