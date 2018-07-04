import { Styles, Theme } from '../../../../styles'

export const createTableStyles = (theme: Theme): Styles => ({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.75rem',
        border: `1px solid ${theme.pallete.divider}`,
    },
    tableHover: {
        'tr:hover td': {
            background: theme.pallete.surface.background,
        },
    },
    thead: {},
    tbody: {},
    row: {},
    th: {
        textAlign: 'left',
        padding: '0.5rem 1rem',
        borderBottom: `1px solid ${theme.pallete.divider}`,
    },
    cell: {
        textAlign: 'left',
        padding: '0 1rem',
        height: '2.5rem', // works like min-height for table cells
        borderBottom: `1px solid ${theme.pallete.divider}`,
    },
    pointer: {
        cursor: 'pointer',
    },
})
