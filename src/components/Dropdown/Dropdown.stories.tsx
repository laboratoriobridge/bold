import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import React, { useState } from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { Dropdown } from './Dropdown'
import { DropdownDivider } from './DropdownDivider'
import { DropdownItem } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'

export default { title: 'Components/Dropdown' }

export const Default = () => {
  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement>()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button innerRef={setAnchorRef} size='small' onClick={() => setOpen((state) => !state)}>
        <Icon icon='dots' />
      </Button>

      <Dropdown anchorRef={anchorRef} open={open} onClose={() => setOpen(false)} autoclose={boolean('autoclose', true)}>
        <DropdownItem onClick={action('onClick Item #1')}>Item 1</DropdownItem>
        <DropdownItem onClick={action('onClick Item #2')} component='a' href=''>
          Item 2 - Link
        </DropdownItem>
        <Tooltip text='This is disabled'>
          <DropdownItem onClick={action('onClick Item #3')} disabled>
            Item 3
          </DropdownItem>
        </Tooltip>
        <DropdownDivider />
        <DropdownItem onClick={action('onClick Item #4')} type='danger'>
          Item #4
        </DropdownItem>
      </Dropdown>
    </>
  )
}

export const Menu = () => (
  <DropdownMenu>
    <DropdownItem onClick={action('clicked item 1')}>Option</DropdownItem>
    <DropdownItem onClick={action('clicked item 2')} disabled>
      Option
    </DropdownItem>
    <DropdownItem onClick={action('clicked item 3')}>Option</DropdownItem>
    <DropdownDivider />
    <DropdownItem onClick={action('clicked item 4')} type='danger' disabled>
      Danger Option
    </DropdownItem>
    <DropdownItem onClick={action('clicked item 4')} type='danger'>
      <Tooltip text='Some danger option'>
        <div>Danger Option</div>
      </Tooltip>
    </DropdownItem>
  </DropdownMenu>
)
