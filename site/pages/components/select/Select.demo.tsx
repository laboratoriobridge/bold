import { SelectField } from '../../../../lib'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function Select() {
  return <SelectField<string> items={items} label='Favorite pasta' name='favorite pasta' required />
}

export default Select
