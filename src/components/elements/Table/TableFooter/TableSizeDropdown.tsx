import { Interpolation } from 'emotion'
import React from 'react'

import { DropdownButton, DropdownItemConfig } from '../../Dropdown'
import { Icon } from '../../Icon'
import { Text } from '../../textual'

export interface TableSizeDropdownProps {
  size: number
  options: number[]
  onChange(size: number): any
}

export function TableSizeDropdown(props: TableSizeDropdownProps) {
  const { options, size, onChange } = props

  const items: DropdownItemConfig[] = options.map(op => ({
    content: op,
    onClick: () => onChange(op),
  }))

  const style: Interpolation = {
    padding: '0 0.25rem',
  }

  return (
    <DropdownButton items={items} size='small' skin='ghost' style={style}>
      <Text>{size}</Text>
      <Icon icon='angleDown' style={{ marginLeft: '0.125rem' }} />
    </DropdownButton>
  )
}
