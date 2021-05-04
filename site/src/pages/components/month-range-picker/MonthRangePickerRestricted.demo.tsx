import { DateRange } from 'bold-ui'
import { MonthRangePicker, ReferenceMonthRange } from 'bold-ui/components/MonthRangePicker/MonthRangePicker'
import React, { useState } from 'react'

function MonthRangePickerRestricted() {
  const [value, setValue] = useState<ReferenceMonthRange>({
    start: { month: 1, year: 2021 },
    end: { month: 3, year: 2021 },
  })

  const handleChange = (selectedDate: DateRange) => {
    let start = null
    let end = null
    if (selectedDate.startDate != null) {
      start = { month: selectedDate.startDate.getMonth(), year: selectedDate.startDate.getFullYear() }
    }
    if (selectedDate.endDate != null) {
      end = { month: selectedDate.endDate.getMonth(), year: selectedDate.endDate.getFullYear() }
    }
    setValue({ start, end })
  }

  return (
    <MonthRangePicker
      error=''
      label='Restricted Month Field'
      onChange={handleChange}
      value={value}
      minMonth={{ month: 0, year: 2021 }}
      maxMonth={{ month: 5, year: 2021 }}
    />
  )
}

export default MonthRangePickerRestricted
