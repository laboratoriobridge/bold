import 'react-select/dist/react-select.css'

import { Theme } from '../../../styles/index'

const createSelectStyle = (theme: Theme) => {
    return {
        default: {
            fontSize: '0.75rem',
            '.Select-control': {
                backgroundColor: theme.color.white,
                border: 'solid 1px ' + theme.color.gray80,
                borderRadius: 2,
                color: theme.color.gray30,
                height: 30,
                lineHeight: '1',
                ':hover': {
                    borderColor: theme.color.gray60,
                    boxShadow: 'none',
                },
                '.Select-clear-zone': {
                    paddingRight: '0.5rem',
                    ':hover': {
                        color: theme.color.primary,
                    },
                    '.Select-clear': {
                        height: 30,
                        fontSize: '1.5rem',
                        lineHeight: '1.7rem',
                    },
                },
                '.Select-placeholder, .Select-value': {
                    padding: '0 1rem',
                    lineHeight: '2rem',
                },
                '.Select-value-label': {
                    color: theme.color.gray30, // não funciona ainda
                },
                '.Select-input': {
                    height: 30,
                    padding: '0 1rem',
                    'input': {
                        lineHeight: '1',
                        padding: '0.4rem 0',
                    },
                },
                '.Select-arrow-zone': {
                    backgroundColor: theme.color.background,
                    paddingRight: 0,
                    width: 30,
                },
                '.Select-menu-outer': {
                    fontSize: '1rem',
                },
            },
            '&.is-focused': {
                '.Select-control': {
                    borderColor: theme.color.primary,
                },
                '.Select-menu-outer': {
                    borderColor: theme.color.primary,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                },
            },
            '&.is-focused:not(.is-opened)': {
                '.Select-control': {
                    boxShadow: 'none',
                },
            },
        },
        error: {
            '.Select-control': {
                borderColor: theme.color.red,
            },
        },
    }
}

export default createSelectStyle
