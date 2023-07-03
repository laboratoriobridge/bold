import React from 'react'
import { times } from 'lodash'
import { HFlow } from '../../HFlow'
import { PivotTableCell } from './PivotTableCell'
import { GridArea } from './classes/GridArea'
import { PivotTableProvider } from './PivotTableProvider'
import { PivotTableCellTypes } from './model'

export default {
  title: 'Components/PivotTable/PivotTableCell',
}

export const Default = () => {
  const total = 9

  const cellsTypeAndContent = [
    { type: 'header', content: 'Header' },
    { type: 'empty', content: 'empty' },
    ...times(total + 1, (n) => ({
      type: 'value',
      content: n,
    })),
    { type: 'grandtotal', content: 45 },
    { type: 'total', content: 45 },
  ]

  return (
    <PivotTableProvider value={{ total: total, suffix: '' }}>
      <HFlow hSpacing={0}>
        {cellsTypeAndContent.map(({ type, content }, idx) => {
          const types = [type] as PivotTableCellTypes
          const gridArea = new GridArea(0, idx)

          return (
            <PivotTableCell
              types={types}
              key={gridArea.toString()}
              gridArea={gridArea}
              isEndRow
              isEndColumn={cellsTypeAndContent.length - 1 === idx}
            >
              {content}
            </PivotTableCell>
          )
        })}
      </HFlow>
    </PivotTableProvider>
  )
}
