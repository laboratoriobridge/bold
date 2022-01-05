import { Options as PopperOptions } from '@popperjs/core'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { usePopper } from 'react-popper'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Theme, useStyles } from '../../styles'
import { randomStr } from '../../util/string'
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

export interface DropdownProps extends DropdownMenuProps {
  /**
   * The anchor element that should receive the dropdown menu.
   */
  anchorRef: HTMLElement | null

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
  popperProps?: Partial<PopperOptions>

  children?: React.ReactNode

  /**
   * Called whenever the dropdown wants to close itself.
   *
   * It may be called if:
   * - `Escape` button is pressed
   * - Focus go outside dropdown menu
   * - Clicked anywhere outside anchor and dropdown menu
   * - Any item is clicked and `autoclose` prop is `true`
   */
  onClose?(): void
}

export function Dropdown(props: DropdownProps) {
  const { children, anchorRef, popperProps, open, onClose, autoclose, style, ...rest } = props
  const { classes } = useStyles(createStyles)

  const [menuRef, setMenuRef] = useState<HTMLUListElement>()

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, menuRef, popperProps)

  const dropdownIdRef = React.useRef<string>(`dropdown-${randomStr()}`)

  // Attaches aria attributes to anchor element
  useEffect(() => {
    if (anchorRef) {
      anchorRef.setAttribute('aria-haspopup', 'true')

      if (open) {
        anchorRef.setAttribute('aria-expanded', 'true')
        anchorRef.setAttribute('aria-controls', dropdownIdRef.current)
      } else {
        anchorRef.removeAttribute('aria-expanded')
        anchorRef.removeAttribute('aria-controls')
      }
    }
  }, [open, anchorRef])

  // Attaches Escape key event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open && e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

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
        if (menuRef) {
          const firstItem = menuRef.querySelector('[role="menuitem"]:not([aria-disabled="true"])') as HTMLElement

          if (firstItem) {
            firstItem.focus()
          }
        }
      })
    }
  }, [open, menuRef])

  // Call onClose if target focus is outside menu
  const handleBlur = useCallback(() => {
    setTimeout(() => {
      if (menuRef) {
        const currentFocus = menuRef.ownerDocument.activeElement
        if (!menuRef.contains(currentFocus)) {
          onClose()
        }
      }
    })
  }, [onClose, menuRef])

  // Call `onClose` when clicked outside dropdown and anchor
  useClickOutside([anchorRef, menuRef], () => {
    if (open) {
      onClose()
    }
  })

  const handleMenuClick = useCallback(() => {
    if (autoclose) {
      onClose()
    }
  }, [autoclose, onClose])

  return (
    open && (
      <DropdownMenu
        id={dropdownIdRef.current}
        innerRef={setMenuRef}
        style={[popperStyle as any, classes.dropdown, style]}
        data-placement={placement}
        onClick={handleMenuClick}
        onBlur={handleBlur}
        {...rest}
      >
        {children}
      </DropdownMenu>
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
