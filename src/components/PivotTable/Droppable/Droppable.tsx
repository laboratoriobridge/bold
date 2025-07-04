import React, { CSSProperties, useMemo } from 'react'
import { useDrop } from 'react-dnd'
import { Theme, useLocale, useStyles } from '../../..'
import { InternalDraggable } from '../Draggable/InternalDraggable'

import { InternalFilterDraggable } from '../Draggable/InternalFilterDraggable'
import { KeyMap } from '../model'
import { DroppableFilter } from './types/Filter'
import { KeyNavigationDirection } from './types/model'

export interface DroppableProps<T extends object, TOrigin = string> extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The name of the droppable, as an identifier
   */
  name: TOrigin

  /**
   * The name of the type of draggable accepted by the droppable. Items can be dragged between droppables that accept the same type of draggables.
   */
  accept: string

  /**
   * Map of all the keys to a display name of the key and a formatter and ordenator for the filter options
   */
  keyMapping: KeyMap<T>

  /**
   * Array of keys currently present in this component
   */
  keyState: Array<keyof T>

  /**
   * Map of keys to the state of their filters
   */

  /**
   * Object that contains the keys and it's filter options,
   * the filters chosen and a function that updates the chosen filters of a key
   */
  filter?: DroppableFilter<T>

  /**
   * Function that updates the keyState of this component
   */
  handleKeyUpdate: (values: Array<keyof T>) => void

  /**
   * Function used to navigate a draggable between droppables using the directional arrows
   */
  onKeyNav?: (direction: KeyNavigationDirection, origin: TOrigin, key?: keyof T) => boolean
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

export function Droppable<T extends object, TOrigin = string>(props: DroppableProps<T, TOrigin>) {
  const { name, keyState, keyMapping, accept, filter, handleKeyUpdate, onKeyNav, ...rest } = props

  if (filter) {
    if (filter.keys.size === 0)
      throw new Error('The filter keys are empty, which must contain the keys and its options')

    const keysWithoutFilters = Array.from(filter.keys.keys()).filter((key) => filter.keys.get(key).length === 0)

    if (keysWithoutFilters.length > 0) {
      if (keysWithoutFilters.length === 1)
        throw new Error(`The key '${keysWithoutFilters.toString()}' is defined in filter keys but doesn't have options`)
      else
        throw new Error(`The keys [${keysWithoutFilters.toString()}] are defined in filter keys but don't have options`)
    }
  }

  const locale = useLocale()

  const [{ isOver }, drag] = useDrop({
    accept: accept,
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
    handleKeyUpdate?.(tempKeys)
  }

  const draggableButtons = useMemo(
    () =>
      keyState.map((key) => {
        const filterOptions = filter?.keys.get(key)
        if (filter?.state && filterOptions?.length > 0) {
          return (
            <InternalFilterDraggable<T, TOrigin>
              key={key as string}
              type={accept}
              name={key}
              filterItems={filterOptions}
              selectedItems={filter.state.get(key) || new Set<string>()}
              value={keyMapping.get(key) ? keyMapping.get(key).keyName : (key as string)}
              onFilterUpdate={filter.handleUpdate}
              origin={name}
              onDragEnd={() => deleteByKey(key)}
              onKeyNav={onKeyNav}
            />
          )
        } else {
          return (
            <InternalDraggable<T, TOrigin>
              key={key as string}
              type={accept}
              name={key}
              value={keyMapping.get(key) ? keyMapping.get(key).keyName : (key as string)}
              origin={name}
              onDragEnd={() => deleteByKey(key)}
              onKeyNav={onKeyNav}
            />
          )
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keyState, accept, keyMapping, name, filter, onKeyNav, deleteByKey]
  )

  const hasKeys = keyState.length > 0

  const { classes } = useStyles(createStyles, hasKeys)
  return (
    <div ref={drag} className={classes.box} {...rest}>
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

const createStyles = (theme: Theme, hasKeys: boolean) => ({
  placeholder: {
    alignSelf: 'center',
    textAlign: 'center',
  } as CSSProperties,
  box: {
    display: 'flex',
    minHeight: '7.18rem',
    minWidth: '16rem',
    margin: '0.25rem',
    padding: '0.75rem',
    justifyContent: hasKeys ? 'flex-start' : 'center',
  } as CSSProperties,
})
