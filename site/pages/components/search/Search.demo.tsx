import { Form, TextField } from '../../../../lib'

function SearchEx() {
  const renderForm = () => {
    return (
      <TextField
        name='iconized'
        label='Name'
        id='iconized'
        placeholder='Ex: Hercílio Luz'
        icon='zoomOutline'
        required
      />
    )
  }

  return <Form render={renderForm} />
}

export default SearchEx
