import { ControllerStateAndHelpers } from 'downshift'
import React, { useState, CSSProperties } from 'react'
import { usePopper, PopperProps } from 'react-popper'
import { composeRefs } from '../../../util/react'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'
import { SelectCreateItem } from '../SelectMenu/SelectMenuItem'
import { Theme, useStyles, useTheme } from '../../../styles'

export interface SelectDownshiftMenuProps<T> {
  items: T[]
  loading: boolean
  menuMinWidth?: number
  downshift: ControllerStateAndHelpers<T>
  anchorRef: React.RefObject<HTMLElement>
  createNewItem?: boolean
  components?: Partial<SelectMenuComponents<T>>
  popperProps?: Omit<Partial<PopperProps<any>>, 'children'>

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

  const [menuRef, setMenuRef] = useState<HTMLDivElement>()
  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef.current, menuRef, { placement: 'bottom-start', ...popperProps })

  const { dropdownMenuRef, ...menuProps } = getMenuProps({ refKey: 'dropdownMenuRef' }, { suppressRefError: true })

  const { classes, css } = useStyles(createStyles)

  return (
    <>
      {isOpen && (
        <div
          {...menuProps}
          data-placement={placement}
          ref={composeRefs(dropdownMenuRef, setMenuRef)}
          className={css(classes.menu)}
          style={{
            ...popperStyle,
            width: anchorRef.current && anchorRef.current.clientWidth,
            minWidth: menuMinWidth,
          }}
        >
          {PrependItem && <PrependItem {...props} />}

          <SelectMenu style={classes.list}>
            {isLoading && <LoadingItem {...props} />}

            {!isLoading && createNewItem && (items || []).length > 0 && <CreateItem {...props} />}

            {!isLoading && !createNewItem && (items || []).length === 0 && <EmptyItem {...props} />}

            {items && items.map((item, index) => <Item key={index} index={index} item={item} {...props} />)}
          </SelectMenu>

          {AppendItem && <AppendItem {...props} />}
        </div>
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

export function SelectDownshiftComponentCustom(props: React.HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme()

  return (
    <div
      style={{
        background: theme.pallete.surface.background,
        padding: '0.25rem 0.5rem',
        cursor: 'initial',
      }}
      {...props}
    />
  )
}

export const createStyles = (theme: Theme) => ({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: theme.zIndex.dropdown,
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: theme.radius.popper,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer['40'],
    maxHeight: '20rem',
  } as CSSProperties,

  list: {
    zIndex: 'auto',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
    maxHeight: 'auto',
  } as CSSProperties,
})

SelectDownshiftMenu.defaultProps = {
  components: defaultComponents,
} as Partial<SelectDownshiftMenuProps<any>>
