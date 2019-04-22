import { SelectField } from '../../../../lib'

function Select() {
  const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

  return <SelectField<string> items={items} label='Favorite pasta' name='favorite pasta' required />
}

export default Select
