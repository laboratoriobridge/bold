import { useState } from 'react'

import { Select, Text, VFlow } from '../../../../lib'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function SuggestionDemo() {
  const [value, setValue] = useState()

  const itemToString = (item: any) => item
  const createNewItem = (inputValue: string) => inputValue

  return (
    <VFlow>
      <Text>Selected item: {value || '[none]'}</Text>
      <Select<string>
        value={value}
        label='Favorite pasta'
        name='favorite pasta'
        items={items}
        onChange={setValue}
        itemToString={itemToString}
        createNewItem={createNewItem}
        icon={null}
        required
      />
    </VFlow>
  )
}

export default SuggestionDemo
