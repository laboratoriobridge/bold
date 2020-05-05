import { ControllerStateAndHelpers } from 'downshift'
import { PopperOptions } from 'popper.js'
import React, { useRef } from 'react'

import { usePopper } from '../../../hooks/usePopper'
import { composeRefs } from '../../../util/react'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'
import { SelectCreateItem } from '../SelectMenu/SelectMenuItem'

export interface SelectDownshiftMenuProps<T> {
  items: T[]
  loading: boolean
  menuMinWidth?: number
  downshift: ControllerStateAndHelpers<T>
  anchorRef: React.RefObject<HTMLElement>
  createNewItem?: boolean
  components?: Partial<SelectMenuComponents<T>>
  popperProps?: PopperOptions

  /**
   * Render function used by each select item.
   * @param item The select item to be rendered.
   * @returns A react node to be rendered inside the `SelectMenuItem`
   */
  renderItem?(item: T): React.ReactNode
}

export interface SelectMenuComponents<T> {
  /**
   * Item shown when `creteNewItem` prop is indicated.
   */
  CreateItem: React.ComponentType<SelectDownshiftMenuProps<T>>

  /**
   * Item shown when `loading` prop is true.
   */
  LoadingItem: React.ComponentType<SelectDownshiftMenuProps<T>>

  /**
   * Item shown when `items` array prop is empty.
   */
  EmptyItem: React.ComponentType<SelectDownshiftMenuProps<T>>

  /**
   * Default item component used for each element in `items` prop.
   */
  Item: React.ComponentType<SelectDownshiftMenuProps<T> & { item: T; index: number }>

  /**
   * A custom item to be included at the beginning of the select list.
   */
  PrependItem: React.ComponentType<SelectDownshiftMenuProps<T>>

  /**
   * A custom item to be included at the end of the select list.
   */
  AppendItem: React.ComponentType<SelectDownshiftMenuProps<T>>
}

export function SelectDownshiftMenu<T>(props: SelectDownshiftMenuProps<T>) {
  const {
    items,
    loading: isLoading,
    menuMinWidth,
    anchorRef,
    components,
    createNewItem,
    popperProps,
    downshift: { isOpen, getMenuProps },
  } = props

  const { CreateItem, LoadingItem, EmptyItem, Item, PrependItem, AppendItem } = { ...defaultComponents, ...components }

  const menuRef = useRef<HTMLUListElement>()
  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: menuRef,
      placement: 'bottom-start',
      ...popperProps,
    },
    [isOpen]
  )

  const { dropdownMenuRef, ...menuProps } = getMenuProps({ refKey: 'dropdownMenuRef' }, { suppressRefError: true })

  return (
    <>
      {isOpen && (
        <SelectMenu
          {...menuProps}
          menuRef={composeRefs(dropdownMenuRef, menuRef)}
          style={{ ...popperStyle, width: anchorRef.current && anchorRef.current.clientWidth, minWidth: menuMinWidth }}
          data-placement={placement}
        >
          {isLoading && <LoadingItem {...props} />}

          {!isLoading && createNewItem && (items || []).length > 0 && <CreateItem {...props} />}

          {!isLoading && !createNewItem && (items || []).length === 0 && <EmptyItem {...props} />}

          {PrependItem && <PrependItem {...props} />}

          {items && items.map((item, index) => <Item key={index} index={index} item={item} {...props} />)}

          {AppendItem && <AppendItem {...props} />}
        </SelectMenu>
      )}
    </>
  )
}

export const defaultComponents: SelectMenuComponents<any> = {
  AppendItem: () => null,
  PrependItem: () => null,
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
