import { useState } from 'react'

import { DateField } from '../../../../lib'

function DatePickerExample() {
  const [value, setValue] = useState<Date>()

  const handleChange = (selectedDate: Date) => setValue(selectedDate)

  return <DateField label='Birthday date' name='birthday' value={value} onChange={handleChange} />
}

export default DatePickerExample
