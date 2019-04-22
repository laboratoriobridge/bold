import { Cell, Form, Grid, TextAreaField } from '../../../../lib'

function TextArea() {
  const renderForm = () => {
    return (
      <Grid>
        <Cell size={6}>
          <TextAreaField name='empty' label='Name' placeholder='Ex: Hercílio Luz' required />
        </Cell>
        <Cell size={6}>
          <TextAreaField name='disabled' label='Email' disabled />
        </Cell>
      </Grid>
    )
  }

  return <Form render={renderForm} />
}

export default TextArea
