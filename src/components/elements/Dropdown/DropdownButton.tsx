import React from 'react'
import { PopperProps } from 'react-popper'

import { Omit } from '../../../util/types'
import { Button, ButtonProps } from '../Button'
import { Tooltip } from '../Tooltip'

import { Dropdown } from './Dropdown'
import { DropdownItem, DropdownItemProps } from './DropdownItem'

export interface DropdownButtonProps extends ButtonProps {
  items: DropdownButtonItemProps[]
  popperProps?: Omit<PopperProps, 'children'>
}

export function DropdownButton(props: DropdownButtonProps) {
  const { items, popperProps, ...rest } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const [isOpen, setOpen] = React.useState<boolean>(false)

  const handleButtonClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button innerRef={buttonRef} onClick={handleButtonClick} {...rest} />
      <Dropdown anchorRef={buttonRef} open={isOpen} onClose={handleClose}>
        {items.map((item, idx) => {
          return <DropdownButtonItem key={idx} {...item} />
        })}
      </Dropdown>
    </>
  )
}

export interface DropdownButtonItemProps extends DropdownItemProps {
  content: React.ReactNode
  tooltip?: string
}

export function DropdownButtonItem(props: DropdownButtonItemProps) {
  const { content, tooltip, ...rest } = props

  return (
    <Tooltip text={tooltip}>
      <DropdownItem {...rest}>{content}</DropdownItem>
    </Tooltip>
  )
}

DropdownButtonItem.defaultProps = {
  content: '',
} as Partial<DropdownButtonItemProps>
