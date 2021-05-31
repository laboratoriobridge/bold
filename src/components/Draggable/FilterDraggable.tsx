import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { RealFilterDraggable } from './RealFilterDraggable'

export interface FilterDraggableProps<T> {
  name: keyof T
  origin: string
  value: string
  filterValues: Array<string>
  filterState: Set<string>
  onDragEnd: () => void
  onKeyNav: (dir: 'left' | 'right' | 'up' | 'down', origin: string, key?: keyof T) => void
  onFilterUpdate: (key: keyof T, filter: Set<string>) => void
  formatter?: (value: string) => string
}

export function FilterDraggable<T>(props: FilterDraggableProps<T>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <RealFilterDraggable {...props} />
    </DndProvider>
  )
}
