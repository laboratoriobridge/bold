import { HFlow, TextField, Form, Icon } from '../../../../lib'

function SearchEx() {
  const renderForm = () => {
    return (
      <HFlow>
        <TextField
          name='iconized'
          label='Name'
          id='iconized'
          placeholder='Ex: Hercílio Luz'
          icon='zoomOutline'
          required
        />
      </HFlow>
    )
  }

  return <Form render={renderForm} />
}

export default SearchEx
