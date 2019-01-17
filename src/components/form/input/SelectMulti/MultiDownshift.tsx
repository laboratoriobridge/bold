// From downshift examples

import Downshift, { DownshiftState, StateChangeOptions } from 'downshift'
import * as React from 'react'

import { Omit } from '../../../../util'
import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from '../Select/SelectDownshift'

export interface MultiDownshiftProps<T> extends Omit<SelectDownshiftProps<T>, 'onSelect' | 'onChange'> {
    onSelect?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
    onChange?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
    children?(downshift: MultiSelectRenderProps<T>): React.ReactNode
}

export interface MultiDownshiftState<T> {
    selectedItems: T[]
}

export interface MultiSelectRenderProps<T> extends SelectDownshiftRenderProps<T> {
    selectedItems: T[]
    removeItem(item: T): void
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

    handleChange = (selectedItem: T, downshift: SelectDownshiftRenderProps<T>) => {
        if (this.state.selectedItems.includes(selectedItem)) {
            this.removeItem(selectedItem, downshift)
        } else {
            this.addItem(selectedItem, downshift)
        }
    }

    emitChange = (downshift: SelectDownshiftRenderProps<T>) => {
        this.props.onChange && this.props.onChange(this.state.selectedItems, this.getStateAndHelpers(downshift))
        this.props.onSelect && this.props.onSelect(this.state.selectedItems, this.getStateAndHelpers(downshift))
    }

    removeItem = (item: T, downshift: SelectDownshiftRenderProps<T>) => {
        this.setState(({ selectedItems }) => ({
            selectedItems: selectedItems.filter(i => i !== item),
        }), () => this.emitChange(downshift))
    }

    addItem(item: T, downshift: SelectDownshiftRenderProps<T>) {
        this.setState(({ selectedItems }) => ({
            selectedItems: [...selectedItems, item],
        }), () => this.emitChange(downshift))
    }

    getStateAndHelpers(downshift: SelectDownshiftRenderProps<T>): MultiSelectRenderProps<T> {
        const { selectedItems } = this.state
        return {
            ...downshift,
            selectedItems,
            removeItem: (item: T) => this.removeItem(item, downshift),
        }
    }

    render() {
        const { children, onSelect, ...props } = this.props
        // TODO: compose together props (rather than overwriting them) like downshift does
        return (
            <SelectDownshift<T>
                {...props}
                stateReducer={this.stateReducer}
                onChange={this.handleChange}
                selectedItem={null}
            >
                {downshift => children(this.getStateAndHelpers(downshift))}
            </SelectDownshift>
        )
    }
}
