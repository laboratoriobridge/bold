import { useRef, useState } from 'react'

import { Dropdown, DropdownDivider, DropdownItem, Tooltip } from '../../../../lib'

function DropMenuDemo() {
  const anchor = useRef<HTMLButtonElement>()

  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <button ref={anchor} onClick={handleClick}>
        Custom achor element
      </button>

      <Dropdown anchorRef={anchor} open={open} onClose={handleClose} popperProps={{ placement: 'right-start' }}>
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

export default DropMenuDemo
