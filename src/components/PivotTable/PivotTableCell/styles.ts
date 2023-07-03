import { FontWeightProperty } from 'csstype'
import { Theme } from '../../../styles'
import { calculateCellColor } from './utils'
import { PivotTableCellProps } from './PivotTableCell'

export const pivotTableCellCreateStyles = (
  theme: Theme,
  key: string,
  totalValue: number,
  { types, children }: PivotTableCellProps
) => {
  const isValue = types.includes('value')
  const isValueOrEmpty = isValue || types.includes('empty')
  const isHeaderOrTotal = types.includes('header') || types.includes('total')
  const isOnlyValue = isValue && types.length === 1

  const { color, backgroundColor } = calculateCellColor(theme, isOnlyValue, totalValue, children)

  return {
    root: {
      gridArea: key,
      backgroundColor: backgroundColor,
      color: color,
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
