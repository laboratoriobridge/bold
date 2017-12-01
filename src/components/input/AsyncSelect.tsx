import * as React from 'react'
import * as Select from 'react-select'
import axios from 'axios'

export interface AsyncSelectProps extends Partial<Select.ReactAsyncSelectProps> {
    url: string
    value?: any
    pageSize?: number
    searchDelay?: number
    customizeParams?: any,
    maxLength?: number
}

export class AsyncSelect extends React.Component<AsyncSelectProps> {
    private typingTimer: number

    static defaultProps: Partial<AsyncSelectProps> = {
        autoload: false,
        pageSize: 10,
        searchDelay: 500,
        valueKey: 'id',
        labelKey: 'nome',
        multi: false,
        cache: false,
        placeholder: '',
        clearValueText: 'Limpar seleção',
        loadingPlaceholder: 'Carregando...',
        searchPromptText: 'Digite para pesquisar',
        noResultsText: 'Nenhum item encontrado.',
        backspaceRemoves: false,
        ignoreAccents: false,
        ignoreCase: true,
        clearable: true,
    }

    render() {
        const { value, onBlur, ...rest } = this.props
        return (
            <Select.Async
                options={[]}
                {...rest}
                inputProps={{ maxLength: this.props.maxLength }}
                value={value && value.toJS ? value.toJS() : value}
                onBlur={this.blur()}
                loadOptions={this.loadOptions}
            />
        )
    }

    private loadOptions = (query, callback) => {
        clearTimeout(this.typingTimer)
        if (this.typingTimer) {
            clearTimeout(this.typingTimer)
        }
        this.typingTimer = setTimeout(this.getPage.bind(this, query, callback), this.props.searchDelay)
    }

    private getPage(query, callback) {
        let params = {
            query: query,
            pageSize: this.props.pageSize
        }

        params = this.props.customizeParams ? this.props.customizeParams(params) : params

        return axios.get(this.props.url, { params: params })
            .then(data => {
                let response = {
                    options: data.data
                }
                callback(null, response)
            }).catch(error => {
                callback(error, null)
            })
    }

    private blur = (): React.EventHandler<React.FocusEvent<{}>> => {
        return () => {
            if (this.props.onBlur) {
                if (this.props.value && this.props.value[this.props.labelKey]) {
                    this.props.onBlur(this.props.value)
                } else {
                    this.props.onBlur(null)
                }
            }
        }
    }
}
