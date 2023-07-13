import React from 'react'
import { times } from 'lodash'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { HFlow } from '../../HFlow'
import { PivotTableCell } from './PivotTableCell'
import { GridArea } from './classes/GridArea'
import { PivotTableProvider } from './PivotTableProvider'
import { PivotTableCellType } from './model'

export default {
  title: 'Components/PivotTable/PivotTableCell',
}

interface CellTypeAndContent {
  type: PivotTableCellType
  content: number | string
}

export const AllTypes = () => {
  const maxValue = 9

  const cellsTypeAndContent: CellTypeAndContent[] = [
    { type: PivotTableCellType.HEADER, content: 'Header' },
    { type: PivotTableCellType.EMPTY, content: 'empty' },
    ...times(maxValue + 1, (n) => ({
      type: PivotTableCellType.VALUE,
      content: n,
    })),
    { type: PivotTableCellType.GRANDTOTAL, content: 45 },
    { type: PivotTableCellType.TOTAL, content: 45 },
  ]

  return (
    <PivotTableProvider value={{ maxValue, suffix: '' }}>
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

export const EditableType = () => {
  const gridArea = new GridArea(0, 0)

  const maxValue = 10
  const suffix = ''

  const typeEnumValue = select('type', Object.keys(PivotTableCellType), PivotTableCellType.VALUE)

  return (
    <PivotTableProvider value={{ maxValue, suffix: text('suffix', suffix) }}>
      <HFlow hSpacing={0}>
        <PivotTableCell
          types={new Set([PivotTableCellType[typeEnumValue]])}
          key={gridArea.toString()}
          gridArea={gridArea}
          isEndRow={boolean('isEndRow', true)}
          isEndColumn={boolean('isEndColumn', true)}
        >
          {number('content', 5, { min: 1, max: 10 })}
        </PivotTableCell>
      </HFlow>
    </PivotTableProvider>
  )
}
