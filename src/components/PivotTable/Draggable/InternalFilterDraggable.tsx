import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import matchSorter from 'match-sorter'
import { Button, Checkbox, Dropdown, DropdownItem, HFlow, Icon, TextField } from '../..'
import { useStyles } from '../../../styles'
import { useLocale } from '../../../i18n'
import { FilterDraggableProps } from './FilterDraggable'
import { ActualQuantity } from './types/ActualQuantity'
import { getKeyDirection, getQuantityValue } from './util'
import { DraggableRow } from './DraggableRow'
import { draggableCreateStyles } from './style'
import { DraggableWrapper } from './DraggableWrapper'

export function InternalFilterDraggable<T>(props: FilterDraggableProps<T>) {
  const {
    name,
    origin,
    value,
    filterItems,
    selectedItems,
    onDragEnd,
    onFilterUpdate,
    formatter,
    onKeyNav,
    type,
  } = props

  const [searchedFilterSet, setSearchedFilterSet] = useState<Array<string>>(filterItems)

  const [open, setOpen] = useState(false)

  const [all, setAll] = useState<ActualQuantity>(getQuantityValue(selectedItems, filterItems))

  const [buttonRef, setButtonRef] = useState<HTMLButtonElement>()

  const { classes } = useStyles(draggableCreateStyles)

  const [{ isDragging }, drag] = useDrag({
    item: { type: type, name: name, origin },
    end: (_item, monitor) => {
      if (monitor.getDropResult()['result']) onDragEnd()
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const locale = useLocale()

  if (filterItems.length < 1) {
    throw new Error(`The filterItems must have at least one element`)
  }

  selectedItems.forEach((value) => {
    if (!filterItems.includes(value)) {
      throw new Error(`The value '${value}' of selectedItems doesn't exist in filterItems[${filterItems.toString()}]`)
    }
  })

  const handleClick = () => (open ? handleClose() : setOpen(true))

  const handleClose = () => {
    setOpen(false)
    setSearchedFilterSet(filterItems)
  }

  const handleSelect = (element: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    selectedItems.has(element) ? selectedItems.delete(element) : selectedItems.add(element)
    onFilterUpdate(name, new Set<string>(selectedItems))
    setAll(getQuantityValue(selectedItems, filterItems))
  }

  const handleKeyDown = (filterKey: keyof T) => (event: any) => {
    onKeyNav(getKeyDirection(event.nativeEvent.key), origin, filterKey)
    onDragEnd()
  }

  const handleSearch = () => (event: any) =>
    setSearchedFilterSet(
      matchSorter(filterItems, event.currentTarget.value, { threshold: matchSorter.rankings.STARTS_WITH })
    )

  const handleSelectAll = () => () => {
    if (all === ActualQuantity.ALL) {
      setAll(ActualQuantity.NONE)
      onFilterUpdate(name, new Set<string>(new Set<string>()))
    } else {
      setAll(ActualQuantity.ALL)
      onFilterUpdate(name, new Set<string>(filterItems))
    }
  }

  return (
    <DraggableWrapper drag={drag} isDragging={isDragging}>
      <Button
        style={classes.button}
        innerRef={setButtonRef}
        onClick={handleClick}
        onKeyDown={handleKeyDown(name)}
        size='small'
        kind='primary'
        skin='ghost'
      >
        <HFlow hSpacing={0.5}>
          <Icon icon='dragdrop' />
          {value}
          {open ? <Icon icon='angleUp' /> : <Icon icon='angleDown' />}
        </HFlow>
      </Button>
      <Dropdown
        anchorRef={buttonRef}
        open={open}
        autoclose={false}
        onClose={handleClose}
        popperProps={{ placement: 'bottom' }}
        style={classes.dropdown}
      >
        <div key='dropDownArea' className={classes.dropdownArea} onBlur={(e) => e.stopPropagation()}>
          <DropdownItem className={classes.noOutline}>
            <div className={classes.search}>
              <TextField
                name='iconized'
                id='iconized'
                placeholder={locale.draggable.search}
                icon='zoomOutline'
                onChange={handleSearch()}
              />
            </div>
          </DropdownItem>

          {searchedFilterSet.length === filterItems.length && (
            <DropdownItem
              key={locale.draggable.all}
              className={classes.dropdownItem}
              aria-checked={all === ActualQuantity.ALL ? 'true' : all === ActualQuantity.NONE ? 'false' : 'mixed'}
            >
              <Checkbox
                label={locale.draggable.allItems}
                onChange={handleSelectAll()}
                checked={all === ActualQuantity.ALL}
                indeterminate={all === ActualQuantity.ONE_OR_MORE}
              />
            </DropdownItem>
          )}

          {searchedFilterSet.map((value) => (
            <DraggableRow<T>
              key={value}
              value={value}
              name={name}
              selected={selectedItems.has(value)}
              handleSelect={handleSelect}
              formatter={formatter}
            />
          ))}
        </div>
      </Dropdown>
    </DraggableWrapper>
  )
}
