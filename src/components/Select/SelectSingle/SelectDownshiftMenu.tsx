import { ControllerStateAndHelpers } from 'downshift'
import React, { CSSProperties } from 'react'

import { useStyles } from '../../../styles'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'

export interface SelectDownshiftMenuProps<T> {
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
  Item: React.ComponentType<SelectDownshiftMenuProps<T> & { item: T; index: number }>
}

export function SelectDownshiftMenu<T>(props: SelectDownshiftMenuProps<T>) {
  const {
    items,
    loading: isLoading,
    components,
    downshift: { isOpen, getMenuProps },
  } = props

  const { classes } = useStyles(createStyles)
  const { LoadingItem, EmptyItem, Item } = { ...defaultComponents, ...components }

  return (
    <div className={classes.wrapper}>
      {isOpen && (
        <SelectMenu {...getMenuProps({ refKey: 'menuRef' })}>
          {isLoading && <LoadingItem {...props} />}

          {!isLoading && (!items || items.length === 0) && <EmptyItem {...props} />}

          {items && items.map((item, index) => <Item key={index} index={index} item={item} {...props} />)}
        </SelectMenu>
      )}
    </div>
  )
}

export const defaultComponents: SelectMenuComponents<any> = {
  LoadingItem: (props: SelectDownshiftMenuProps<any>) => <SelectLoadingItem />,
  EmptyItem: (props: SelectDownshiftMenuProps<any>) => <SelectEmptyItem />,
  Item: (props: SelectDownshiftMenuProps<any> & { item: any; index: number }) => {
    const {
      renderItem,
      item,
      downshift: { itemToString, selectedItem, getItemProps },
    } = props
    return (
      <SelectMenuItem selected={selectedItem === item} {...getItemProps({ item })}>
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
