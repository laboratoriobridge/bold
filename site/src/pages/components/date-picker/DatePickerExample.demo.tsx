import { DateField } from 'bold-ui'
import React, { useState } from 'react'

function DatePickerExample() {
  const [value, setValue] = useState<Date>()

  const handleChange = (selectedDate: Date) => setValue(selectedDate)

  return <DateField label='Birthday date' name='birthday' value={value} onChange={handleChange} />
}

export default DatePickerExample
