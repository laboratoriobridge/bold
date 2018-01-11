import * as React from 'react'

import { Text } from '../elements/Text/Text'

export interface FormErrorProps {
    error?: string
}

export class FormError extends React.Component<FormErrorProps, any> {

    render() {
        return (
            <Text color='red' size={0.75}>{this.props.error}</Text>
        )
    }

}
