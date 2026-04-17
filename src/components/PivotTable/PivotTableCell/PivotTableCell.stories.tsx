import React from 'react'
import { times } from 'lodash'
import { HFlow } from '../../HFlow'
import { PivotTableCell } from './PivotTableCell'
import { GridArea } from './classes/GridArea'
import { PivotTableProvider } from './PivotTableProvider'
import { PivotTableCellType } from './model'

export default {
  title: 'Components/PivotTable/PivotTableCell',
  component: PivotTableCell,
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
    <PivotTableProvider maxValue={maxValue} suffix={''}>
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

export const EditableType = (args) => {
  const gridArea = new GridArea(0, 0)

  const maxValue = 10

  return (
    <PivotTableProvider maxValue={maxValue} suffix={args.suffix}>
      <HFlow hSpacing={0}>
        <PivotTableCell
          types={new Set([PivotTableCellType[args.type]])}
          key={gridArea.toString()}
          gridArea={gridArea}
          isEndRow={args.isEndRow}
          isEndColumn={args.isEndColumn}
        >
          {args.content}
        </PivotTableCell>
      </HFlow>
    </PivotTableProvider>
  )
}

EditableType.args = {
  suffix: '',
  isEndRow: true,
  isEndColumn: true,
  content: 5,
  type: PivotTableCellType.VALUE,
}

EditableType.argTypes = {
  content: {
    control: {
      type: 'number',
      min: 1,
      max: 10,
    },
  },
  type: {
    options: Object.keys(PivotTableCellType),
    control: {
      type: 'select',
    },
  },
}
