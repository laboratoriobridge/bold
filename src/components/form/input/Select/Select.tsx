import * as React from 'react'
import ReactSelect from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'

import { withStyles, WithStylesProps } from '../../../../styles/index'
import { Omit } from '../../../../util/types'
import { InputStatus } from '../TextInput/TextInput'

import { DefaultOptionType, defaultSelectProps } from './base'
import { SelectDropdownIndicator, SelectMultiValueRemove, SelectOption } from './components'
import { createSelectStyles } from './createSelectStyle'

export interface SelectProps<OptionType = DefaultOptionType> extends WithStylesProps,
    Omit<ReactSelectProps<OptionType>, 'theme'> {
    status?: InputStatus
    value?: any
    disabled?: boolean
}

@withStyles
export class Select<OptionType = DefaultOptionType> extends React.Component<SelectProps<OptionType>> {

    static defaultProps: Partial<SelectProps<any>> = defaultSelectProps

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
