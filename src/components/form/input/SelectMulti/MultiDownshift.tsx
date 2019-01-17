// From downshift examples

import Downshift, { ControllerStateAndHelpers, DownshiftState, StateChangeOptions } from 'downshift'
import * as React from 'react'

import { Omit } from '../../../../util'
import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from '../Select/SelectDownshift'

export interface MultiDownshiftProps<T> extends Omit<SelectDownshiftProps<T>, 'onSelect' | 'onChange'> {
    onSelect?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
    onChange?(selectedItem: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
    children?(downshift: MultiSelectRenderProps<T>): React.ReactNode
}

export interface MultiDownshiftState<T> {
    selectedItems: T[]
}

export interface MultiSelectRenderProps<T> extends SelectDownshiftRenderProps<T> {
    selectedItems: T[]
    getRemoveButtonProps(options: RemoveButtonOptions<T>): any
    removeItem(item: T, callback: Function): void
}

export interface RemoveButtonOptions<T> {
    item: T
    onClick?(e): any
    [otherProp: string]: any
}

export class MultiDownshift<T> extends React.Component<MultiDownshiftProps<T>, MultiDownshiftState<T>> {
    state = { selectedItems: [] }

    stateReducer = (state: DownshiftState<T>, changes: StateChangeOptions<T>): Partial<StateChangeOptions<T>> => {
        const { inputValue, ...rest } = changes

        switch (changes.type) {
            case Downshift.stateChangeTypes.changeInput:
                return {
                    ...rest,
                    inputValue,
                }
            case Downshift.stateChangeTypes.keyDownEnter:
            case Downshift.stateChangeTypes.clickItem:
                return {
                    ...rest,
                    highlightedIndex: state.highlightedIndex,
                    isOpen: true,
                }
            default:
                return rest
        }
    }

    handleSelection = (selectedItem: T, downshift: ControllerStateAndHelpers<T>) => {
        const callOnChange = () => {
            const { onSelect, onChange } = this.props
            const { selectedItems } = this.state
            if (onSelect) {
                onSelect(selectedItems, this.getStateAndHelpers(downshift))
            }
            if (onChange) {
                onChange(selectedItems, this.getStateAndHelpers(downshift))
            }
        }
        if (this.state.selectedItems.includes(selectedItem)) {
            this.removeItem(selectedItem, callOnChange)
        } else {
            this.addSelectedItem(selectedItem, callOnChange)
        }
    }

    removeItem = (item, cb?) => {
        this.setState(({ selectedItems }) => ({
            selectedItems: selectedItems.filter(i => i !== item),
        }), cb)
    }

    addSelectedItem(item, cb?) {
        this.setState(({ selectedItems }) => ({
            selectedItems: [...selectedItems, item],
        }), cb)
    }

    getStateAndHelpers(downshift) {
        const { selectedItems } = this.state
        const { removeItem } = this
        return {
            removeItem,
            selectedItems,
            ...downshift,
        }
    }

    render() {
        const { children, onSelect, ...props } = this.props
        // TODO: compose together props (rather than overwriting them) like downshift does
        return (
            <SelectDownshift<T>
                {...props}
                stateReducer={this.stateReducer}
                onChange={this.handleSelection}
                selectedItem={null}
            >
                {downshift => children(this.getStateAndHelpers(downshift))}
            </SelectDownshift>
        )
    }
}
