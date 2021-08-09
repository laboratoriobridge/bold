import { fireEvent, render } from '@testing-library/react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import React from 'react'

import { Droppable, DroppableProps } from './Droppable'
type Fruit = {
  name: string
  size?: string
}
type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

const keyMapping = new Map<keyof Fruit, KeyMapping>([
  ['name', { keyName: 'Name' }],
  ['size', { keyName: 'Size' }],
])
const keys = new Map<keyof Fruit, string[]>([
  ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
  ['size', ['Medium', 'Small', 'Big']],
])
const filterState = new Map<keyof Fruit, Set<string>>()

keys.forEach((value, key) => filterState.set(key, new Set(value)))

const createDefaultComponent = (props: Partial<DroppableProps<Fruit>> = {}) => (
  <DndProvider backend={HTML5Backend}>
    <Droppable<Fruit>
      name={'droppable-1'}
      keyState={['name']}
      type={'fruit-table'}
      keyMapping={keyMapping}
      keys={keys}
      handleKeyUpdate={() => {}}
      {...props}
    />
    <Droppable<Fruit>
      name={'droppable-2'}
      keyState={[]}
      type={'fruit-table'}
      keyMapping={new Map<keyof Fruit, KeyMapping>()}
      keys={keys}
      handleKeyUpdate={() => {}}
      {...props}
    />
  </DndProvider>
)

const createFilterComponent = (props: Partial<DroppableProps<Fruit>> = {}) => (
  <DndProvider backend={HTML5Backend}>
    <Droppable<Fruit>
      name={'droppable-1'}
      keyState={['name']}
      filterState={filterState}
      type={'fruit-table'}
      keyMapping={new Map<keyof Fruit, KeyMapping>()}
      keys={keys}
      handleKeyUpdate={() => {}}
      handleFilterUpdate={() => {}}
      {...props}
    />
    <Droppable<Fruit>
      name={'droppable-2'}
      keyState={[]}
      filterState={new Map<keyof Fruit, Set<string>>()}
      type={'fruit-table'}
      keyMapping={keyMapping}
      keys={keys}
      handleKeyUpdate={() => {}}
      handleFilterUpdate={() => {}}
      {...props}
    />
  </DndProvider>
)

describe('Droppable', () => {
  describe('render', () => {
    it('should render without filter options', () => {
      const { container } = render(createDefaultComponent())
      expect(container).toMatchSnapshot()
    })
    it('should render with filter options', () => {
      const { container } = render(createFilterComponent())
      expect(container).toMatchSnapshot()
    })
  })

  it('should throw an error when the filterState and handleFilterUpdate are not defined together', () => {
    expect(() => {
      render(
        <DndProvider backend={HTML5Backend}>
          <Droppable<Fruit>
            name={'droppable'}
            keyState={[]}
            filterState={new Map<keyof Fruit, Set<string>>()}
            type={'fruit-table'}
            keyMapping={keyMapping}
            keys={keys}
            handleKeyUpdate={() => {}}
          />
        </DndProvider>
      )
    }).toThrowError()
  })

  describe('Drag and drop', () => {
    it('should call onDragEnd when the drag event ends in the same droppable', () => {
      const handleKeyUpdate = jest.fn()

      const { container } = render(createDefaultComponent({ handleKeyUpdate: handleKeyUpdate }))

      const droppable = container.firstChild
      const dragabble = droppable.firstChild.firstChild

      fireEvent.dragStart(dragabble)
      fireEvent.dragEnter(droppable)
      fireEvent.dragOver(droppable)
      fireEvent.drop(droppable)
      fireEvent.dragEnd(dragabble)

      expect(handleKeyUpdate).toHaveBeenCalled()
    })

    it('should call onDragEnd when the drag event ends for droppable with filter in the same droppable', () => {
      const handleKeyUpdate = jest.fn()

      const { container } = render(createFilterComponent({ handleKeyUpdate: handleKeyUpdate }))

      const droppable = container.firstChild
      const dragabble = droppable.firstChild.firstChild

      fireEvent.dragStart(dragabble)
      fireEvent.dragEnter(droppable)
      fireEvent.dragOver(droppable)
      fireEvent.drop(droppable)
      fireEvent.dragEnd(dragabble)

      expect(handleKeyUpdate).toHaveBeenCalled()
    })

    it('should call onDragEnd when the drag event ends in another droppable with filter', () => {
      const handleKeyUpdate = jest.fn()

      const { container } = render(createFilterComponent({ handleKeyUpdate: handleKeyUpdate }))

      const droppable1 = container.firstChild
      const droppable2 = container.lastChild
      const dragabble = droppable1.firstChild.firstChild

      fireEvent.dragStart(dragabble)
      fireEvent.dragEnter(droppable2)
      fireEvent.dragOver(droppable2)
      fireEvent.drop(droppable2)
      fireEvent.dragEnd(dragabble)

      expect(handleKeyUpdate).toHaveBeenCalledWith(['name'])
    })

    it('should call onDragEnd when the drag event ends in another droppable', () => {
      const handleKeyUpdate = jest.fn()

      const { container } = render(createDefaultComponent({ handleKeyUpdate: handleKeyUpdate }))

      const droppable1 = container.firstChild
      const droppable2 = container.lastChild
      const dragabble = droppable1.firstChild.firstChild

      fireEvent.dragStart(dragabble)
      fireEvent.dragEnter(droppable2)
      fireEvent.dragOver(droppable2)
      fireEvent.drop(droppable2)
      fireEvent.dragEnd(dragabble)

      expect(handleKeyUpdate).toBeCalledWith(['name'])
    })
  })

  describe('Key navigation', () => {
    it('should call onDragEnd when the drag event ends', () => {
      const onKeyNav = jest.fn()
      const handleKeyUpdate = jest.fn()

      const { getByRole } = render(createDefaultComponent({ onKeyNav: onKeyNav, handleKeyUpdate }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowUp', code: 'ArrowUp' })
      expect(onKeyNav).toBeCalledWith('up', 'droppable-1')
      expect(handleKeyUpdate).toBeCalledWith([])
    })
  })
})
