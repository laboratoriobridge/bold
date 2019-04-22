import { SelectField } from '../../../../lib'

function MultiSelectSearch() {
  const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

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
