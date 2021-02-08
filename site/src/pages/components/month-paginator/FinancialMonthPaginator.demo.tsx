import { FormControl, MonthPaginator } from 'bold-ui'
import React from 'react'

function FinancialMonthPaginator() {
  return (
    <FormControl label='Profits month' required>
      <MonthPaginator year={new Date().getFullYear()} />
    </FormControl>
  )
}

export default FinancialMonthPaginator
