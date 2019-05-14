import { PopperOptions } from 'popper.js'
import React, { useEffect, useRef } from 'react'

import usePopper from '../../../hooks/usePopper'
import { Theme, useStyles } from '../../../styles'
import { randomStr } from '../../../util/string'
import { Portal } from '../Portal'

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

export interface DropdownProps extends DropdownMenuProps {
  /**
   * The anchor element that should receive the dropdown menu.
   */
  anchorRef: React.RefObject<HTMLElement>

  /**
   * Whether the dropdown menu is open or not.
   * When dropdown is opened, it automatically attaches aria attributes to anchor element and focus first menu item.
   */
  open: boolean

  /**
   * If true, the `onClose` callback is called when any menu item is clicked.
   */
  autoclose?: boolean

  /**
   * Popper instance props.
   */
  popperProps?: PopperOptions

  children?: React.ReactNode

  /**
   * Called whenever the dropdown wants to close itself.
   *
   * It may be called if:
   * - `Escape` button is pressed
   * - Focus go outside dropdown menu
   * - Any item is clicked and `autoclose` prop is `true`
   */
  onClose?(): void
}

export function Dropdown(props: DropdownProps) {
  const { children, anchorRef, popperProps, open, onClose, autoclose, ...rest } = props
  const { classes } = useStyles(createStyles)

  const menuRef = useRef<HTMLUListElement>()

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: menuRef,
      ...popperProps,
    },
    [open]
  )

  const dropdownIdRef = React.useRef<string>(`dropdown-${randomStr()}`)

  // Attaches aria attributes to anchor element
  useEffect(() => {
    anchorRef.current.setAttribute('aria-haspopup', 'true')

    if (open) {
      anchorRef.current.setAttribute('aria-expanded', 'true')
      anchorRef.current.setAttribute('aria-controls', dropdownIdRef.current)
    } else {
      anchorRef.current.removeAttribute('aria-expanded')
      anchorRef.current.removeAttribute('aria-controls')
    }
  }, [open])

  // Attaches Escape key event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open && e.key === 'Escape') {
        onClose()
      }
    }

    addEventListener('keydown', handleKeyDown)
    return () => removeEventListener('keydown', handleKeyDown)
  }, [open])

  // When opened, focus the first menu item
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (open) {
      setTimeout(() => {
        // Delay focus to preserve window scroll position
        if (menuRef.current) {
          const firstItem = menuRef.current.firstElementChild as HTMLLIElement
          firstItem.focus()
        }
      })
    }
  }, [open])

  const handleBlur = () => {
    setTimeout(() => {
      // Call onClose if target focus is outside menu
      if (menuRef.current) {
        const currentFocus = menuRef.current.ownerDocument.activeElement
        if (!menuRef.current.contains(currentFocus)) {
          onClose()
        }
      }
    })
  }

  const handleMenuClick = () => {
    if (autoclose) {
      onClose()
    }
  }

  return (
    open && (
      <Portal>
        <DropdownMenu
          id={dropdownIdRef.current}
          innerRef={menuRef}
          style={[popperStyle, classes.dropdown]}
          data-placement={placement}
          onClick={handleMenuClick}
          onBlur={handleBlur}
          {...rest}
        >
          {children}
        </DropdownMenu>
      </Portal>
    )
  )
}

Dropdown.defaultProps = {
  autoclose: true,
  onClose: () => null,
} as Partial<DropdownProps>

export const createStyles = (theme: Theme) => ({
  dropdown: {
    zIndex: theme.zIndex.dropdown,
  },
})
