import React from 'react'
import { Checkbox, DropdownItem } from '../..'
import { useStyles } from '../../../styles'
import { draggableCreateStyles } from './style'

export interface DraggableRowProps<T> {
  value?: string
  name: keyof T
  selected: boolean
  handleSelect: (element: string) => (event: React.ChangeEvent<HTMLInputElement>) => void
  formatter?: (value: string) => string
}

export function DraggableRow<T>(props: DraggableRowProps<T>) {
  const { value, name, selected, handleSelect, formatter } = props

  const { classes } = useStyles(draggableCreateStyles)

  if (value && value.length > 0) {
    return (
      <DropdownItem
        key={name.toString() + value}
        className={classes.dropdownItem}
        aria-checked={selected ? 'true' : 'false'}
      >
        <Checkbox
          title={value}
          label={formatter?.(value) ?? value}
          onChange={handleSelect(value)}
          checked={selected}
          onMouseDown={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}
        />
      </DropdownItem>
    )
  } else {
    return null
  }
}
