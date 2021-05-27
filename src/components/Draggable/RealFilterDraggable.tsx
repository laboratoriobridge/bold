import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import { FixedSizeList } from 'react-window'
import { Button, Checkbox, Dropdown, DropdownItem, HFlow, Icon, TextField, Tooltip } from '..'
import { Theme, useStyles, useTheme } from '../../styles'
import { FilterDraggableProps } from './FilterDraggable'
import { QuantityEnum } from './types/QuantityEnum'
import { ItemTypes } from './types/ItemTypes'
import { getKeyDirection } from './util'

export function RealFilterDraggable<T>(props: FilterDraggableProps<T>) {
  const { name, origin, value, filterValues, filterState, onDragEnd, handleFilterUpdate, formatter, onKeyNav } = props

  const [searchedFilterSet, setSearchedFilterSet] = useState<Array<string>>(filterValues)

  const [open, setOpen] = useState(false)

  const [all, setAll] = useState<QuantityEnum.EMPTY | QuantityEnum.HALF_FULL | QuantityEnum.FULL>(
    filterState.size === 0
      ? QuantityEnum.EMPTY
      : filterState.size === filterValues.length
      ? QuantityEnum.FULL
      : QuantityEnum.HALF_FULL
  )

  const [buttonRef, setButtonRef] = useState<HTMLButtonElement>()

  const theme = useTheme()

  const { classes, css } = useStyles(draggableCreateStyles)

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.FILTER, name: name, origin },
    end: (_item, monitor) => {
      if (monitor.getDropResult() != null) onDragEnd()
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const handleClick = () => (open ? handleClose() : setOpen(true))

  const handleClose = () => {
    setOpen(false)
    setSearchedFilterSet(filterValues)
  }

  const handleSelect = (element: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    filterState.has(element) ? filterState.delete(element) : filterState.add(element)
    handleFilterUpdate(name, new Set<string>(filterState))
    setAll(
      filterState.size === 0
        ? QuantityEnum.EMPTY
        : filterState.size === filterValues.length
        ? QuantityEnum.FULL
        : QuantityEnum.HALF_FULL
    )
  }

  const handleKeyDown = (filterKey: keyof T) => (event: any) => {
    onKeyNav(getKeyDirection(event.nativeEvent.key), origin, filterKey)
    onDragEnd()
  }

  const handleSearch = () => (event: any) => {
    const searchResults = new Array<string>()
    const searchText: string = (event.currentTarget.value as string).toLocaleLowerCase()
    filterValues.forEach((element: string) => {
      const stringElement = element + ''
      const loweredElement = stringElement.toLocaleLowerCase()
      const found = loweredElement.search(searchText) !== -1
      found && searchResults.push(element)
    })
    setSearchedFilterSet(searchResults)
  }

  const handleSelectAll = () => () => {
    if (all === 2) {
      setAll(QuantityEnum.EMPTY)
      handleFilterUpdate(name, new Set<string>(new Set<string>()))
    } else {
      setAll(QuantityEnum.FULL)
      handleFilterUpdate(name, new Set<string>(filterValues))
    }
  }

  const Row = ({ index, style }) => {
    const showTodos = searchedFilterSet.length === filterValues.length
    if (index === 0 && showTodos) {
      return (
        <DropdownItem key='todos' className={classes.dropdownItem}>
          <Checkbox
            label='Todos os itens'
            onChange={handleSelectAll()}
            checked={all === QuantityEnum.FULL}
            indeterminate={all === QuantityEnum.HALF_FULL}
          />
        </DropdownItem>
      )
    }

    const value: string | undefined | null = searchedFilterSet[showTodos ? index - 1 : index]

    if (value && value.length > 0) {
      const bigValue = value.length > 45

      const key = name + value

      const selected = filterState.has(value)

      const label = formatter?.(value) ?? value

      return (
        <Tooltip text={bigValue && value}>
          <DropdownItem key={key} className={classes.dropdownItem} style={style}>
            <Checkbox
              title={value}
              label={bigValue ? `${label.substr(0, 45)}...` : label}
              onChange={handleSelect(value)}
              checked={selected}
              onMouseDown={(event) => {
                event.preventDefault()
                event.stopPropagation()
              }}
            />
          </DropdownItem>
        </Tooltip>
      )
    } else {
      return null
    }
  }

  return (
    <div ref={drag} className={css(classes.dndBox, isDragging && classes.dndBoxDragging)}>
      <React.Fragment>
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
                  placeholder='Pesquisa'
                  icon='zoomOutline'
                  onChange={handleSearch()}
                />
              </div>
            </DropdownItem>
            <FixedSizeList
              height={
                filterValues.length + 1 > 5
                  ? theme.typography.sizes.html * 8
                  : theme.typography.sizes.html * 2.2 * (filterValues.length + 1)
              }
              itemCount={
                searchedFilterSet.length === filterValues.length
                  ? searchedFilterSet.length + 1
                  : searchedFilterSet.length
              }
              itemSize={34}
              width={400}
            >
              {Row}
            </FixedSizeList>
          </div>
        </Dropdown>
      </React.Fragment>
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
