import { SerializedStyles } from '@emotion/serialize'
import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { hexToRGB, useStyles } from '../../../styles'
import { range } from '../../../util'
import { formatDecimalOrInteger } from '../../../util/number'
import { GridArea } from './classes/GridArea'
import { selectPivotTableCellElements } from './utils'
import { pivotTableCellCreateStyles } from './styles'
import { PivotTableContext } from './PivotTableProvider'
import { PivotTableCellType } from './model'

export interface PivotTableCellProps {
  /**
   * Types that cell can assume
   */
  types: Set<PivotTableCellType>
  /**
   * Region of the table the cell refers to
   */
  gridArea: GridArea
  /**
   * Cell's children
   */
  children?: string | number
  /**
   * True if the cell if the end of a column
   */
  isEndColumn?: boolean
  /**
   * True if the cell is the end of a row
   */
  isEndRow?: boolean
  /**
   * Additional styles
   */
  styles?: SerializedStyles
}

export function PivotTableCell(props: PivotTableCellProps) {
  const { types, gridArea, children, isEndColumn = false, isEndRow = false, styles } = props

  const isHeader = types.has(PivotTableCellType.HEADER)
  const isValue = types.has(PivotTableCellType.VALUE)
  const isValueOrEmpty = isValue || types.has(PivotTableCellType.EMPTY)

  const { rowStart, rowEnd, columnStart, columnEnd } = gridArea
  const key = gridArea.toString()

  const context = useContext(PivotTableContext)
  const {
    classes: { root, endColumnBorder, endRowBorder },
    css,
    theme,
  } = useStyles(pivotTableCellCreateStyles, key, context.maxValue, props)

  const relatedPivotTableCells = useRef<NodeListOf<HTMLElement>>()

  useEffect(() => {
    relatedPivotTableCells.current = selectPivotTableCellElements(rowStart, columnStart)
  }, [rowStart, columnStart])

  const handleMouseEnter = () => {
    if (isValueOrEmpty) {
      relatedPivotTableCells.current.forEach((element) => {
        let backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color')

        if (backgroundColor === hexToRGB(theme.pallete.primary.c100)) {
          backgroundColor = hexToRGB(theme.pallete.gray.c90)
        }

        backgroundColor = backgroundColor.replace('rgb', 'rgba').replace(')', ', 0.5)')
        element.setAttribute('style', `background-color: ${backgroundColor}`)
      })
    }
  }

  const handleMouseLeave = () => {
    if (isValueOrEmpty) {
      relatedPivotTableCells.current.forEach((element) => element.removeAttribute('style'))
    }
  }

  const rowNumbers = useMemo(() => range(rowStart, rowEnd).join(' '), [rowStart, rowEnd])
  const columnNumbers = useMemo(() => range(columnStart, columnEnd).join(' '), [columnStart, columnEnd])
  const className = css(root, isEndColumn && endColumnBorder, isEndRow && endRowBorder, styles)

  return (
    <div
      key={key}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-rownumber={rowNumbers}
      data-columnnumber={columnNumbers}
      className={className}
    >
      {!isHeader && typeof children === 'number' ? formatDecimalOrInteger(children) : children}
      {isValue ? context.suffix : null}
    </div>
  )
}
