/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import { FixedSizeList } from 'react-window'
import { Button, Checkbox, Dropdown, DropdownItem, HFlow, Icon, TextField, Tooltip } from '..'
import { useTheme } from '../../styles'
import { DraggableProps } from './Draggable'

export interface FilterDraggableProps<T> extends NonNullable<DraggableProps<T>> {
  styles
}

export function FilterDraggable<T>(props: FilterDraggableProps<T>) {
  const {
    name,
    type,
    origin,
    value,
    filterValues,
    filterState,
    onDragEnd,
    handleFilterUpdate,
    formatter,
    onKeyNav,
    styles,
  } = props

  const [searchedFilterSet, setSearchedFilterSet] = useState<Array<string>>(filterValues)

  const [open, setOpen] = useState(false)

  const [all, setAll] = useState<0 | 1 | 2>(
    filterState.size === 0 ? 0 : filterState.size === filterValues.length ? 2 : 1
  )

  const [buttonRef, setButtonRef] = useState<HTMLButtonElement>()

  const theme = useTheme()

  const [{ isDragging }, drag] = useDrag({
    item: { type, name: name, origin },
    end: (_item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (dropResult != null && dropResult.result === 'delete') {
        onDragEnd()
      }
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
    if (event.nativeEvent.isTrusted) {
      filterState.has(element) ? filterState.delete(element) : filterState.add(element)
      handleFilterUpdate(name, new Set<string>(filterState))
      if (filterState.size === 0) {
        setAll(0)
      } else if (filterState.size === filterValues.length) {
        setAll(2)
      } else {
        setAll(1)
      }
    }
  }

  const handleKeyDown = (filterKey: keyof T) => (event: any) => {
    const key = event.nativeEvent.key

    let direction

    switch (key) {
      case 'ArrowRight':
        direction = 'right'
        break

      case 'ArrowLeft':
        direction = 'left'
        break

      case 'ArrowUp':
        direction = 'up'
        break

      case 'ArrowDown':
        direction = 'down'
        break
    }

    onKeyNav(direction, origin, filterKey)
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

  const handleSelectAll = () => (event: any) => {
    if (event.nativeEvent.isTrusted) {
      if (all === 2) {
        setAll(0)
        handleFilterUpdate(name, new Set<string>(new Set<string>()))
      } else {
        setAll(2)
        handleFilterUpdate(name, new Set<string>(filterValues))
      }
    }
  }

  const Row = ({ index, style }) => {
    const showTodos = searchedFilterSet.length === filterValues.length
    if (index === 0 && showTodos) {
      return (
        <DropdownItem key='todos' css={styles.dropdownItem}>
          <Checkbox label='Todos os itens' onChange={handleSelectAll()} checked={all === 2} indeterminate={all === 1} />
        </DropdownItem>
      )
    }

    const value = searchedFilterSet[showTodos ? index - 1 : index]
    if (value || Number(value) === 0) {
      const bigValue = value.length > 45

      const key = name + value
      const selected = filterState.has(value)

      const label = formatter?.(value) ?? value

      return (
        <Tooltip text={bigValue && value}>
          <DropdownItem key={key} css={styles.dropdownItem} style={style}>
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
    <div ref={drag} css={[styles.dndBox, isDragging && styles.dndBoxDragging]}>
      <React.Fragment>
        <Button
          style={styles.button}
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
          style={styles.dropdown}
        >
          <div css={styles.dropdownArea} onBlur={(e) => e.stopPropagation()}>
            <DropdownItem css={styles.noOutline}>
              <div css={styles.search}>
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
