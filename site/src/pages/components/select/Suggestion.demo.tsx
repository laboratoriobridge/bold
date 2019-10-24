import { Select, Text, VFlow } from 'bold-ui'
import React, { useState } from 'react'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function SuggestionDemo() {
  const [value, setValue] = useState()

  const handleChange = (item: string) => setValue(item)

  const itemToString = (item: string) => item
  const createNewItem = (inputValue: string) => inputValue

  return (
    <VFlow>
      <Text>Selected item: {value || '[none]'}</Text>
      <Select<string>
        value={value}
        label='Favorite pasta'
        name='favorite pasta'
        items={items}
        onChange={handleChange}
        itemToString={itemToString}
        createNewItem={createNewItem}
        icon={null}
        required
      />
    </VFlow>
  )
}

export default SuggestionDemo
