import * as React from 'react'
import { ChecklistItem, ChecklistItemProps } from '../../input/ChecklistItem'
import { Field } from '../Field'

export interface ChecklistItemFieldProps extends ChecklistItemProps {
    name: string
}

export class ChecklistItemField extends React.Component<ChecklistItemFieldProps, any> {

    render() {
        const { label, ...rest } = this.props
        return (
            <Field
                {...rest}
                hasWrapper={false}
                render={props =>
                    <ChecklistItem
                        label={label}
                        {...rest}
                        {...props.input}
                    />
                }
            />
        )
    }

}
