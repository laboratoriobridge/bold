import * as React from 'react'
import ReactSelect, { Option, ReactSelectProps } from 'react-select'

import { withStyles, WithStylesProps } from '../../../../styles/index'
import createSelectStyle from '../createSelectStyle'

export interface SelectOption extends Option {

}

export interface SelectProps extends WithStylesProps,
    Pick<ReactSelectProps,
    'backspaceRemoves' |
    'clearable' |
    'clearValueText' |
    'disabled' |
    'labelKey' |
    'ignoreAccents' |
    'ignoreCase' |
    'multi' |
    'noResultsText' |
    'onBlur' |
    'onChange' |
    'placeholder' |
    'valueKey'
    > {
    options: SelectOption[]
    status?: '' | 'error'
    value?: any
}

@withStyles
export class Select extends React.Component<SelectProps> {

    static defaultProps: Partial<SelectProps> = {
        labelKey: 'label',
        valueKey: 'value',
        clearable: true,
        multi: false,
        placeholder: '',
        clearValueText: 'Limpar seleção',
        noResultsText: 'Nenhum item encontrado.',
        backspaceRemoves: false,
        ignoreAccents: true,
        ignoreCase: true,
    }

    render() {
        const { css, theme, status, ...rest } = this.props

        const styles = createSelectStyle(theme)

        const classes = css(styles.default,
            status === 'error' && styles.error)

        return (
            <ReactSelect
                {...rest}
                closeOnSelect={!this.props.multi}
                className={classes}
                onBlur={this.blur}
                valueRenderer={this.renderValue}
            />
        )
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
