import { DateField, Text, VFlow } from 'bold-ui'
import React, { useState } from 'react'

function DatePickerExample() {
  const [value, setValue] = useState<Date>()

  const handleChange = (selectedDate: Date) => setValue(selectedDate)

  return (
    <VFlow>
      <Text>Selected date: {value ? value.toDateString() : '[none]'}</Text>
      <DateField label='Birthday date' name='birthday' value={value} onChange={handleChange} />
    </VFlow>
  )
}

export default DatePickerExample
