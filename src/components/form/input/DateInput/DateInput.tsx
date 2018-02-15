import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { MaskedInput } from '../MaskedInput/MaskedInput'
import { InputStatus } from '../TextInput/TextInput'

export interface DateInputProps extends WithStylesProps {
    status?: InputStatus
    disabled?: boolean
}

@withStyles
export class DateInput extends React.Component<DateInputProps> {
    render() {
        return (
            <MaskedInput
                {...this.props}
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                placeholder='dd/mm/yyyy'
            />
        )
    }
}
