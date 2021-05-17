import { DateRangePicker, DateRange } from 'bold-ui'
import React, { useState } from 'react'

function WeekRangePickerExample() {
  const [value, setValue] = useState<DateRange>({
    startDate: new Date('2021-01-03T17:46:49.253Z'),
    endDate: new Date('2021-01-09T17:46:49.253Z'),
  })

  const handleChange = (selectedDate: DateRange) => setValue(selectedDate)

  return (
    <DateRangePicker
      error=''
      icon='calendarOutline'
      label='Period'
      onChange={handleChange}
      required
      value={value}
      onlyWeeks
    />
  )
}

export default WeekRangePickerExample
