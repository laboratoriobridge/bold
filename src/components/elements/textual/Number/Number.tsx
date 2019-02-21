import React from 'react'

import * as numberUtil from '../../../../util/number'

export interface NumberLabelProps {
    value: number
    minDecimalPlaces?: number
    maxDecimalPlaces?: number
    placeholder?: string
    title?: string
    abbrev?: boolean
    prefix?: string
    sufix?: string
}

export class Number extends React.Component<NumberLabelProps> {

    static defaultProps = {
        placeholder: '',
        prefix: '',
        sufix: '',
    }

    render() {
        const {
            value,
            minDecimalPlaces,
            maxDecimalPlaces,
            placeholder,
            title,
            abbrev,
            prefix,
            sufix,
            ...rest
        } = this.props

        return (
            <span {...rest} title={this.renderTitle()}>
                {this.renderNumber()}
            </span>
        )
    }

    renderTitle() {
        return this.props.title ||
            (this.props.abbrev && numberUtil.format(this.props.value))
    }

    renderNumber() {
        if (typeof this.props.value !== 'number' || isNaN(this.props.value)) {
            return this.props.placeholder
        }

        const num = this.props.abbrev ?
            numberUtil.abbrev(this.props.value, this.props.minDecimalPlaces, this.props.maxDecimalPlaces) :
            numberUtil.format(this.props.value, this.props.minDecimalPlaces, this.props.maxDecimalPlaces)

        return this.props.prefix + num + this.props.sufix
    }

}
