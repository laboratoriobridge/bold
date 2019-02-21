// From downshift examples

import Downshift, { DownshiftState, StateChangeOptions } from 'downshift'
import React from 'react'

import { isEqual as deepIsEqual, Omit, some } from '../../../../../util'
import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from '../SelectSingle/SelectDownshift'

export interface MultiDownshiftProps<T> extends Omit<SelectDownshiftProps<T>, 'onSelect' | 'onChange'> {
    selectedItems?: T[]
    itemIsEqual?(a: T, b: T): boolean
    onSelect?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
    onChange?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
    children?(downshift: MultiSelectRenderProps<T>): React.ReactNode
}

export interface MultiDownshiftState<T> {
    selectedItems: T[]
}

export interface MultiSelectRenderProps<T> extends SelectDownshiftRenderProps<T> {
    selectedItems: T[]
    isSelected(item: T): boolean
    addItem(item: T): void
    removeItem(item: T): void
}

export class MultiDownshift<T> extends React.Component<MultiDownshiftProps<T>, MultiDownshiftState<T>> {

    static defaultProps: Partial<MultiDownshiftProps<any>> = {
        selectedItems: [],
        itemIsEqual: (a, b) => {
            if (process.env.NODE_ENV !== 'production') {
                // tslint:disable no-console
                console.warn(
                    'MultiDownshift: using default itemIsEqual implementation for object comparision.'
                    + ' You should probably provide your own `itemIsEqual` implementation.'
                )
            }

            return deepIsEqual(a, b)
        },
    }

    constructor(props: MultiDownshiftProps<T>) {
        super(props)
        this.state = {
            selectedItems: props.selectedItems,
        }
    }

    componentDidUpdate(prevProps: MultiDownshiftProps<T>) {
        if (this.props.selectedItems !== prevProps.selectedItems) {
            this.setState({ selectedItems: this.props.selectedItems })
        }
    }

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
        if (this.isSelected(selectedItem)) {
            this.removeItem(selectedItem, downshift)
        } else {
            this.addItem(selectedItem, downshift)
        }
    }

    emitChange = (downshift: SelectDownshiftRenderProps<T>) => {
        this.props.onChange && this.props.onChange(this.state.selectedItems, this.getStateAndHelpers(downshift))
        this.props.onSelect && this.props.onSelect(this.state.selectedItems, this.getStateAndHelpers(downshift))
    }

    removeItem = (selectedItem: T, downshift: SelectDownshiftRenderProps<T>) => {
        this.setState(({ selectedItems }) => ({
            selectedItems: selectedItems.filter(item => !this.props.itemIsEqual(selectedItem, item)),
        }), () => this.emitChange(downshift))
    }

    addItem = (item: T, downshift: SelectDownshiftRenderProps<T>) => {
        if (!this.isSelected(item)) {
            this.setState(({ selectedItems }) => ({
                selectedItems: [...selectedItems, item],
            }), () => this.emitChange(downshift))
        }
    }

    isSelected = (item: T) => {
        return some(this.state.selectedItems, (i) => this.props.itemIsEqual(i, item))
    }

    getStateAndHelpers(downshift: SelectDownshiftRenderProps<T>): MultiSelectRenderProps<T> {
        const { selectedItems } = this.state
        const { isSelected } = this
        return {
            ...downshift,
            selectedItems,
            isSelected,
            addItem: (item: T) => this.addItem(item, downshift),
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
