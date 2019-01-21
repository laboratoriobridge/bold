import { ControllerStateAndHelpers } from 'downshift'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../../styles'

import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from './SelectMenu'

export interface SelectDownshiftMenuProps<T> extends WithStylesProps {
    items: T[]
    loading: boolean
    downshift: ControllerStateAndHelpers<T>

    components?: Partial<SelectMenuComponents<T>>

    /**
     * Render function used by each select item.
     * @param item The select item to be rendered.
     * @returns A react node to be rendered inside the `SelectMenuItem`
     */
    renderItem?(item: T): React.ReactNode
}

export interface SelectMenuComponents<T> {
    LoadingItem: React.ComponentType<SelectDownshiftMenuProps<T>>
    EmptyItem: React.ComponentType<SelectDownshiftMenuProps<T>>
    Item: React.ComponentType<SelectDownshiftMenuProps<T> & { item: T, index: number }>
}

export const defaultComponents: SelectMenuComponents<any> = {
    LoadingItem: (props: SelectDownshiftMenuProps<any>) => <SelectLoadingItem />,
    EmptyItem: (props: SelectDownshiftMenuProps<any>) => <SelectEmptyItem />,
    Item: (props: SelectDownshiftMenuProps<any> & { item: any, index: number }) => {
        const {
            renderItem,
            item,
            index,
            downshift: {
                itemToString,
                selectedItem,
                highlightedIndex,
                getItemProps,
            },
        } = props
        return (
            <SelectMenuItem
                selected={selectedItem === item}
                highlighted={highlightedIndex === index}
                {...getItemProps({ item })}
            >
                {renderItem ? renderItem(item) : itemToString(item)}
            </SelectMenuItem>
        )
    },
}

@withStyles
export class SelectDownshiftMenu<T> extends React.Component<SelectDownshiftMenuProps<T>> {

    static defaultProps: Partial<SelectDownshiftMenuProps<any>> = {
        components: defaultComponents,
    }

    render() {
        const {
            css,
            items,
            loading: isLoading,
            components,
            downshift: { isOpen, getMenuProps },
        } = this.props
        const { LoadingItem, EmptyItem, Item } = { ...defaultComponents, ...components }

        return (
            <div className={css({ position: 'relative' })}>
                {isOpen &&
                    <SelectMenu {...getMenuProps()}>
                        {isLoading && <LoadingItem {...this.props} />}

                        {!isLoading && (!items || items.length === 0) &&
                            <EmptyItem {...this.props} />
                        }

                        {items && items.map((item, index) =>
                            <Item key={index} index={index} item={item} {...this.props} />
                        )}
                    </SelectMenu>
                }
            </div>
        )
    }
}
