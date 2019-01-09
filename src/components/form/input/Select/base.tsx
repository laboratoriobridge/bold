import { createFilter } from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'

import { Omit } from '../../../../util'

export interface DefaultOptionType {
    value: any
    label: string
}

export const defaultSelectFilter = createFilter({
    ignoreAccents: true,
    ignoreCase: true,
})

export const defaultSelectProps: Omit<ReactSelectProps, 'theme'> = {
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
