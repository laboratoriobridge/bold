import * as React from 'react'

import { Label } from '../elements/Label'
import { Text } from '../elements/textual/Text/Text'
import { Spacing } from '../layout/Spacing/Spacing'

export interface FormLabelProps {
    label?: React.ReactNode
    required?: boolean
}

export class FormLabel extends React.Component<FormLabelProps> {

    render() {
        const fieldRequired = (
            this.props.required &&
            <Spacing left={0.25}><Text tag='label' color='red' size={0.75} weight='bold'>&#42;</Text></Spacing>
        )

        return (
            <>
            <Label value={this.props.label} />
            {fieldRequired}
            </>
        )
    }

}
