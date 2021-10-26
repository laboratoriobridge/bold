import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DroppableProps } from '../Droppable/Droppable'
import { InternalDraggable } from './InternalDraggable'

export interface DraggableProps<T> extends Pick<DroppableProps<T>, 'onKeyNav'> {
  /**
   * The name of the draggable, as an identifier
   */
  name: keyof T

  /**
   * The type of draggables it belongs to
   */
  type: string

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
}

export function Draggable<T>(props: DraggableProps<T>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <InternalDraggable {...props} />
    </DndProvider>
  )
}
