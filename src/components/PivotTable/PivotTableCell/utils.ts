import { Theme } from '../../../styles'
import { format } from '../../../util/number'

/**
 * Formats a numeric value to its local number format representation, using two digits when it is decimal
 * @param value Value to be formatted
 * @returns The formatted value
 */
export const numberFormatter = (value: number): string => {
  const isDecimal = value % 1 !== 0

  const formatOptions: Intl.NumberFormatOptions = isDecimal
    ? {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    : {
        maximumFractionDigits: 0,
      }

  return format(value, formatOptions)
}

interface CellColorProps {
  color: string
  backgroundColor: string
}

/**
 * Calculates text and background colors based on cell type and its content
 * @param theme
 * @param isOnlyValue True if cell type includes only 'value'
 * @param maxValue The maximum expected value for all the table
 * @param cellContent The cell's content
 * @returns An object containing the text and background colors
 */
export const calculateCellColor = (
  theme: Theme,
  isOnlyValue: boolean,
  maxValue: number,
  cellContent?: number | string
): CellColorProps => {
  let color = theme.pallete.gray.c10
  let backgroundColor = theme.pallete.surface.main
  const cellValue = Number(cellContent)

  if (isOnlyValue && cellValue) {
    let colorIndex = 110 - Math.ceil((cellValue * 100) / maxValue / 10) * 10
    colorIndex = colorIndex > 100 ? 100 : colorIndex < 10 ? 10 : colorIndex
    if (colorIndex < 70) {
      color = theme.pallete.gray.c100
    }

    backgroundColor = theme.pallete.primary[`c${colorIndex}`]
  }

  return {
    color,
    backgroundColor,
  }
}

/**
 * Selects all the elements that has the given row and column numbers as its 'data-rownumber' and 'data-columnnumber' attributes
 */
export const selectPivotTableCellElements = (row: number, column: number): NodeListOf<HTMLElement> =>
  document.querySelectorAll(`div[data-rownumber~="${row}"], div[data-columnnumber~="${column}"]`)
