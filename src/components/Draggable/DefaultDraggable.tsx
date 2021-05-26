import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { RealDefaultDraggable } from './RealDefaultDraggable'

export interface DefaultDraggableProps<T> {
  name: keyof T
  origin: string
  value: string
  onDragEnd: () => void
  onKeyNav: (dir: 'left' | 'right' | 'up' | 'down', origin: string, key?: keyof T) => void
  formatter?: (value: string) => string
}

export function DefaultDraggable<T>(props: DefaultDraggableProps<T>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <RealDefaultDraggable {...props} />
    </DndProvider>
  )
}
