import * as React from 'react'

import { InputWrapper, InputWrapperProps } from './InputWrapper'
import { TextInputBase, TextInputBaseProps } from './TextInputBase'

export interface TextInputProps extends TextInputBaseProps,
    Pick<InputWrapperProps, 'icon' | 'iconPosition' | 'iconDisabled' | 'onIconClick'> {
    /**
     * Whether the input should show the clear icon button.
     */
    clearable?: boolean
    onClear?: InputWrapperProps['onClear']
}

export class TextInput extends React.Component<TextInputProps> {

    static defaultProps: Partial<TextInputProps> = {
        clearable: true,
    }

    render() {
        const {
            icon, iconPosition, iconDisabled, onIconClick, clearable, onClear,
            ...rest
        } = this.props

        return (
            <InputWrapper
                icon={icon}
                iconPosition={iconPosition}
                iconDisabled={this.isIconDisabled()}
                onIconClick={onIconClick}
                clearVisible={clearable && this.isClearVisible()}
                onClear={onClear ? onClear : this.handleClear}
            >
                <TextInputBase {...rest} />
            </InputWrapper>
        )
    }

    isClearVisible = (): boolean =>
        !this.props.disabled && (!!this.props.value || !!this.props.defaultValue)

    isIconDisabled = (): boolean =>
        this.props.iconDisabled !== undefined ? this.props.iconDisabled : this.props.disabled

    handleClear = () => {
        this.props.onChange && this.props.onChange(null)
    }

}
