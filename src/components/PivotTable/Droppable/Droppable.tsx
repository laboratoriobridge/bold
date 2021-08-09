/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useDrop } from 'react-dnd'
import { useLocale } from '../../..'
import { useStyles } from '../../../styles'
import { InternalDraggable } from '../Draggable/InternalDraggable'

import { InternalFilterDraggable } from '../Draggable/InternalFilterDraggable'
import { droppableCreateStyles } from './style'

export interface DroppableProps<T> {
  /**
   * The name of the droppable, as an identifier
   */
  name: string

  /**
   * The name of the type of draggable it belongs. Itens can be dragged between droppables of the same type
   */
  type: string

  /**
   * Map of all the keys belonging to the same type with an array of filter options
   */
  keys: Map<keyof T, Array<string>>

  /**
   * Map of all the keys to a display name of the key and a formatter and ordenator for the filter options
   */
  keyMapping: Map<
    keyof T,
    { keyName: string; formatter?: (value: string) => string; ordenator?: (a: string, b: string) => number }
  >

  /**
   * Array of keys currently present in this component
   */
  keyState: Array<keyof T>

  /**
   * Map of keys to the state of their filters
   */
  filterState?: Map<keyof T, Set<string>>

  /**
   * Function that updates the filterState of a key
   */
  handleFilterUpdate?: (key: keyof T, filtro: Set<string>) => void

  /**
   * Function that updates the keyState of this component
   */
  handleKeyUpdate: (values: Array<keyof T>) => void

  /**
   * Function used to navigate a draggable between droppables using the directional arrows
   */
  onKeyNav?: (dir: 'left' | 'right' | 'up' | 'down' | null, origin: string, key?: keyof T) => void
}

export interface DragItem<T> {
  /**
   * Name of the item, as an identifier
   */
  name: keyof T

  /**
   * The type of droppable item can be dropped on
   */
  type: string

  /**
   * Name of the origin droppable of the item
   */
  origin: string
}

export function Droppable<T>(props: DroppableProps<T>) {
  const { name, keyState, keyMapping, type, filterState, handleKeyUpdate, handleFilterUpdate, onKeyNav } = props

  if ((filterState && !handleFilterUpdate) || (!filterState && handleFilterUpdate)) {
    throw new Error('The filterState and handleFilterUpdate props must always be defined together')
  }

  const locale = useLocale()

  const [{ isOver }, drag] = useDrop({
    accept: type,
    drop(item: DragItem<T>) {
      if (!keyState.includes(item.name)) {
        const newKeys = [...keyState, item.name]
        handleKeyUpdate && handleKeyUpdate(newKeys)
        return { result: true }
      } else {
        const pos = keyState.findIndex((element) => element === item.name)
        const temp = [...keyState]
        temp.splice(pos, 1)
        const newKeys = [...temp, item.name]
        handleKeyUpdate && handleKeyUpdate(newKeys)
        return { result: false }
      }
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: monitor.isOver() ? monitor.getItem().origin !== name : monitor.isOver(),
    }),
  })

  function deleteByKey(id: keyof T) {
    let tempKeys = [...keyState]
    const index = tempKeys.indexOf(id)
    tempKeys.splice(index, 1)
    handleKeyUpdate && handleKeyUpdate(tempKeys)
  }
  const draggableButtons = keyState.map((key, value) => {
    const hasFilter = filterState && props.keys.get(key).length > 0
    if (hasFilter && handleFilterUpdate) {
      return (
        <InternalFilterDraggable<T>
          key={key as string}
          type={type}
          name={key}
          filterItems={props.keys.get(key)}
          selectedItems={props.filterState.get(key) || new Set<string>()}
          value={keyMapping.get(key) ? keyMapping.get(key).keyName : (key as string)}
          onFilterUpdate={handleFilterUpdate}
          origin={name}
          onDragEnd={() => deleteByKey(key)}
          onKeyNav={onKeyNav}
        />
      )
    } else {
      return (
        <InternalDraggable<T>
          key={key as string}
          type={type}
          name={key}
          value={keyMapping.get(key) ? keyMapping.get(key).keyName : (key as string)}
          origin={name}
          onDragEnd={() => deleteByKey(key)}
          onKeyNav={onKeyNav}
        />
      )
    }
  })
  const hasKeys = keyState.length > 0

  const { classes } = useStyles(droppableCreateStyles, hasKeys)
  return (
    <div ref={drag} className={classes.box}>
      {hasKeys ? (
        <div>{draggableButtons}</div>
      ) : (
        <div className={classes.placeholder}>
          <i>{isOver ? locale.droppable.isOver : locale.droppable.isNotOver}</i>
        </div>
      )}
    </div>
  )
}
