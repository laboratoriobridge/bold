import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DefaultDraggableProps } from './DefaultDraggable'

import { RealFilterDraggable } from './RealFilterDraggable'

export interface FilterDraggableProps<T> extends DefaultDraggableProps<T> {
  /**
   * The items that should appear on the list
   */
  filterItems: Array<string>

  /**
   * The items that were chosen by the user
   */
  chosenItems: Set<string>

  /**
   * Called when items are added or removed in the chosenItems prop
   */
  onFilterUpdate: (key: keyof T, filter: Set<string>) => void

  /**
   * To format each item of the filter list
   */
  formatter?: (value: string) => string
}

export function FilterDraggable<T>(props: FilterDraggableProps<T>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <RealFilterDraggable {...props} />
    </DndProvider>
  )
}
