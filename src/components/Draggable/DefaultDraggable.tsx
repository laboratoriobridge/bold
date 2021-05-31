import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { RealDefaultDraggable } from './RealDefaultDraggable'

export interface DefaultDraggableProps<T> {
  /**
   * The name of the draggable, as an identifier
   */
  name: keyof T

  /**
   * Used to know which dropable it came from
   */
  origin: string

  /**
   * The text that will appear on the draggable button
   */
  value: string

  /**
   * Called when the drag event ends
   * You might want when the draggable is moved from one dropable to another
   */
  onDragEnd: () => void

  /**
   * Called when an arrow key is pressed
   * You may want when the user presses an arrow key to move the draggable from one dropable to another
   */
  onKeyNav: (dir: 'left' | 'right' | 'up' | 'down', origin: string, key?: keyof T) => void
}

export function DefaultDraggable<T>(props: DefaultDraggableProps<T>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <RealDefaultDraggable {...props} />
    </DndProvider>
  )
}
