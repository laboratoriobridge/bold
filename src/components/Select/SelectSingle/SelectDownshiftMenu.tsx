import { ControllerStateAndHelpers } from 'downshift'
import { PopperOptions } from 'popper.js'
import React, { useRef } from 'react'

import usePopper from '../../../hooks/usePopper'
import { composeRefs } from '../../../util/react'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'
import { SelectCreateItem } from '../SelectMenu/SelectMenuItem'

export interface SelectDownshiftMenuProps<T> {
  items: T[]
  loading: boolean
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
  CreateItem: React.ComponentType<SelectDownshiftMenuProps<T>>
  LoadingItem: React.ComponentType<SelectDownshiftMenuProps<T>>
  EmptyItem: React.ComponentType<SelectDownshiftMenuProps<T>>
  Item: React.ComponentType<SelectDownshiftMenuProps<T> & { item: T; index: number }>
}

export function SelectDownshiftMenu<T>(props: SelectDownshiftMenuProps<T>) {
  const {
    items,
    loading: isLoading,
    anchorRef,
    components,
    createNewItem,
    popperProps,
    downshift: { isOpen, getMenuProps },
  } = props

  const { CreateItem, LoadingItem, EmptyItem, Item } = { ...defaultComponents, ...components }

  const menuRef = useRef<HTMLUListElement>()
  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: menuRef,
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
          style={{ ...popperStyle, width: anchorRef.current && anchorRef.current.clientWidth }}
          data-placement={placement}
        >
          {isLoading && <LoadingItem {...props} />}

          {!isLoading && createNewItem && (items || []).length > 0 && <CreateItem {...props} />}

          {!isLoading && !createNewItem && (items || []).length === 0 && <EmptyItem {...props} />}

          {items && items.map((item, index) => <Item key={index} index={index} item={item} {...props} />)}
        </SelectMenu>
      )}
    </>
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
