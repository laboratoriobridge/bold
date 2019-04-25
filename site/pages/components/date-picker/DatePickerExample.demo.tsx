import { useState } from 'react'

import { DatePickerInput } from '../../../../lib'

function DatePickerExample() {
  const [value, setValue] = useState<Date>()

  const handleChange = (selectedDate: Date) => setValue(selectedDate)

  return <DatePickerInput value={value} onChange={handleChange} />
}

export default DatePickerExample
