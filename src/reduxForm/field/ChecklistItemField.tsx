import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { ChecklistItem, ChecklistItemProps } from '../../components/input/ChecklistItem'
import field, { FieldProps } from '../hoc/field'

export interface ChecklistItemFieldProps extends ChecklistItemProps, Partial<WrappedFieldProps<any>> {

}

class ChecklistItemFieldCmp extends React.Component<ChecklistItemFieldProps, any> {

    render() {
        return (
            <ChecklistItem {...this.props.input} onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave} optionValue={this.props.optionValue} label={this.props.label} disabled={this.props.disabled}>
                {this.props.children}
            </ChecklistItem>
        )
    }

}

export const ChecklistItemField: React.ComponentClass<FieldProps & ChecklistItemFieldProps> = field({ hasWrapper: false })(ChecklistItemFieldCmp)
