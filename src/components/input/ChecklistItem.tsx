import * as React from 'react'
import { CheckboxProps, Checkbox } from './Checkbox/Checkbox'
import { List } from 'immutable'

export interface ChecklistItemProps extends CheckboxProps {
    optionValue: any
}

export class ChecklistItem extends React.Component<ChecklistItemProps> {

    getCurrentValues = () => {
        const { value } = this.props

        let previousValues = []

        if (value !== undefined && value !== '') {
            previousValues = value
        }

        const currentValues = Array.isArray(previousValues) ? [...previousValues] : List.isList(previousValues) ? previousValues : [previousValues]

        return currentValues
    }

    handleChange = (event) => {
        const { onChange } = this.props
        let values: any = this.getCurrentValues()

        if (event.target.checked) {
            if (List.isList(values)) {
                values = values.push(this.props.optionValue)
            } else {
                values.push(this.props.optionValue)
            }
        } else {
            if (List.isList(values)) {
                values = values.splice(values.indexOf(this.props.optionValue), 1)
            } else {
                values.splice(values.indexOf(this.props.optionValue), 1)
            }
        }

        return onChange(values as any)
    }

    render() {
        const { optionValue, ...rest } = this.props
        const values = this.getCurrentValues()

        const isChecked = values.indexOf(optionValue) > -1
        return (
            <Checkbox
                {...rest}
                onChange={this.handleChange}
                checked={isChecked}
                onBlur={this.onBlur}
                value={optionValue}
            />
        )
    }

    private onBlur = () => { }
}
