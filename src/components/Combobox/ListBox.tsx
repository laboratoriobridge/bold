import React, { CSSProperties, forwardRef, HTMLAttributes, MouseEvent, Ref } from 'react'
import { UseSelectPropGetters } from 'downshift'
import { Theme, useStyles } from '../../styles'
import { ComboboxComponents } from './ComboboxMenuComponents'

interface ListBoxProps<T> extends HTMLAttributes<HTMLDivElement> {
  components: ComboboxComponents<T>
  items: T[]
  loading: boolean
  highlightedIndex: number
  itemToString(item: T): string
  createNewItem?(inputValue: string): T
  getItemProps(options: { index: number; item: T }): ReturnType<UseSelectPropGetters<T>['getItemProps']>
  isItemSelected?(item: T): boolean
  onItemClick?(item: T, ev: MouseEvent<HTMLLIElement>): void
}

export const ListBox = forwardRef(ListBoxInner) as <T>(
  props: ListBoxProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReturnType<typeof ListBoxInner>

function ListBoxInner<T>(props: ListBoxProps<T>, ref: Ref<HTMLDivElement>) {
  const {
    items,
    components,
    loading,
    highlightedIndex,
    getItemProps,
    itemToString,
    createNewItem,
    isItemSelected,
    onItemClick,
    tabIndex,
    ...rest
  } = props
  const { classes } = useStyles(createStyles)

  const { CreateItem, AppendItem, EmptyItem, Item, LoadingItem, PrependItem } = components

  return (
    <div ref={ref} tabIndex={tabIndex} {...rest}>
      <ul className={classes.list} tabIndex={tabIndex}>
        {PrependItem && <PrependItem />}
        {loading && <LoadingItem />}
        {!loading && createNewItem && !items?.length && <CreateItem />}
        {!loading && !createNewItem && !items?.length && <EmptyItem />}
        {items.map((item, index) => {
          const { onClick, ...itemProps } = getItemProps({ item, index })

          return (
            <Item
              key={`${item}${index}`}
              item={item}
              index={index}
              highlighted={highlightedIndex === index}
              itemToString={itemToString}
              selected={!!isItemSelected?.(item)}
              onClick={(...args) => {
                onItemClick ? onItemClick?.(item, ...args) : onClick?.(...args)
              }}
              {...itemProps}
            />
          )
        })}
        {AppendItem && <AppendItem />}
      </ul>
    </div>
  )
}

export const createStyles = (theme: Theme) => ({
  list: {
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
    maxHeight: 'auto',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: theme.pallete.surface.main,
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100%',
  } as CSSProperties,
})
