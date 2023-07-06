import React from 'react'
import { times } from 'lodash'
import { boolean, object, text } from '@storybook/addon-knobs'
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

export const Default = () => {
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
    <PivotTableProvider value={{ maxValue: maxValue, suffix: '' }}>
      <HFlow hSpacing={0}>
        {cellsTypeAndContent.map(({ type, content }, idx) => {
          const types = new Set([type])
          const gridArea = new GridArea(0, idx)
          const idxStr = idx.toString()

          return (
            <PivotTableCell
              types={object('types', types, idxStr)} // just shows an empty object, there's' a function to set of enum (maybe select works for enum)
              key={text('key', gridArea.toString(), idxStr)}
              gridArea={object<GridArea>('gridArea', gridArea, idxStr)}
              isEndRow={boolean('isEndRow', true, idxStr)}
              isEndColumn={boolean('isEndColumn', cellsTypeAndContent.length - 1 === idx, idxStr)}
            >
              {content}
            </PivotTableCell>
          )
        })}
      </HFlow>
    </PivotTableProvider>
  )
}
