import { Button, Dropdown, DropdownDivider, DropdownItem, Tooltip } from 'bold-ui'
import React, { useRef, useState } from 'react'

export default function DropdownExample() {
  const buttonRef = useRef<HTMLButtonElement>()

  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    buttonRef.current.focus()
  }

  return (
    <>
      <Button innerRef={buttonRef} onClick={handleClick} size='small' kind='primary' skin='outline'>
        Options
      </Button>

      <Dropdown anchorRef={buttonRef} open={open} onClose={handleClose} popperProps={{ placement: 'right-start' }}>
        <DropdownItem onClick={console.log}>Item #1</DropdownItem>
        <Tooltip text='Disabled item'>
          <DropdownItem onClick={console.log} disabled>
            Item #2
          </DropdownItem>
        </Tooltip>
        <DropdownDivider />
        <DropdownItem component='a' href='/'>
          Link item
        </DropdownItem>
        <DropdownItem type='danger' onClick={console.log}>
          Item #3
        </DropdownItem>
      </Dropdown>
    </>
  )
}
