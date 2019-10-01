import { ControllerStateAndHelpers } from 'downshift'
import React, { CSSProperties } from 'react'

import { useStyles } from '../../../styles'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'
import { SelectCreateItem } from '../SelectMenu/SelectMenuItem'

export interface SelectDownshiftMenuProps<T> {
  items: T[]
  loading: boolean
  downshift: ControllerStateAndHelpers<T>
  createNewItem?: boolean
  components?: Partial<SelectMenuComponents<T>>

  /**
   * Render function used by each select item.
   * @param item The select item to be rendered.
   * @returns A react node to be rendered inside the `SelectMenuItem`
   */
  renderItem?(item: T): React.ReactNode
}

export interface SelectMenuComponents<T> {
  CreateItem: React.ComponentType<SelectDownshiftMenuProps<T>>
  LoadingItem: React.ComponentType<SelectDownshiftMenuProps<T>>
  EmptyItem: React.ComponentType<SelectDownshiftMenuProps<T>>
  Item: React.ComponentType<SelectDownshiftMenuProps<T> & { item: T; index: number }>
}

export function SelectDownshiftMenu<T>(props: SelectDownshiftMenuProps<T>) {
  const {
    items,
    loading: isLoading,
    components,
    createNewItem,
    downshift: { isOpen, getMenuProps },
  } = props

  const { classes } = useStyles(createStyles)
  const { CreateItem, LoadingItem, EmptyItem, Item } = { ...defaultComponents, ...components }

  return (
    <div className={classes.wrapper}>
      {isOpen && (
        <SelectMenu {...getMenuProps({ refKey: 'menuRef' })}>
          {isLoading && <LoadingItem {...props} />}

          {!isLoading && createNewItem && <CreateItem {...props} />}

          {!isLoading && !createNewItem && (!items || items.length === 0) && <EmptyItem {...props} />}

          {items && items.map((item, index) => <Item key={index} index={index} item={item} {...props} />)}
        </SelectMenu>
      )}
    </div>
  )
}

export const defaultComponents: SelectMenuComponents<any> = {
  CreateItem: (props: SelectDownshiftMenuProps<any>) => <SelectCreateItem />,
  LoadingItem: (props: SelectDownshiftMenuProps<any>) => <SelectLoadingItem />,
  EmptyItem: (props: SelectDownshiftMenuProps<any>) => <SelectEmptyItem />,
  Item: (props: SelectDownshiftMenuProps<any> & { item: any; index: number }) => {
    const {
      renderItem,
      item,
      index,
      downshift: { itemToString, highlightedIndex, getItemProps },
    } = props
    return (
      <SelectMenuItem selected={highlightedIndex === index} {...getItemProps({ item })}>
        {renderItem ? renderItem(item) : itemToString(item)}
      </SelectMenuItem>
    )
  },
}

SelectDownshiftMenu.defaultProps = {
  components: defaultComponents,
} as Partial<SelectDownshiftMenuProps<any>>

export const createStyles = () => ({
  wrapper: {
    position: 'relative',
  } as CSSProperties,
})
