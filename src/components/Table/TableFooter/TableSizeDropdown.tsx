import React, { useState } from 'react'

import { Button } from '../../Button'
import { Dropdown, DropdownItem } from '../../Dropdown'
import { Icon } from '../../Icon'
import { Text } from '../../Text'

export interface TableSizeDropdownProps {
  size: number
  options: number[]
  onChange(size: number): any
}

export function TableSizeDropdown(props: TableSizeDropdownProps) {
  const { options, size, onChange } = props

  const [buttonRef, setButtonRef] = useState<HTMLButtonElement>()
  const [open, setOpen] = useState(false)

  const handleChange = (option) => () => {
    onChange(option)
  }

  const handleClick = () => setOpen((state) => !state)

  const handleClose = () => {
    setOpen(false)
    buttonRef.focus()
  }

  return (
    <>
      <Button innerRef={setButtonRef} onClick={handleClick} size='small' skin='ghost' style={{ padding: '0 0.25rem' }}>
        <Text>{size}</Text>
        <Icon icon='angleDown' style={{ marginLeft: '0.125rem' }} />
      </Button>

      <Dropdown anchorRef={buttonRef} open={open} onClose={handleClose}>
        {options.map((op) => (
          <DropdownItem key={op} onClick={handleChange(op)}>
            {op}
          </DropdownItem>
        ))}
      </Dropdown>
    </>
  )
}
