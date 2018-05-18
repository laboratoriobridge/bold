import * as React from 'react'

import { Icon } from '../elements/Icon/Icon'
import { Text } from '../elements/textual'
import { HFlow } from '../layout/Flow/HFlow'

export interface FormErrorProps {
    error?: string
}

export class FormError extends React.Component<FormErrorProps, any> {

    render() {
        return (
            <HFlow hSpacing={0.25}>
                <Text color='error' size={0.75}>{this.props.error}</Text>
                <Icon icon='informationCircle' color='error' size={1} />
            </HFlow>
        )
    }

}
