import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, HFlow, Icon } from '../..'
import { useStyles } from '../../../styles'
import { DraggableProps } from './Draggable'
import { DraggableWrapper } from './DraggableWrapper'
import { draggableCreateStyles } from './style'

export function InternalDraggable<T extends object>(props: DraggableProps<T>) {
  const { name, origin, value, onDragEnd, onKeyNav, type } = props

  const { classes } = useStyles(draggableCreateStyles)

  const [{ isDragging }, drag] = useDrag({
    item: { type: type, name: name, origin },
    end: (_item, monitor) => {
      if (monitor.getDropResult()['result']) onDragEnd()
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const handleKeyDown = (event: any) => {
    const key = event.nativeEvent.key
    if (key === 'ArrowRight') {
      onKeyNav('right', origin)
      onDragEnd()
    } else if (key === 'ArrowLeft') {
      onKeyNav('left', origin)
      onDragEnd()
    }
  }

  return (
    <DraggableWrapper drag={drag} isDragging={isDragging}>
      <Button
        style={[classes.button, 'padding-right: 1.25rem;']}
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
    </DraggableWrapper>
  )
}
