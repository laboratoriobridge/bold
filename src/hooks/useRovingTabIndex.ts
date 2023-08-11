// https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_roving_tabindex

import { useEffect, useRef } from 'react'

import { merge } from '../util'

export interface RovingTabIndexOptions {
  /**
   * Index of the item that should be intially focused when focus enters root container.
   */
  initialIndex?: number

  /**
   * Arrow keys that should focus the next element of the list.
   */
  nextKeys?: string[]

  /**
   * Arrow keys that should focus the previous element of the list.
   */
  prevKeys?: string[]

  /**
   * Arrow keys that should focus the first element of the list.
   */
  firstKeys?: string[]

  /**
   * Arrow keys that should focus the last element of the list.
   */
  lastKeys?: string[]

  /**
   * Whether the focus should wrap around when navigate before first item and after last item.
   */
  wrapAround?: boolean

  /**
   * Return an ordered array of HTMLElement that should have focus managed.
   */
  getItems(root: HTMLElement): HTMLElement[]
}

const defaultOptions: Partial<RovingTabIndexOptions> = {
  initialIndex: 0,
  nextKeys: ['ArrowDown', 'ArrowRight'],
  prevKeys: ['ArrowUp', 'ArrowLeft'],
  firstKeys: ['Home'],
  lastKeys: ['End'],
  wrapAround: false,
}

export function useRovingTabIndex(options: RovingTabIndexOptions) {
  const { initialIndex, nextKeys, prevKeys, firstKeys, lastKeys, getItems, wrapAround } = merge(
    {},
    defaultOptions,
    options
  )

  const rootRef = useRef<any>()

  // Initialize tabindex attributes:
  useEffect(() => {
    const items = getItems(rootRef.current)
    items.forEach((item, idx) => {
      if (idx === initialIndex) {
        item.setAttribute('tabindex', '0')
      } else {
        item.setAttribute('tabindex', '-1')
      }
    })
  }, [initialIndex])

  // Manage child items focus event:
  useEffect(() => {
    const items = getItems(rootRef.current)

    const handleChildFocus = (event: FocusEvent) => {
      items.forEach(item => item.setAttribute('tabindex', '-1'))

      const target = event.currentTarget as HTMLElement
      target.setAttribute('tabindex', '0')
    }

    items.forEach(item => item.addEventListener('focus', handleChildFocus))
    return () => items.forEach(item => item.removeEventListener('focus', handleChildFocus))
  }, [options])

  // Manage keydown event on root ref:
  useEffect(() => {
    const getTargetIndex = (items: HTMLElement[], key: string) => {
      const activeElement = document.activeElement as HTMLElement
      const activeIndex = items.indexOf(activeElement)

      if (nextKeys.includes(key)) {
        return activeIndex < items.length - 1 ? activeIndex + 1 : wrapAround ? 0 : null
      }
      if (prevKeys.includes(key)) {
        return activeIndex > 0 ? activeIndex - 1 : wrapAround ? items.length - 1 : null
      }
      if (firstKeys.includes(key)) {
        return 0
      }
      if (lastKeys.includes(key)) {
        return items.length - 1
      }

      return null
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if ([...nextKeys, ...prevKeys, ...firstKeys, ...lastKeys].includes(event.key)) {
        const items = getItems(rootRef.current)
        const targetIndex = getTargetIndex(items, event.key)
        const target = items[targetIndex]

        if (target) {
          target.focus()
        }

        event.preventDefault()
      }
    }

    const localRef = rootRef.current
    localRef.addEventListener('keydown', handleKeyDown)
    return () => localRef.removeEventListener('keydown', handleKeyDown)
  }, [options])

  return rootRef
}
