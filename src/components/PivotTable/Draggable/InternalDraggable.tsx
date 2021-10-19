import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, HFlow, Icon } from '../..'
import { useStyles } from '../../../styles'
import { DraggableProps } from './Draggable'
import { DraggableWrapper } from './DraggableWrapper'
import { draggableCreateStyles } from './style'
import { getKeyDirection } from './util'

export function InternalDraggable<T>(props: DraggableProps<T>) {
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
    if (onKeyNav) {
      onKeyNav(getKeyDirection(event.nativeEvent.key), origin)
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
