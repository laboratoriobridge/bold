import { FormRenderProps } from 'react-final-form'

import { Button, Cell, CheckboxField, Form, FormControl, Grid, HFlow, RadioField, TextField } from '../../../../lib'

function FormDemo() {
  const renderForm = (formProps: FormRenderProps) => {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <Grid wrap>
          <Cell xs={6}>
            <TextField label='First name' name='firstName' required />
          </Cell>
          <Cell xs={6}>
            <TextField label='Last name' name='lastName' required />
          </Cell>
          <Cell xs={6}>
            <TextField name='email' label='E-mail' type='email' icon='emailFilled' />
          </Cell>
          <Cell xs={6}>
            <FormControl label='Favorite color'>
              <HFlow>
                <RadioField name='color' value='red' label='Red' />
                <RadioField name='color' value='green' label='Green' />
                <RadioField name='color' value='blue' label='Blue' />
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={12}>
            <CheckboxField name='agreed' label='I agree to the terms of use' />
          </Cell>
          <Cell xs={12}>
            <HFlow justifyContent='flex-end'>
              <Button type='reset' skin='outline' onClick={formProps.reset}>
                Reset
              </Button>
              <Button type='submit' kind='primary' onClick={formProps.handleSubmit}>
                Submit
              </Button>
            </HFlow>
          </Cell>
        </Grid>
      </form>
    )
  }

  return <Form render={renderForm} onSubmit={console.log} validate={validate} />
}

const validate = (values: any) => {
  const errors: any = {}

  if (!values.firstName) {
    errors.firstName = 'First name is required'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required'
  }

  return errors
}

export default FormDemo
