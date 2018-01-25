import * as React from 'react'
import * as Select from 'react-select'
import 'react-select/dist/react-select.css'

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
    'placeholder' |
    'searchPromptText' |
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
        autoload: false,
        pageSize: 10,
        searchDelay: 500,
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
            />
        )
    }

    private loadOptions = (query, callback) => {
        clearTimeout(this.typingTimer)
        if (this.typingTimer) {
            clearTimeout(this.typingTimer)
        }
        this.typingTimer = setTimeout(this.getPage(query, callback), this.props.searchDelay)
    }

    private getPage = (query, callback) => {
        const params = {
            query,
            pageSize: this.props.pageSize,
        }

        return this.props.getPage(params)
            .then(result => {
                const response = {
                    options: result.data,
                }
                callback(null, response)
            }).catch(error => {
                callback(error, null)
            })
    }

    private blur(): React.EventHandler<React.FocusEvent<{}>> {
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
