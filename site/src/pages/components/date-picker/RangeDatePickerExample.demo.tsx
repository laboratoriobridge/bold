import { RangeDateField } from 'bold-ui'
import React, { useState } from 'react'

function RangeDatePickerExample() {
  const [value, setValue] = useState<Date>()

  const handleChange = (selectedDate: Date) => setValue(selectedDate)

  return (
    <RangeDateField
      error=''
      icon='calendarOutline'
      label='Period'
      onChange={console.log}
      required
      value={{
        finalDate: new Date('2020-02-07T17:46:49.253Z'),
        startDate: new Date('2020-01-28T17:46:49.253Z'),
      }}
    />
  )
}

export default RangeDatePickerExample
