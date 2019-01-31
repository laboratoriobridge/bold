import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../../styles'
import { Omit } from '../../../../../util'
import { HFlow } from '../../../../layout'
import { Checkbox } from '../../Checkbox/Checkbox'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from '../SelectSingle/SelectDownshiftMenu'
import { DefaultItemType } from '../SelectSingle/SelectSingle'

import { MultiDownshift, MultiDownshiftProps, MultiSelectRenderProps } from './MultiDownshift'
import { SelectMultiInput, SelectMultiInputProps } from './SelectMultiInput'

export interface SelectMultiProps<T = DefaultItemType> extends Omit<SelectMultiInputProps<T>,
    'renderItem' | 'value' | 'onChange' | 'onRemoveItem'>, WithStylesProps {
    value?: T[]

    // TODO!
    clearable?: boolean

    items: MultiDownshiftProps<T>['items']
    itemToString: MultiDownshiftProps<T>['itemToString']
    onChange?: MultiDownshiftProps<T>['onChange']
    isOpen?: MultiDownshiftProps<T>['isOpen']
    onFilterChange?: MultiDownshiftProps<T>['onFilterChange']

    loading?: SelectDownshiftMenuProps<T>['loading']
    renderItem?: SelectDownshiftMenuProps<T>['renderItem']
    components?: SelectDownshiftMenuProps<T>['components']
}

@withStyles
export class SelectMulti<T> extends React.Component<SelectMultiProps<T>> {

    render() {
        const {
            css,
            theme,
            value,
            items,
            itemToString,
            onChange,
            isOpen,
            onFilterChange,
            loading,
            renderItem,
            components,
            placeholder,
            ...rest
        } = this.props

        return (
            <MultiDownshift<T>
                selectedItems={value || []}
                items={items}
                itemToString={itemToString}
                onChange={onChange}
                isOpen={isOpen}
                onFilterChange={onFilterChange}
            >
                {(downshift) => {
                    const {
                        // isOpen,
                        getInputProps,
                        selectedItems,
                        removeItem,
                        inputValue,
                        visibleItems,
                    } = downshift

                    return (
                        <div>
                            <SelectMultiInput<T>
                                items={selectedItems}
                                {...rest}
                                placeholder={(!selectedItems || selectedItems.length === 0) ? placeholder : undefined}
                                onBlur={this.handleInputBlur(downshift)}
                                onFocus={this.handleInputFocus(downshift)}
                                onClick={this.handleInputClick(downshift)}
                                onRemoveItem={this.handleItemRemove(removeItem)}
                                renderItem={itemToString}
                                // icon={isOpen ? 'triangleUp' : 'triangleDown'}
                                // onIconClick={this.handleInputIconClick(downshift)}
                                {...getInputProps()}
                                value={inputValue ? inputValue : ''}
                            />
                            <SelectDownshiftMenu
                                downshift={downshift}
                                items={visibleItems}
                                loading={loading}
                                renderItem={this.renderItem(downshift)}
                            />
                        </div>
                    )
                }}
            </MultiDownshift>
        )
    }

    handleItemRemove = (removeItem: Function) => (item: T) => removeItem(item)

    renderItem = ({ isSelected }: MultiSelectRenderProps<T>) => (item: T) => (
        <HFlow hSpacing={0.5}>
            <Checkbox checked={isSelected(item)} tabIndex={-1} readOnly />
            {this.props.renderItem ? this.props.renderItem(item) : this.props.itemToString(item)}
        </HFlow>
    )

    handleInputIconClick = ({ toggleMenu }: MultiSelectRenderProps<T>) => () => toggleMenu()
    handleInputFocus = ({ openMenu }: MultiSelectRenderProps<T>) => () => openMenu()
    handleInputClick = ({ openMenu }: MultiSelectRenderProps<T>) => () => openMenu()
    handleInputBlur = ({ closeMenu }: MultiSelectRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
        closeMenu()
        this.props.onBlur && this.props.onBlur(e)
    }
}
