import React from 'react'
import { ConnectDragSource } from 'react-dnd'
import { useStyles } from '../../../styles'
import { draggableCreateStyles } from './style'

export interface DraggableWrapperProps {
  drag: ConnectDragSource
  children: React.ReactNode
  isDragging: boolean
}

export function DraggableWrapper(props: DraggableWrapperProps) {
  const { isDragging, drag, children } = props

  const { classes, css } = useStyles(draggableCreateStyles)

  return (
    <div ref={drag} className={css(classes.dndBox, isDragging && classes.dndBoxDragging)}>
      {children}
    </div>
  )
}
