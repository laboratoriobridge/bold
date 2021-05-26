import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, HFlow, Icon } from '..'
import { useStyles } from '../../styles'
import { DefaultDraggableProps } from './DefaultDraggable'
import { draggableCreateStyles } from './RealFilterDraggable'
import { ItemTypes } from './types/ItemTypes'

export function RealDefaultDraggable<T>(props: DefaultDraggableProps<T>) {
  const { name, origin, value, onDragEnd, onKeyNav } = props

  const { classes, css } = useStyles(draggableCreateStyles)

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.DEFAULT, name: name, origin },
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
    <div ref={drag} className={css(classes.dndBox, isDragging && classes.dndBoxDragging)}>
      <React.Fragment>
        <Button
          style={[classes.button, 'padding-right: 20px;']}
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
