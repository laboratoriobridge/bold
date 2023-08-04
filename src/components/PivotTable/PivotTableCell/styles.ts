import { FontWeightProperty } from 'csstype'
import { Theme } from '../../../styles'
import { calculateCellColor } from './utils'
import { PivotTableCellProps } from './PivotTableCell'
import { PivotTableCellType } from './model'

export const pivotTableCellCreateStyles = (
  theme: Theme,
  key: string,
  maxValue: number,
  { types, children }: PivotTableCellProps
) => {
  const isValue = types.has(PivotTableCellType.VALUE)
  const isValueOrEmpty = isValue || types.has(PivotTableCellType.EMPTY)
  const isHeaderOrTotal = types.has(PivotTableCellType.HEADER) || types.has(PivotTableCellType.TOTAL)
  const isOnlyValue = isValue && types.size === 1

  const { color, backgroundColor } = calculateCellColor(theme, isOnlyValue, maxValue, children)

  return {
    root: {
      gridArea: key,
      backgroundColor,
      color,
      borderTop: `1px solid ${theme.pallete.divider}`,
      borderLeft: `1px solid ${theme.pallete.divider}`,
      display: 'flex',
      justifyContent: isValueOrEmpty ? 'flex-end' : 'flex-start',
      fontWeight: (isHeaderOrTotal ? 'bold' : 'normal') as FontWeightProperty,
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: '0.5rem 1rem',
    },
    endRowBorder: {
      borderBottom: `1px solid ${theme.pallete.divider}`,
    },
    endColumnBorder: {
      borderRight: `1px solid ${theme.pallete.divider}`,
    },
  }
}
