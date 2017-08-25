import * as React from 'react'
import { Input, PublicInputProps } from './Input'

export interface PasswordInputProps extends PublicInputProps {
	placeholder?: string
}

export class PasswordInput extends React.Component<PasswordInputProps, any> {

	render() {
		return (
			<Input {...this.props} type='password' />
		)
	}

}
