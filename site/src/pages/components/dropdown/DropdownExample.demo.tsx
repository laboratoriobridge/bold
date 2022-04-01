import { Button, Dropdown, DropdownDivider, DropdownItem, Tooltip } from 'bold-ui'
import React, { useState } from 'react'

export default function DropdownExample() {
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement>()
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button innerRef={setButtonRef} onClick={handleClick} size='small' kind='primary' skin='outline'>
        Options
      </Button>

      <Dropdown anchorRef={buttonRef} open={open} onClose={handleClose} popperProps={{ placement: 'bottom' }}>
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
