import * as React from 'react'
import ReactSelect, { createFilter } from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'

import { withStyles, WithStylesProps } from '../../../../styles/index'
import { Omit } from '../../../../util/types'
import { InputStatus } from '../TextInput/TextInput'

import { SelectDropdownIndicator, SelectMultiValueRemove, SelectOption } from './components'
import { createSelectStyles } from './createSelectStyle'

export interface DefaultOptionType {
    value: any
    label: string
}

export interface SelectProps<OptionType = DefaultOptionType> extends WithStylesProps,
    Omit<ReactSelectProps<OptionType>, 'theme'> {
    status?: InputStatus
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
        const { css, theme, status, disabled, components, ...rest } = this.props

        const styles = createSelectStyles(theme, status === 'error')

        return (
            <ReactSelect
                classNamePrefix='react-select'
                styles={styles}
                isDisabled={disabled}
                closeMenuOnSelect={!this.props.isMulti}
                components={{
                    Option: SelectOption,
                    DropdownIndicator: SelectDropdownIndicator,
                    MultiValueRemove: SelectMultiValueRemove,
                    ...components,
                }}
                {...rest}
            />
        )
    }
}
