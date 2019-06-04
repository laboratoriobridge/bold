import { CSSProperties } from 'react'

import { Theme } from '../../../styles'

export const createTableStyles = (theme: Theme) => ({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
  tableHover: {
    'tr:hover td': {
      background: theme.pallete.surface.background,
    },
  } as CSSProperties,
  thead: {} as CSSProperties,
  tbody: {} as CSSProperties,
  row: {} as CSSProperties,
  th: {
    textAlign: 'left',
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
  cell: {
    textAlign: 'left',
    padding: '0 1rem',
    height: '2.5rem', // works like min-height for table cells
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
  pointer: {
    cursor: 'pointer',
  } as CSSProperties,
})
