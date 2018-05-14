import { Theme } from '../../../../styles'

export const createTableStyles = (theme: Theme) => ({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.75rem',
        border: `1px solid ${theme.color.gray90}`,
    },
    thead: {},
    tbody: {},
    row: {},
    th: {
        textAlign: 'left',
        padding: '0.5rem 1rem',
        borderBottom: `1px solid ${theme.color.gray90}`,
    },
    cell: {
        textAlign: 'left',
        padding: '0.5rem 1rem',
        borderBottom: `1px solid ${theme.color.gray90}`,
    },
})
