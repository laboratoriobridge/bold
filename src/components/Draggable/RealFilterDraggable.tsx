import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import matchSorter from 'match-sorter'
import { Button, Checkbox, Dropdown, DropdownItem, HFlow, Icon, TextField } from '..'
import { Theme, useStyles } from '../../styles'
import { useLocale } from '../../i18n'
import { FilterDraggableProps } from './FilterDraggable'
import { QuantityEnum } from './types/QuantityEnum'
import { DraggableItemTypes } from './types/ItemTypes'
import { getKeyDirection, getQuantityValue } from './util'
import { DraggableRow } from './DraggableRow'

export function RealFilterDraggable<T>(props: FilterDraggableProps<T>) {
  const { name, origin, value, filterItems, chosenItems, onDragEnd, onFilterUpdate, formatter, onKeyNav } = props

  const [searchedFilterSet, setSearchedFilterSet] = useState<Array<string>>(filterItems)

  const [open, setOpen] = useState(false)

  const [all, setAll] = useState<QuantityEnum>(getQuantityValue(chosenItems, filterItems))

  const [buttonRef, setButtonRef] = useState<HTMLButtonElement>()

  const { classes, css } = useStyles(draggableCreateStyles)

  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableItemTypes.FILTER, name: name, origin },
    end: (_item, monitor) => {
      if (monitor.getDropResult() != null) onDragEnd()
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const locale = useLocale()

  if (filterItems.length < 1) {
    throw new Error(`The filterItems must have at least one element`)
  }

  chosenItems.forEach((value) => {
    if (!filterItems.includes(value)) {
      throw new Error(`The value '${value}' of chosenItems doesn't exist in filterItems[${filterItems.toString()}]`)
    }
  })

  const handleClick = () => (open ? handleClose() : setOpen(true))

  const handleClose = () => {
    setOpen(false)
    setSearchedFilterSet(filterItems)
  }

  const handleSelect = (element: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    chosenItems.has(element) ? chosenItems.delete(element) : chosenItems.add(element)
    onFilterUpdate(name, new Set<string>(chosenItems))
    setAll(getQuantityValue(chosenItems, filterItems))
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
    if (all === QuantityEnum.FULL) {
      setAll(QuantityEnum.EMPTY)
      onFilterUpdate(name, new Set<string>(new Set<string>()))
    } else {
      setAll(QuantityEnum.FULL)
      onFilterUpdate(name, new Set<string>(filterItems))
    }
  }

  return (
    <div ref={drag} className={css(classes.dndBox, isDragging && classes.dndBoxDragging)}>
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
        <div title='dropDownArea' className={classes.dropdownArea} onBlur={(e) => e.stopPropagation()}>
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
            <DropdownItem key={locale.draggable.all} className={classes.dropdownItem}>
              <Checkbox
                label={locale.draggable.allItems}
                onChange={handleSelectAll()}
                checked={all === QuantityEnum.FULL}
                indeterminate={all === QuantityEnum.HALF_FULL}
              />
            </DropdownItem>
          )}

          {searchedFilterSet.map((value) => (
            <DraggableRow<T>
              value={value}
              name={name}
              selected={chosenItems.has(value)}
              handleSelect={handleSelect}
              formatter={formatter}
            />
          ))}
        </div>
      </Dropdown>
    </div>
  )
}

export const draggableCreateStyles = (theme: Theme) => ({
  button: {
    border: `solid 1px ${theme.pallete.gray.c60}`,
    color: theme.pallete.gray.c10,
    borderRadius: '2px',
    boxShadow: theme.shadows.outer[10],
    paddingLeft: '0px',
    fontSize: '13px',
  },

  dndBox: {
    display: 'inline-block',
    margin: '0.25rem 0.25rem',
  },

  dndBoxDragging: {
    boxShadow: theme.shadows.outer[10],
  },

  dropdownItem: {
    width: '100%',
    cursor: 'pointer',
    borderTop: `1px solid ${theme.pallete.gray.c80}`,
    padding: '0.25rem',
  },

  dropdownArea: {
    maxHeight: '12rem',
    overflow: 'auto',
  },

  dropdown: {
    padding: '0rem',
  },

  search: {
    padding: '0.5rem',
  },

  noOutline: {
    outlineColor: theme.pallete.surface.main,
  },
})
