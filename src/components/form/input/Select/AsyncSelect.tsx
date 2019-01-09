import * as React from 'react'
import ReactAsyncSelect, { Props as ReactAsyncSelectProps } from 'react-select/lib/Async'

import { withStyles, WithStylesProps } from '../../../../styles/index'
import { Omit } from '../../../../util/types'
import { createSelectStyles } from '../Select/createSelectStyle'
import { DefaultOptionType } from '../Select/Select'
import { InputStatus } from '../TextInput/TextInput'

import { SelectDropdownIndicator, SelectMultiValueRemove, SelectOption } from './components'

export interface AsyncSelectProps<OptionType = DefaultOptionType> extends WithStylesProps,
    Omit<ReactAsyncSelectProps<OptionType>, 'theme'> {
    status?: InputStatus
    disabled?: boolean
}

@withStyles
export class AsyncSelect<OptionType = DefaultOptionType> extends React.Component<AsyncSelectProps<OptionType>> {

    static defaultProps: Partial<AsyncSelectProps<any>> = {
        pageSize: 10,
        backspaceRemovesValue: false,
        isMulti: false,
        isClearable: true,
        placeholder: null,
        loadingMessage: () => 'Carregando...',
        noOptionsMessage: () => 'Nenhum resultado encontrado.',
        getOptionLabel: (option) => option && option.label,
        getOptionValue: (option) => option && option.value,
    }

    render() {
        const { css, theme, status, disabled, components, ...rest } = this.props

        const styles = createSelectStyles(theme, status === 'error')

        return (
            <ReactAsyncSelect
                classNamePrefix='react-select-async'
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
