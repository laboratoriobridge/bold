import 'react-select/dist/react-select.css'

import { focusBoxShadow, Theme } from '../../../styles'

const createSelectStyle = (theme: Theme) => {
    return {
        default: {
            fontSize: '0.75rem',
            borderRadius: theme.radius.main,
            transition: 'box-shadow .2s',
            backfaceVisibility: 'hidden', // fixes box-shadow transition bug
            '.Select-control': {
                backgroundColor: theme.pallete.surface.main,
                border: 'solid 1px ' + theme.pallete.gray.c80,
                borderRadius: theme.radius.main,
                color: theme.pallete.gray.c30,
                height: '2rem',
                ':hover': {
                    borderColor: theme.pallete.gray.c60,
                    boxShadow: 'none',
                },
                '.Select-clear-zone': {
                    paddingRight: '0.5rem',
                    ':hover': {
                        color: theme.pallete.primary.main,
                    },
                    '.Select-clear': {
                        fontSize: '1.5rem',
                        lineHeight: '1.5rem',
                    },
                },
                '.Select-placeholder, .Select-value': {
                    padding: '0 1rem',
                    lineHeight: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: 'auto',
                },
                '.Select-value-label': {
                    color: theme.pallete.gray.c30 + ' !important',
                },
                '.Select-input': {
                    height: 'auto',
                    padding: '0 1rem',
                    'input': {
                        lineHeight: '1rem',
                        padding: '0.4rem 0',
                    },
                },
                '.Select-arrow-zone': {
                    backgroundColor: theme.pallete.surface.background,
                    paddingRight: 0,
                    width: 30,
                },
                '.Select-menu-outer': {
                    fontSize: '1rem',
                },
            },
            // Multi-Select
            '&.Select--multi': {
                '.Select-control': {
                    '.Select-multi-value-wrapper': {
                        display: 'inline-flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    },
                    '.Select-input': {
                        padding: '0 .5rem',
                        height: 'auto',
                    },
                    '.Select-value': {
                        padding: 0,
                        margin: '0.25rem 0',
                        lineHeight: '1em',
                        background: theme.pallete.surface.main,
                        border: '1px solid ' + theme.pallete.gray.c80,
                        fontSize: '1em',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'stretch',
                        marginLeft: '0.5rem',
                    },
                    '.Select-value-label': {
                        color: theme.pallete.gray.c30 + ' !important',
                        padding: '4px 8px',
                        alignSelf: 'center',
                        whiteSpace: 'nowrap',
                        maxWidth: '200px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    '.Select-value-icon': {
                        background: theme.pallete.surface.background,
                        color: theme.pallete.text.main,
                        fontSize: '1.5em',
                        fontWeight: 'normal',
                        border: 0,
                        order: 1,
                        padding: '0 .25rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                    },
                },
            },
            '.Select-option:hover, .Select-option.is-focused': {
                background: theme.pallete.surface.background,
            },
            '&.is-focused': {
                boxShadow: focusBoxShadow(theme),
                '.Select-menu-outer': {
                    borderColor: theme.pallete.gray.c80,
                    borderBottomLeftRadius: theme.radius.main,
                    borderBottomRightRadius: theme.radius.main,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                },
            },
            '&.is-focused:not(.is-opened)': {
                '.Select-control': {
                    borderColor: theme.pallete.gray.c80,
                    boxShadow: 'none',
                },
            },
            '&.is-disabled': {
                '.Select-control': {
                    backgroundColor: theme.pallete.surface.background,
                },
            },
        },
        error: {
            '.Select-control': {
                borderColor: theme.pallete.status.error.main,
            },
            '&.is-focused': {
                boxShadow: focusBoxShadow(theme, 'error'),
            },
        },
    }
}

export default createSelectStyle
