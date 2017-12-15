import * as React from 'react'
import { ChecklistItem, ChecklistItemProps } from '../../input/ChecklistItem'
import { Field } from '../Field'
import { WrappedFieldProps } from 'redux-form'

export interface ChecklistItemFieldProps extends ChecklistItemProps {
    name: string
}

export class ChecklistItemField extends React.Component<ChecklistItemFieldProps, any> {

    render() {
        return (
            <Field
                {...this.props}
                hasWrapper={false}
                render={this.renderCheck}
            />
        )
    }

    private renderCheck = (props: WrappedFieldProps) => (
        <ChecklistItem
            {...this.props}
            {...props.input}
        />
    )

}
