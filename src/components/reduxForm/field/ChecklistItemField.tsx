import * as React from 'react'
import { ChecklistItem, ChecklistItemProps } from '../../input/ChecklistItem'
import { Field } from '../Field'

export interface ChecklistItemFieldProps extends ChecklistItemProps {
    name: string
}

export class ChecklistItemField extends React.Component<ChecklistItemFieldProps, any> {

    render() {
        return (
            <Field
                {...this.props}
                hasWrapper={false}
                render={props =>
                    <ChecklistItem
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }

}
