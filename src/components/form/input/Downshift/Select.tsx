import Downshift, { Actions, ControllerStateAndHelpers, DownshiftProps, StateChangeOptions } from 'downshift'
import * as matchSorter from 'match-sorter'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from './SelectMenu'

export interface DefaultSelectItem {
    value: string
}

/**
 * Function to be used to asynchronously load the select items.
 * @param inputValue The string typed on the select input.
 * @returns The select items to be populated on the componente.
 */
export type SelectLoadFn<T> = (inputValue: string) => Promise<T[]>

/**
 * Default filter prop used by the Select component.
 */
export const defaultSelectFilter: SelectProps['filter'] = (items, inputValue, itemToString) =>
    matchSorter(items, inputValue, { keys: [itemToString] })

export interface SelectProps<T = DefaultSelectItem> extends DownshiftProps<T>, WithStylesProps {
    /**
     * Items to be populated on the select component or a function to be used to asynchronously them.
     */
    items: T[] | SelectLoadFn<T>

    onBlur?: TextInputProps['onBlur']
    disabled?: TextInputProps['disabled']

    /**
     * Function used to filter the result list.
     * @param items All the items of the Select.
     * @param inputValue The string typed on the select input.
     * @param itemToString The `itemToString` function prop used by the component.
     * @returns The result item list.
     */
    filter?(items: T[], inputValue: string, itemToString: DownshiftProps<T>['itemToString']): T[]

    /**
     * Render function used by each select item.
     * @param item The select item to be rendered.
     * @returns A react node to be rendered inside the `SelectMenuItem`
     */
    renderItem?(item: T): React.ReactNode
}

export interface SelectState<T> {
    loadedItems: T[]
    isLoading: boolean
    isFirstLoading: boolean
}

@withStyles
export class Select<T> extends React.PureComponent<SelectProps<T>, SelectState<T>> {

    static defaultProps: Partial<SelectProps<any>> = {
        filter: defaultSelectFilter,
    }

    state: SelectState<T> = {
        isLoading: false,
        loadedItems: [],
        isFirstLoading: true,
    }

    render() {
        const { css, theme, items, filter, renderItem, disabled, onBlur, ...rest } = this.props
        const { loadedItems, isLoading } = this.state

        return (
            <Downshift
                onStateChange={this.handleDownshiftChange}
                {...rest}
            >
                {({
                    isOpen,
                    itemToString,
                    selectedItem,
                    highlightedIndex,
                    toggleMenu,
                    openMenu,
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                }) => (
                        <div>
                            <TextInput
                                {...getInputProps()}
                                icon={isOpen ? 'triangleUp' : 'triangleDown'}
                                disabled={disabled}
                                onIconClick={this.handleInputIconClick(toggleMenu)}
                                onFocus={this.handleInputFocus(openMenu)}
                                onClick={this.handleInputClick(openMenu)}
                                onBlur={onBlur}
                            />
                            <div style={{ position: 'relative' }}>
                                {isOpen &&
                                    <SelectMenu
                                        {...getMenuProps()}
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            zIndex: theme.zIndex.overlays,
                                        }}
                                    >
                                        {isLoading && <SelectLoadingItem />}

                                        {!isLoading && (loadedItems === null || loadedItems.length === 0) &&
                                            <SelectEmptyItem />
                                        }

                                        {loadedItems.map((item, index) => (
                                            <SelectMenuItem
                                                key={index}
                                                selected={selectedItem === item}
                                                highlighted={highlightedIndex === index}
                                                {...getItemProps({ item })}
                                            >
                                                {renderItem ? renderItem(item) : itemToString(item)}
                                            </SelectMenuItem>
                                        ))}
                                    </SelectMenu>
                                }
                            </div>
                        </div>
                    )}
            </Downshift>
        )
    }

    handleInputIconClick = (toggleMenu: Actions<T>['toggleMenu']) => () => toggleMenu()
    handleInputFocus = (openMenu: Actions<T>['openMenu']) => () => openMenu()
    handleInputClick = (openMenu: Actions<T>['openMenu']) => () => openMenu()

    handleDownshiftChange = (options: StateChangeOptions<T>, stateAndHelpers: ControllerStateAndHelpers<T>) => {
        if (this.state.isFirstLoading || options.type === '__autocomplete_change_input__') {
            this.loadItems(options.inputValue)
        }
    }

    loadItems = (inputValue: string) => {
        const { items, filter, itemToString } = this.props

        if (typeof items === 'function') {
            this.setState({ isLoading: true, loadedItems: [] })

            return items(inputValue).then(res => {
                this.setState({ loadedItems: res, isLoading: false, isFirstLoading: false })
                return res
            })
        } else {
            this.setState({
                isLoading: false,
                loadedItems: filter(items, inputValue, itemToString),
            })
        }
    }
}
