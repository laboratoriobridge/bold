import { HFlow, TextField, Form, Grid, Cell } from '../../../../lib'

function TextInput() {
  const renderForm = () => {
    return (
      <Grid>
        <Cell size={6}>
          <TextField
            name='empty'
            label='Name'
            placeholder='Ex: Daenerys Stormborn of the House Targaryen First of Her Name'
            required
          />
        </Cell>
        <Cell size={3}>
          <TextField name='disabled' label='Email' disabled />{' '}
        </Cell>
        <Cell size={3}>
          <TextField name='password' label='Password' type='password' required />{' '}
        </Cell>
      </Grid>
    )
  }

  return <Form render={renderForm} />
}

export default TextInput
