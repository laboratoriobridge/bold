/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Dispatch, SetStateAction } from 'react'

import { merge } from 'lodash'
import { DateRange } from '../model'
import { HFlow } from '../../HFlow'
import { Text } from '../../Text'
import { MonthPaginator } from '../../MonthPaginator'
import { ReferenceMonth } from '../../MonthPicker'

export interface ChartMonthSelectorProps {
  label?: string
  onChange: Dispatch<SetStateAction<DateRange>>
}

export function ChartMonthSelector(props: ChartMonthSelectorProps) {
  const { label, onChange } = props

  const onClick = (newValue: ReferenceMonth) => {
    const newDate = new Date(newValue.year, newValue.month, 1)
    var newInit = new Date(newDate.getFullYear(), newDate.getMonth(), 1)
    var newEnd = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
    onChange(({ init, end, ...rest }) => merge({}, { init: newInit, end: newEnd }, { ...rest }))
  }

  return (
    <HFlow
      hSpacing={0}
      alignItems='center'
      justifyContent='flex-end'
      style={css`
        margin-left: auto;
        line-height: 1.5rem;
      `}
    >
      <Text>{label}:</Text>
      <MonthPaginator
        onChange={onClick}
        formatter={(date, month) => month.format(date).replace('.', '')}
        ghost
        popperPlacement='bottom-end'
      />
    </HFlow>
  )
}

ChartMonthSelector.defaultProps = {
  label: 'Competência',
} as ChartMonthSelectorProps
