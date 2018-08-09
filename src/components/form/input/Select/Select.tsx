import * as React from 'react'
import ReactSelect, { createFilter } from 'react-select'
import Option, { OptionProps } from 'react-select/lib/components/Option'
import { Props as ReactSelectProps } from 'react-select/lib/Select'

import { withStyles, WithStylesProps } from '../../../../styles/index'

import { createSelectStyles } from './createSelectStyle'

export interface DefaultOptionType {
    value: any
    label: string
}

export interface SelectProps<OptionType = DefaultOptionType> extends WithStylesProps, ReactSelectProps<OptionType> {
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
        placeholder: null,
        noOptionsMessage: () => 'Nenhum resultado encontrado.',
        getOptionLabel: (option) => option && option.label,
        getOptionValue: (option) => option && option.value,
    }

    render() {
        const { css, theme, status, disabled, ...rest } = this.props

        const styles = createSelectStyles(theme, status === 'error')

        return (
            <ReactSelect
                classNamePrefix='react-select'
                styles={styles}
                isDisabled={disabled}
                closeMenuOnSelect={!this.props.isMulti}
                components={{ Option: SelectOption }}
                {...rest}
            />
        )
    }
}

export interface SelectOptionProps<OptionType = any> extends OptionProps<OptionType> {
}

export class SelectOption<OptionType = any> extends React.Component<SelectOptionProps<OptionType>> {
    render() {
        return <Option {...this.props} />
    }
}
