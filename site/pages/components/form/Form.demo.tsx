import { useState } from 'react'

import { Button, Cell, Checkbox, FormControl, Grid, HFlow, Radio, TextField, TextInput } from '../../../../lib'

function FormDemo() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    color: '',
    agreed: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(formState, null, 2))
  }

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target

    setFormState(state => ({
      ...state,
      [name]: el.type === 'checkbox' ? el.checked : el.value,
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid wrap>
          <Cell xs={6}>
            <TextField
              name='firstName'
              label='First name'
              placeholder='Enter your first name'
              value={formState.firstName}
              onChange={handleChange('firstName')}
              required
            />
          </Cell>
          <Cell xs={6}>
            <TextField
              name='lastName'
              label='Last name'
              placeholder='Enter your last name'
              value={formState.lastName}
              onChange={handleChange('lastName')}
              required
            />
          </Cell>
          <Cell xs={6}>
            <TextField
              name='email'
              label='E-mail'
              type='email'
              placeholder='Enter your e-mail'
              value={formState.email}
              onChange={handleChange('email')}
            />
          </Cell>
          <Cell xs={6}>
            <FormControl label='Favorite color'>
              <HFlow>
                <Radio name='color' value='red' label='Red' onChange={handleChange('color')} />
                <Radio name='color' value='green' label='Green' onChange={handleChange('color')} />
                <Radio name='color' value='blue' label='Blue' onChange={handleChange('color')} />
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={12}>
            <Checkbox name='agreed' label='I agree to the terms of use' onChange={handleChange('agreed')} />
          </Cell>
          <Cell xs={12}>
            <HFlow justifyContent='flex-end'>
              <Button type='reset' skin='outline'>
                Reset
              </Button>
              <Button type='submit' kind='primary'>
                Submit
              </Button>
            </HFlow>
          </Cell>
        </Grid>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  )
}

export default FormDemo
