import { StylesConfig } from 'react-select/lib/styles'

import { focusBoxShadow, Theme } from '../../../styles'

export const createSelectStyles = (theme: Theme, hasError: boolean): StylesConfig => ({
    control: (base, state) => ({
        ...base,
        background: state.isDisabled ? theme.pallete.surface.background : theme.pallete.surface.main,
        borderColor:
            (state.isDisabled && theme.pallete.gray.c80) ||
            (hasError && theme.pallete.status.danger.main) ||
            theme.pallete.gray.c70,
        borderRadius: theme.radius.main,
        boxShadow: state.isFocused && (hasError ? focusBoxShadow(theme, 'danger') : focusBoxShadow(theme)),
        cursor: 'text',
        transition: 'all .2s',
        minHeight: 'auto',
        '&:hover': {
            borderColor: theme.pallete.gray.c60,
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: theme.pallete.text.main,
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: 'none',
    }),
    dropdownIndicator: (base) => ({
        ...base,
        cursor: 'pointer',
        background: theme.pallete.surface.background,
        color: theme.pallete.text.main,
        padding: '5px 8px',
        '&:hover': {
            color: theme.pallete.text.main,
        },
    }),
    clearIndicator: (base) => ({
        ...base,
        cursor: 'pointer',
        color: theme.pallete.text.disabled,
        padding: '5px 8px',
        '&:hover': {
            color: theme.pallete.status.danger.main,
        },
    }),
    noOptionsMessage: (base) => ({
        ...base,
        background: theme.pallete.surface.background,
        color: theme.pallete.text.main,
        textAlign: 'left',
    }),
    loadingMessage: (base) => ({
        ...base,
        background: theme.pallete.surface.background,
        color: theme.pallete.text.main,
        textAlign: 'left',
    }),
    menu: (base) => ({
        ...base,
        margin: 0,
        borderRadius: theme.radius.main,
    }),
    menuList: (base) => ({
        ...base,
        padding: 0,
    }),
    option: (base, state) => ({
        ...base,
        color: theme.pallete.text.main,
        cursor: 'pointer',
        background: state.isFocused ? theme.pallete.surface.background : theme.pallete.surface.main,
        '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.pallete.divider}`,
        },
        '&:hover': {
            background: theme.pallete.surface.background,
        },
    }),
    multiValue: (base) => ({
        ...base,
        border: `1px solid ${theme.pallete.gray.c70}`,
    }),
    multiValueLabel: (base) => ({
        ...base,
        background: theme.pallete.surface.main,
        color: theme.pallete.text.main,
        fontSize: '0.75rem',
        padding: '1px 0.5rem',
    }),
    multiValueRemove: (base) => ({
        ...base,
        cursor: 'pointer',
        background: theme.pallete.surface.background,
        '&:hover': {
            background: theme.pallete.surface.background,
            color: theme.pallete.status.danger.main,
        },
    }),
})
