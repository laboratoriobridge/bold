import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DraggableProps } from './Draggable'

import { InternalFilterDraggable } from './InternalFilterDraggable'

export interface FilterDraggableProps<T> extends DraggableProps<T> {
  /**
   * The items that should appear on the list
   */
  filterItems: Array<string>

  /**
   * The items that were selected by the user
   */
  selectedItems: Set<string>

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
      <InternalFilterDraggable {...props} />
    </DndProvider>
  )
}
