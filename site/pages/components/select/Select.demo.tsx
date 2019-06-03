import { FormControl, Select } from '../../../../lib'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function SelectDemo() {
  const itemToString = (item: any) => item

  return (
    <FormControl label='Favorite pasta' required>
      <Select<string> items={items} itemToString={itemToString} name='favorite pasta' required />
    </FormControl>
  )
}

export default SelectDemo
