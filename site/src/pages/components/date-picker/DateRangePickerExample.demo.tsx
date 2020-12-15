import { DateRangePicker, DateRange } from 'bold-ui'
import React, { useState } from 'react'

function DateRangePickerExample() {
  const [value, setValue] = useState<DateRange>({
    startDate: new Date('2020-01-28T17:46:49.253Z'),
    endDate: new Date('2020-02-07T17:46:49.253Z'),
  })

  const handleChange = (selectedDate: DateRange) => setValue(selectedDate)

  return (
    <DateRangePicker error='' icon='calendarOutline' label='Period' onChange={handleChange} required value={value} />
  )
}

export default DateRangePickerExample
