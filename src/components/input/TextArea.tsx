import * as React from 'react'

export interface TextAreaProps {
    disabled?: boolean
    placeholder?: string
    maxLength?: number
}

export class TextArea extends React.Component<TextAreaProps> {

    render() {
        return (
            <textarea className='textarea' {...this.props} />
        )
    }

}
