import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { css } from '@emotion/core'
import { useTheme } from '../../styles'
import { FilterDraggable } from './FilterDraggable'
import { ItemTypes } from './types/ItemTypes'
import { DefaultDraggable } from './DefaultDraggable'

export interface DraggableProps<T> {
  name: keyof T
  type: ItemTypes
  origin: string
  value: string
  filterValues?: Array<string>
  filterState?: Set<string>
  onDragEnd: () => void
  onKeyNav: (dir: 'left' | 'right' | 'up' | 'down', origin: string, key?: keyof T) => void
  handleFilterUpdate?: (key: keyof T, filtro: Set<string>) => void
  formatter?: (value: string) => string
}

export function Draggable<T>(props: DraggableProps<T>) {
  const theme = useTheme()

  const styles = {
    button: css`
      border: solid 1px ${theme.pallete.gray.c60};
      color: ${theme.pallete.gray.c10};
      border-radius: 2px;
      box-shadow: ${theme.shadows.outer[10]};
      padding-left: 0px;
      font-size: 13px;
    `,
    dndBox: css`
      display: inline-block;
      margin: 0.25rem 0.25rem;
    `,
    dndBoxDragging: css`
      box-shadow: ${theme.shadows.outer[10]};
    `,
    dropdownItem: css`
      width: 100%;
      cursor: pointer;
      border-top: 1px solid ${theme.pallete.gray.c80};
      padding: 0.25rem;
    `,
    dropdownArea: css`
      max-height: 12rem;
      overflow: auto;
    `,
    dropdown: css`
      padding: 0rem;
    `,
    search: css`
      padding: 0.5rem;
    `,
    noOutline: css`
      outline-color: ${theme.pallete.surface.main};
    `,
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {props.type === ItemTypes.FILTER && props.filterState && props.filterValues && props.handleFilterUpdate && (
        <FilterDraggable {...props} styles={styles} />
      )}

      {props.type === ItemTypes.DEFAULT && <DefaultDraggable {...props} styles={styles} />}
    </DndProvider>
  )
}
