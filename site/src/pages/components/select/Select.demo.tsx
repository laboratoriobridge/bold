import { Select, Text, VFlow } from 'bold-ui'
import React, { useState } from 'react'

const items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']

function SelectDemo() {
  const [value, setValue] = useState()

  const handleChange = (item: string) => setValue(item)

  const itemToString = (item: string) => item

  return (
    <VFlow>
      <Text>Selected item: {value || '[none]'}</Text>
      <Select<string>
        label='Favorite pasta'
        items={items}
        value={value}
        onChange={handleChange}
        itemToString={itemToString}
        name='favorite pasta'
        required
      />
    </VFlow>
  )
}

export default SelectDemo
