import * as React from 'react'
import ReactAsyncSelect, { AsyncProps } from 'react-select/lib/Async'

import { withStyles } from '../../../../styles/index'

import { BaseSelectProps, createSelectBaseProps, DefaultOptionType, defaultSelectProps } from './base'

export type AsyncSelectProps<T = DefaultOptionType> = BaseSelectProps<T> & AsyncProps<T>

@withStyles
export class AsyncSelect<T = DefaultOptionType> extends React.Component<AsyncSelectProps<T>> {
    static defaultProps: Partial<AsyncSelectProps<any>> = defaultSelectProps

    render() {
        return <ReactAsyncSelect {...createSelectBaseProps(this.props)} />
    }
}
