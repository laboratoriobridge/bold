import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, HFlow, Icon } from '../..'
import { useStyles } from '../../../styles'
import { DraggableProps } from './Draggable'
import { DraggableWrapper } from './DraggableWrapper'
import { draggableCreateStyles } from './style'
import { useDraggableKeyNavigation } from './useDraggableNavigation'

export function InternalDraggable<T extends object, TOrigin = string>(props: DraggableProps<T, TOrigin>) {
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

  const { handleKeyDown } = useDraggableKeyNavigation(onDragEnd, origin, onKeyNav)

  return (
    <DraggableWrapper drag={drag} isDragging={isDragging}>
      <Button
        style={[classes.button, 'padding-right: 1.25rem;']}
        onKeyDown={handleKeyDown(name)}
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
