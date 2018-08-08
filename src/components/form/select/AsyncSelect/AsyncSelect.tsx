import * as React from 'react'
import ReactAsyncSelect, { Props as ReactAsyncSelectProps } from 'react-select/lib/Async'
import { OptionsType } from 'react-select/lib/types'

import { withStyles, WithStylesProps } from '../../../../styles/index'
import { Omit } from '../../../../util/types'
import { createSelectStyles } from '../createSelectStyle'
import { DefaultOptionType } from '../Select/Select'

export interface AsyncSelectRequestParams {
    query: string
    pageSize: number
}

export interface AsyncSelectProps<OptionType> extends WithStylesProps,
    Omit<ReactAsyncSelectProps<OptionType>, 'loadOptions'> {
    getPage: (params: AsyncSelectRequestParams) => Promise<any>
    pageSize?: number
    searchDelay?: number
    status?: '' | 'error'
    value?: any
    disabled?: boolean
}

@withStyles
export class AsyncSelect<OptionType = DefaultOptionType> extends React.Component<AsyncSelectProps<OptionType>> {

    static defaultProps: Partial<AsyncSelectProps<any>> = {
        pageSize: 10,
        searchDelay: 500,
        cacheOptions: false,
        backspaceRemovesValue: false,
        isMulti: false,
        isClearable: true,
        loadingMessage: () => 'Carregando...',
        noOptionsMessage: () => 'Nenhum resultado encontrado.',
        getOptionLabel: (option) => option && option.label,
        getOptionValue: (option) => option && option.value,
    }

    private typingTimer: number

    render() {
        const { css, theme, status, disabled, ...rest } = this.props

        const styles = createSelectStyles(theme)

        // const classes = css(styles.default,
        //     status === 'error' && styles.error)

        return (
            <ReactAsyncSelect
                classNamePrefix='react-select-async'
                styles={styles}
                loadOptions={this.loadOptions}
                isDisabled={disabled}
                closeMenuOnSelect={!this.props.isMulti}
                {...rest}
            />
        )
    }

    private loadOptions = (inputValue: string, callback: (options: OptionsType<OptionType>) => void) => {
        if (this.typingTimer) {
            clearTimeout(this.typingTimer)
        }

        this.typingTimer = window.setTimeout(() => this.getPage(inputValue, callback), this.props.searchDelay)
    }

    private getPage = (inputValue: string, callback: (options: OptionsType<OptionType>) => void) => {
        this.props.getPage({
            query: inputValue,
            pageSize: this.props.pageSize,
        }).then(result => {
            callback(result.data || result)
        })
    }
}
