import { FormControl, Select } from '../../../../lib'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function MultiSelect() {
  const itemToString = (item: any) => item

  return (
    <FormControl label='Favorite pasta' required>
      <Select<string> items={items} itemToString={itemToString} name='favorite pasta' multiple required />
    </FormControl>
  )
}

export default MultiSelect
