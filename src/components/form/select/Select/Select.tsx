import * as React from 'react'
import ReactSelect, { createFilter } from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'

import { withStyles, WithStylesProps } from '../../../../styles/index'

import createSelectStyle from '../createSelectStyle'

export interface DefaultOptionType {
    value: any
    label: string
}

export interface SelectProps<OptionType> extends WithStylesProps, ReactSelectProps<OptionType> {
    status?: '' | 'error'
    value?: any
    disabled?: boolean
}

export const defaultFilter = createFilter({
    ignoreAccents: true,
    ignoreCase: true,
})

@withStyles
export class Select<OptionType = DefaultOptionType> extends React.Component<SelectProps<OptionType>> {

    static defaultProps: SelectProps<any> = {
        backspaceRemovesValue: false,
        isMulti: false,
        isClearable: true,
        filterOption: defaultFilter,
        noOptionsMessage: () => 'Nenhum item encontrado',
        getOptionLabel: (option) => option && option.label,
        getOptionValue: (option) => option && option.value,
    }

    render() {
        const { css, theme, status, disabled, ...rest } = this.props

        const styles = createSelectStyle(theme)

        const classes = css(styles.default,
            status === 'error' && styles.error)

        return (
            <ReactSelect
                isDisabled={disabled}
                closeMenuOnSelect={!this.props.isMulti}
                className={classes}
                {...rest}
            />
        )
    }
}
