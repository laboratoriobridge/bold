import * as React from 'react'
import ReactSelect from 'react-select'

import { withStyles } from '../../../../styles/index'

import { BaseSelectProps, createSelectBaseProps, DefaultOptionType, defaultSelectProps } from './base'

export type SelectProps<T = DefaultOptionType> = BaseSelectProps<T>

@withStyles
export class Select<T = DefaultOptionType> extends React.Component<SelectProps<T>> {
    static defaultProps: Partial<SelectProps<any>> = defaultSelectProps

    render() {
        return <ReactSelect {...createSelectBaseProps(this.props)} />
    }
}
