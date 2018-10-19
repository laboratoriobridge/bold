import { StylesConfig } from 'react-select/lib/styles'

import { focusBoxShadow, Theme } from '../../../../styles'

export const createSelectStyles = (theme: Theme, hasError: boolean): StylesConfig => ({
    control: (base, state) => ({
        ...base,
        background: state.isDisabled ? theme.pallete.surface.background : theme.pallete.surface.main,
        borderColor:
            (state.isDisabled && theme.pallete.gray.c80) ||
            (hasError && theme.pallete.status.danger.main) ||
            theme.pallete.gray.c70,
        borderRadius: theme.radius.input,
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
    valueContainer: (base, state) => ({
        ...base,
        padding: state.isMulti && state.hasValue ? '2px' : '2px 8px',
        lineHeight: 1,
    }),
    menu: (base) => ({
        ...base,
        margin: 0,
        borderRadius: theme.radius.input,
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
        margin: '0 2px',
    }),
    multiValueLabel: (base) => ({
        ...base,
        background: theme.pallete.surface.main,
        color: theme.pallete.text.main,
        borderTopLeftRadius: theme.radius.pill,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: theme.radius.pill,
        borderBottomRightRadius: 0,
        fontSize: theme.typography.sizes.text,
        padding: '1px 0.5rem',
        lineHeight: '1.25rem',
    }),
    multiValueRemove: (base) => ({
        ...base,
        cursor: 'pointer',
        background: theme.pallete.surface.background,
        borderTopLeftRadius: 0,
        borderTopRightRadius: theme.radius.pill,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: theme.radius.pill,
        paddingLeft: 0,
        paddingRight: 0,
        '&:hover': {
            background: theme.pallete.surface.background,
            color: theme.pallete.status.danger.main,
        },
    }),
})
