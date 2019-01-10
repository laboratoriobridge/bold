import * as React from 'react'
import { DropdownIndicator } from 'react-select/lib/components/indicators'
import { MultiValueRemove } from 'react-select/lib/components/MultiValue'
import Option, { OptionProps } from 'react-select/lib/components/Option'

import { Times } from '../../../elements/Icon/generated/Times'
import { TriangleDown } from '../../../elements/Icon/generated/TriangleDown'

export interface SelectOptionProps<OptionType = any> extends OptionProps<OptionType> {
}

export class SelectOption<OptionType = any> extends React.Component<SelectOptionProps<OptionType>> {
    render() {
        return <Option {...this.props} />
    }
}

export const SelectDropdownIndicator = (props: any) => {
    return (
        <DropdownIndicator {...props}>
            <TriangleDown width={20} height={20} />
        </DropdownIndicator>
    )
}

export const SelectMultiValueRemove = (props: any) => {
    return (
        <MultiValueRemove {...props}>
            <Times width={22} height={22} style={{ fill: 'currentColor' }} />
        </MultiValueRemove>
    )
}
