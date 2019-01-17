import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { HFlow } from '../../../layout'
import { Checkbox } from '../Checkbox/Checkbox'
import { DefaultItemType } from '../Select/Select'
import { SelectDownshiftRenderProps } from '../Select/SelectDownshift'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from '../Select/SelectDownshiftMenu'
import { TextInputProps } from '../TextInput/TextInput'

import { MultiDownshift, MultiDownshiftProps } from './MultiDownshift'
import { SelectMultiInput } from './SelectMultiInput'

export interface SelectMultiProps<T = DefaultItemType> extends MultiDownshiftProps<T>, WithStylesProps {
    renderItem?: SelectDownshiftMenuProps<T>['renderItem']
    onBlur?: TextInputProps['onBlur']
    disabled?: TextInputProps['disabled']
    status?: TextInputProps['status']
    placeholder?: TextInputProps['placeholder']
    clearable?: TextInputProps['clearable']
}

@withStyles
export class SelectMulti<T> extends React.Component<SelectMultiProps<T>> {

    render() {
        const { css, theme, renderItem, disabled, onBlur, status, clearable, ...rest } = this.props

        return (
            <MultiDownshift<T> {...rest}>
                {(downshift) => {
                    const {
                        // isOpen,
                        getInputProps,
                        selectedItems,
                        itemToString,
                        removeItem,
                        loadedItems,
                        isLoading,
                        inputValue,
                    } = downshift

                    return (
                        <div>
                            <SelectMultiInput<T>
                                items={selectedItems}
                                renderItem={itemToString}
                                onRemoveItem={this.handleItemRemove(removeItem)}
                                // icon={isOpen ? 'triangleUp' : 'triangleDown'}
                                disabled={disabled}
                                status={status}
                                // clearable={clearable}
                                onBlur={this.handleInputBlur(downshift)}
                                // onIconClick={this.handleInputIconClick(downshift)}
                                onFocus={this.handleInputFocus(downshift)}
                                onClick={this.handleInputClick(downshift)}
                                {...getInputProps()}
                                value={inputValue ? inputValue : ''}
                            />
                            <SelectDownshiftMenu
                                downshift={downshift}
                                items={loadedItems}
                                isLoading={isLoading}
                                renderItem={this.renderItem(selectedItems)}
                            />
                        </div>
                    )
                }}
            </MultiDownshift>
        )
    }

    handleItemRemove = (removeItem: Function) => (item: T) => removeItem(item)

    renderItem = (selectedItems: T[]) => (item: T) => (
        <HFlow hSpacing={0.5}>
            <Checkbox checked={selectedItems.includes(item)} tabIndex={-1} readOnly />
            {this.props.renderItem ? this.props.renderItem(item) : this.props.itemToString(item)}
        </HFlow>
    )

    handleInputIconClick = ({ toggleMenu }: SelectDownshiftRenderProps<T>) => () => toggleMenu()
    handleInputFocus = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputClick = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputBlur = ({ closeMenu }: SelectDownshiftRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
        closeMenu()
        this.props.onBlur && this.props.onBlur(e)
    }
}
