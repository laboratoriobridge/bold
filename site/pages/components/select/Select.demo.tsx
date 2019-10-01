import { FormControl, Select } from '../../../../lib'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function SelectDemo() {
  const itemToString = (item: any) => item

  return (
    <Select<string> label='Favorite pasta' items={items} itemToString={itemToString} name='favorite pasta' required />
  )
}

export default SelectDemo
