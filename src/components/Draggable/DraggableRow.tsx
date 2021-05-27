import React from 'react'
import { Checkbox, DropdownItem, Tooltip } from '..'
import { useStyles } from '../../styles'
import { draggableCreateStyles } from './RealFilterDraggable'
import { QuantityEnum } from './types/QuantityEnum'

export interface DraggableRowProps<T> {
  index: any
  style: any
  all: number
  name: keyof T
  searchedFilterSet: Array<string>
  numberOfFilterValues: number
  filterState: Set<string>
  handleSelectAll: () => () => void
  handleSelect: (element: string) => (event: React.ChangeEvent<HTMLInputElement>) => void
  formatter?: (value: string) => string
}

export function DraggableRow<T>(props: DraggableRowProps<T>) {
  const {
    index,
    style,
    name,
    all,
    searchedFilterSet,
    numberOfFilterValues,
    filterState,
    handleSelectAll,
    handleSelect,
    formatter,
  } = props

  const { classes } = useStyles(draggableCreateStyles)

  const showTodos = searchedFilterSet.length === numberOfFilterValues

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
