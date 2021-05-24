/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, HFlow, Icon } from '..'
import { DraggableProps } from './Draggable'

export interface DefaultDraggableProps<T>
  extends Omit<DraggableProps<T>, 'filterValues' | 'filterState' | 'handleFilterUpdate'> {
  styles: any
}

export function DefaultDraggable<T>(props: DefaultDraggableProps<T>) {
  const { name, type, origin, value, onDragEnd, onKeyNav, styles } = props

  const [{ isDragging }, drag] = useDrag({
    item: { type, name: name, origin },
    end: (_item, monitor) => {
      if (monitor.getDropResult() != null) onDragEnd()
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const handleKeyDown = (event: any) => {
    const key = event.nativeEvent.key
    let direction

    switch (key) {
      case 'ArrowRight':
        direction = 'right'
        break

      case 'ArrowLeft':
        direction = 'left'
        break

      case 'ArrowUp':
        direction = 'up'
        break

      case 'ArrowDown':
        direction = 'down'
        break
    }

    onKeyNav(direction, origin)
    onDragEnd()
  }

  return (
    <div ref={drag} css={[styles.dndBox, isDragging && styles.dndBoxDragging]}>
      <React.Fragment>
        <Button
          style={[styles.button, 'padding-right: 20px;']}
          onKeyDown={handleKeyDown}
          size='small'
          kind='primary'
          skin='ghost'
        >
          <HFlow hSpacing={0.5}>
            <Icon icon='dragdrop' />
            {value}
          </HFlow>
        </Button>
      </React.Fragment>
    </div>
  )
}
