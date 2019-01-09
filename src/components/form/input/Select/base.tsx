import { createFilter } from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'

import { WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util'
import { InputStatus } from '../TextInput/TextInput'

import { SelectDropdownIndicator, SelectMultiValueRemove, SelectOption } from './components'
import { createSelectStyles } from './createSelectStyle'

export interface DefaultOptionType {
    value: any
    label: string
}

export const defaultSelectFilter = createFilter({
    ignoreAccents: true,
    ignoreCase: true,
})

export const defaultSelectProps: Partial<Omit<ReactSelectProps, 'theme'>> = {
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

export interface BaseSelectProps<T> extends Omit<ReactSelectProps<T>, 'theme'>, WithStylesProps {
    status?: InputStatus
    disabled?: boolean
}

export function createSelectBaseProps<T>(props: BaseSelectProps<T>): Partial<ReactSelectProps<T>> {
    const { css, theme, status, disabled, components, ...rest } = props
    const styles = createSelectStyles(theme, status === 'error')

    return {
        classNamePrefix: 'react-select',
        styles,
        isDisabled: disabled,
        closeMenuOnSelect: !props.isMulti,
        components: {
            Option: SelectOption,
            DropdownIndicator: SelectDropdownIndicator,
            MultiValueRemove: SelectMultiValueRemove,
            ...components,
        },
        ...rest,
    }
}
