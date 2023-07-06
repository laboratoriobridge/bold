import React from 'react'
import { times } from 'lodash'
import { HFlow } from '../../HFlow'
import { PivotTableCell } from './PivotTableCell'
import { GridArea } from './classes/GridArea'
import { PivotTableProvider } from './PivotTableProvider'
import { PivotTableCellType } from './model'

export default {
  title: 'Components/PivotTable/PivotTableCell',
}

export const Default = () => {
  const total = 9

  const cellsTypeAndContent = [
    { type: PivotTableCellType.HEADER, content: 'Header' },
    { type: PivotTableCellType.EMPTY, content: 'empty' },
    ...times(total + 1, (n) => ({
      type: PivotTableCellType.VALUE,
      content: n,
    })),
    { type: PivotTableCellType.GRANDTOTAL, content: 45 },
    { type: PivotTableCellType.TOTAL, content: 45 },
  ]

  return (
    <PivotTableProvider value={{ total: total, suffix: '' }}>
      <HFlow hSpacing={0}>
        {cellsTypeAndContent.map(({ type, content }, idx) => {
          const types = new Set([type])
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
