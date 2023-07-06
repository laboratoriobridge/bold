import { SerializedStyles } from '@emotion/serialize'
import React, { useContext } from 'react'
import { hexToRGB, useStyles } from '../../../styles'
import { range } from '../../../util'
import { GridArea } from './classes/GridArea'
import { numberFormatter, selectPivotTableCellElements } from './utils'
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
  const { types, gridArea, children, isEndColumn, isEndRow, styles } = props

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
  } = useStyles(pivotTableCellCreateStyles, key, context.total, props)

  const handleMouseEnter = () => {
    if (isValueOrEmpty) {
      selectPivotTableCellElements(rowStart, columnStart).forEach((element) => {
        let rgbColor = window.getComputedStyle(element).getPropertyValue('background-color')

        if (hexToRGB(theme.pallete.surface.main) === rgbColor) {
          element.setAttribute('style', `background-color: rgba(240, 240, 245, 0.5)`)
        } else {
          rgbColor = rgbColor.replace('rgb', 'rgba')
          rgbColor = rgbColor.replace(')', ', 0.5)')
          element.setAttribute('style', `background-color: ${rgbColor}`)
        }
      })
    }
  }

  const handleMouseLeave = () => {
    if (isValueOrEmpty) {
      selectPivotTableCellElements(rowStart, columnStart).forEach((element) => element.removeAttribute('style'))
    }
  }

  const rowNumbers = range(rowStart, rowEnd).join(' ')
  const columnNumbers = range(columnStart, columnEnd).join(' ')
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
      {!isHeader && typeof children === 'number' ? numberFormatter(children) : children}
      {isValue ? context.suffix : null}
    </div>
  )
}
