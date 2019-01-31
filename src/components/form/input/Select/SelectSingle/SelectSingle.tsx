import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../../styles'
import { Omit } from '../../../../../util'
import { TextInput, TextInputProps } from '../../TextInput/TextInput'

import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from './SelectDownshift'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from './SelectDownshiftMenu'

export interface DefaultItemType {
    value: any
    label: string
}

export interface SelectSingleProps<T = DefaultItemType> extends Omit<TextInputProps, 'value' | 'onChange'>,
    WithStylesProps {
    value?: T

    items: SelectDownshiftProps<T>['items']
    itemToString: SelectDownshiftProps<T>['itemToString']
    onChange?: SelectDownshiftProps<T>['onChange']
    isOpen?: SelectDownshiftProps<T>['isOpen']
    onFilterChange?: SelectDownshiftProps<T>['onFilterChange']

    loading?: SelectDownshiftMenuProps<T>['loading']
    renderItem?: SelectDownshiftMenuProps<T>['renderItem']
    components?: SelectDownshiftMenuProps<T>['components']
}

@withStyles
export class SelectSingle<T> extends React.Component<SelectSingleProps<T>> {

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
            ...rest
        } = this.props

        return (
            <SelectDownshift<T>
                selectedItem={value || null} // Use null here to force downshift to "uncontrolled" mode
                items={items}
                itemToString={itemToString}
                onChange={onChange}
                isOpen={isOpen}
                onFilterChange={onFilterChange}
            >
                {(downshift) => {
                    const {
                        isOpen: downshiftOpen,
                        getInputProps,
                        visibleItems,
                        inputValue,
                    } = downshift

                    return (
                        <div>
                            <TextInput
                                icon={downshiftOpen ? 'angleUp' : 'angleDown'}
                                {...rest}
                                onBlur={this.handleInputBlur(downshift)}
                                onFocus={this.handleInputFocus(downshift)}
                                onClick={this.handleInputClick(downshift)}
                                onClear={this.handleClear(downshift)}
                                onIconClick={this.handleInputIconClick(downshift)}
                                {...getInputProps()}
                                value={inputValue ? inputValue : ''}
                            />
                            <SelectDownshiftMenu
                                downshift={downshift}
                                items={visibleItems}
                                loading={loading}
                                renderItem={renderItem}
                                components={components}
                            />
                        </div>
                    )
                }}
            </SelectDownshift>
        )
    }

    handleClear = (downshift: SelectDownshiftRenderProps<T>) => () => {
        downshift.clearSelection()
    }

    handleInputIconClick = ({ toggleMenu }: SelectDownshiftRenderProps<T>) => () => toggleMenu()
    handleInputFocus = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputClick = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
    handleInputBlur = ({ closeMenu }: SelectDownshiftRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
        closeMenu()
        this.props.onBlur && this.props.onBlur(e)
    }
}
