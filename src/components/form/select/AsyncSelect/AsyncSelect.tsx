import * as React from 'react'
import * as Select from 'react-select'

import { withStyles, WithStylesProps } from '../../../../styles/index'

import createSelectStyle from '../createSelectStyle'

export interface AsyncSelectRequestParams {
    query: string
    pageSize: number
}

export interface AsyncSelectProps extends WithStylesProps,
    Pick<Select.ReactAsyncSelectProps,
    'autoload' |
    'backspaceRemoves' |
    'cache' |
    'clearable' |
    'clearValueText' |
    'disabled' |
    'labelKey' |
    'loadingPlaceholder' |
    'ignoreAccents' |
    'ignoreCase' |
    'multi' |
    'noResultsText' |
    'onBlur' |
    'onChange' |
    'optionRenderer' |
    'placeholder' |
    'valueKey'
    > {
    getPage: (params: AsyncSelectRequestParams) => Promise<any>
    maxLength?: number
    pageSize?: number
    searchDelay?: number
    status?: '' | 'error'
    value?: any
}

@withStyles
export class AsyncSelect extends React.Component<AsyncSelectProps> {

    static defaultProps: Partial<AsyncSelectProps> = {
        labelKey: 'label',
        valueKey: 'value',
        autoload: false,
        backspaceRemoves: false,
        cache: false,
        clearable: true,
        clearValueText: 'Limpar seleção',
        loadingPlaceholder: 'Carregando...',
        ignoreAccents: false,
        ignoreCase: true,
        multi: false,
        noResultsText: 'Nenhum item encontrado.',
        pageSize: 10,
        placeholder: '',
        searchDelay: 500,
    }

    private typingTimer: number

    render() {
        const { css, theme, status, ...rest } = this.props

        const styles = createSelectStyle(theme)

        const classes = css(styles.default,
            status === 'error' && styles.error)

        return (
            <Select.Async
                className={classes}
                options={[]}
                {...rest}
                inputProps={{ maxLength: this.props.maxLength }}
                loadOptions={this.loadOptions}
                onBlur={this.blur}
                closeOnSelect={!this.props.multi}
                valueRenderer={this.renderValue}
            />
        )
    }

    private loadOptions = (query, callback) => {
        if (this.typingTimer) {
            clearTimeout(this.typingTimer)
        }
        if (query !== '') {
            this.typingTimer = window.setTimeout(() => this.getPage(query, callback), this.props.searchDelay)
        } else {
            callback(null, {})
        }
    }

    private getPage = (query, callback) => {
        const params = {
            query,
            pageSize: this.props.pageSize,
        }

        this.props.getPage(params)
            .then(result => {
                const response = {
                    options: result.data || result,
                }
                callback(null, response)
            }).catch(error => {
                callback(error, null)
            })
    }

    private blur(): React.EventHandler<React.FocusEvent<{}>> {
        return () => {
            if (this.props.onBlur) {
                if (this.props.value) {
                    this.props.onBlur(this.props.value)
                } else {
                    this.props.onBlur(null)
                }
            }
        }
    }

    private renderValue = (option) => {
        const label = option[this.props.labelKey]

        return (
            <span title={label}>{label}</span>
        )
    }
}
