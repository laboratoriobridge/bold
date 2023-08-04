import { Theme } from '../../../styles'
import { clamp } from '../../../util'

interface CellColorProps {
  color: string
  backgroundColor: string
}

const MIN_COLOR_INDEX_OF_LIGHT_BG = 70

/**
 * Calculates text and background colors based on cell type and its content.
 *
 * If cell type is only 'value' and its content is a number:
 * - increase saturation of background color every 10% of maximum value
 * - makes the text color lighter when background becames too dark
 *
 * Otherwise, keep the default background and text color.
 *
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
  let backgroundColor = theme.pallete.primary.c100
  const cellValue = Number(cellContent)

  if (isOnlyValue && cellValue) {
    const percentageOfMaxValue = steppedPercentage(cellValue, maxValue, 10)
    const bgColorIndex = clamp(110 - percentageOfMaxValue, 10, 100)

    if (bgColorIndex < MIN_COLOR_INDEX_OF_LIGHT_BG) {
      color = theme.pallete.gray.c100
    }

    backgroundColor = theme.pallete.primary[`c${bgColorIndex}`]
  }

  return {
    color,
    backgroundColor,
  }
}

const steppedPercentage = (value: number, baseValue: number, step: number) =>
  Math.ceil(((value / baseValue) * 100) / step) * step

/**
 * Selects all the elements that has the given row and column numbers as its 'data-rownumber' and 'data-columnnumber' attributes
 */
export const selectPivotTableCellElements = (row: number, column: number): NodeListOf<HTMLElement> =>
  document.querySelectorAll(`div[data-rownumber~="${row}"], div[data-columnnumber~="${column}"]`)
