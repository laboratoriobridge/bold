import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from './SelectDownshift'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from './SelectDownshiftMenu'

export interface DefaultItemType {
    value: any
    label: string
}

export interface SelectProps<T = DefaultItemType> extends SelectDownshiftProps<T>, WithStylesProps {
    renderItem?: SelectDownshiftMenuProps<T>['renderItem']
    components?: SelectDownshiftMenuProps<T>['components']
    onBlur?: TextInputProps['onBlur']
    disabled?: TextInputProps['disabled']
    status?: TextInputProps['status']
    placeholder?: TextInputProps['placeholder']
    clearable?: TextInputProps['clearable']
    style?: TextInputProps['style']
}

@withStyles
export class Select<T> extends React.Component<SelectProps<T>> {

    render() {
        const { css, theme, renderItem, disabled, onBlur, status, clearable, style, ...rest } = this.props

        return (
            <SelectDownshift<T> {...rest}>
                {(downshift) => {
                    const {
                        isOpen,
                        getInputProps,
                        loadedItems,
                        isLoading,
                    } = downshift

                    return (
                        <div>
                            <TextInput
                                {...getInputProps()}
                                icon={isOpen ? 'triangleUp' : 'triangleDown'}
                                disabled={disabled}
                                status={status}
                                clearable={clearable}
                                style={style}
                                onBlur={this.handleInputBlur(downshift)}
                                onIconClick={this.handleInputIconClick(downshift)}
                                onFocus={this.handleInputFocus(downshift)}
                                onClick={this.handleInputClick(downshift)}
                            />
                            <SelectDownshiftMenu
                                downshift={downshift}
                                items={loadedItems}
                                isLoading={isLoading}
                                renderItem={renderItem}
                            />
                        </div>
                    )
                }}
            </SelectDownshift>
        )
    }

    handleInputIconClick = ({ toggleMenu }: SelectDownshiftRenderProps<T>) => () => toggleMenu()
    handleInputFocus = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputClick = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputBlur = ({ closeMenu }: SelectDownshiftRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
        closeMenu()
        this.props.onBlur && this.props.onBlur(e)
    }
}
