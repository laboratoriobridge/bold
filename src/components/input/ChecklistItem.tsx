import * as React from 'react'
import * as isUndefined from 'lodash/isUndefined'
import * as isArray from 'lodash/isArray'
import { CheckboxProps, Checkbox } from './Checkbox'
import { filterProps } from '../../util/Util'
import { List } from 'immutable'

export interface ChecklistItemProps extends CheckboxProps {
    optionValue: any
}

export class ChecklistItem extends React.Component<ChecklistItemProps> {
    constructor() {
        super()

        this.getCurrentValues = this.getCurrentValues.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getCurrentValues() {
        const { value } = this.props

        let previousValues = []

        if (!isUndefined(value) && value !== '') {
            previousValues = value
        }

        const currentValues = isArray(previousValues) ? [...previousValues] : List.isList(previousValues) ? previousValues : [previousValues]

        return currentValues
    }

    handleChange(event) {
        const { onChange } = this.props
        const values = this.getCurrentValues()

        if (event.target.checked) {
            values.push(this.props.optionValue)
        } else {
            values.splice(values.indexOf(this.props.optionValue), 1)
        }

        return onChange(values as any)
    }

    render() {
        const { optionValue } = this.props
        const values = this.getCurrentValues()

        const isChecked = values.indexOf(optionValue) > -1
        return (
            <Checkbox {...filterProps(this.props, ...excludedProps) }
                onChange={this.handleChange}
                checked={isChecked}
                onBlur={() => { }}
                value={optionValue} />
        )
    }
}

const excludedProps = [
    'optionValue'
]
