import { ControllerStateAndHelpers } from 'downshift'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'

import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from './SelectMenu'

export interface SelectDownshiftMenuProps<T> extends WithStylesProps {
    items: T[]
    isLoading: boolean
    downshift: ControllerStateAndHelpers<T>

    /**
     * Render function used by each select item.
     * @param item The select item to be rendered.
     * @returns A react node to be rendered inside the `SelectMenuItem`
     */
    renderItem?(item: T): React.ReactNode
}

@withStyles
export class SelectDownshiftMenu<T> extends React.Component<SelectDownshiftMenuProps<T>> {
    render() {
        const { theme, items, downshift, renderItem, isLoading } = this.props
        const {
            isOpen,
            itemToString,
            selectedItem,
            highlightedIndex,
            getItemProps,
            getMenuProps,
        } = downshift

        return (
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

                        {!isLoading && (items === null || items.length === 0) &&
                            <SelectEmptyItem />
                        }

                        {items.map((item, index) => (
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
        )
    }
}
