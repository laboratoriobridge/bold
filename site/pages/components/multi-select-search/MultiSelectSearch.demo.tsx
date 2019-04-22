import { SelectField } from '../../../../lib'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function MultiSelectSearch() {
  const itemToString = (item: any) => item

  return (
    <SelectField<string>
      items={items}
      itemToString={itemToString}
      label='Favorite pasta'
      name='favorite pasta'
      multiple
      required
    />
  )
}

export default MultiSelectSearch
