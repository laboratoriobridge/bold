import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DroppableDiv } from './FilterDraggable.test'
import { KeyMapping } from './types/KeyMapping'
import { Draggable, DraggableProps } from './Draggable'

type Pet = {
  name: string
}

const origin = 'keys_available'

const petKeyMapping = new Map<keyof Pet, KeyMapping>([['name', { keyName: 'Name' }]])

const keyState: Array<keyof Pet> = ['name']
const key: keyof Pet = keyState[0]

const createDefaultComponent = (props: Partial<DraggableProps<Pet>> = {}) => (
  <Draggable<Pet>
    key={key}
    name={key}
    type={'test'}
    onDragEnd={() => {}}
    value={petKeyMapping.get(key).keyName}
    origin={origin}
    {...props}
  />
)

describe('Draggable', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(createDefaultComponent())
      expect(container).toMatchSnapshot()
    })
  })

  describe('Drag and drop', () => {
    it('should call onDragEnd when the drag event ends', () => {
      const onDragEnd = jest.fn()
      const { container } = render(
        <DndProvider backend={HTML5Backend}>
          <DroppableDiv type={'test'}>{createDefaultComponent({ onDragEnd: onDragEnd })}</DroppableDiv>
          <DroppableDiv type={'test'} />
        </DndProvider>
      )

      const draggable = container.querySelectorAll('div[class*=dropable]')[0].firstChild

      const secondDiv = container.querySelectorAll('div[class*=dropable]')[1]

      fireEvent.dragStart(draggable)
      fireEvent.dragEnter(secondDiv)
      fireEvent.dragOver(secondDiv)
      fireEvent.drop(secondDiv)
      fireEvent.dragEnd(draggable)

      expect(onDragEnd).toHaveBeenCalled()
    })
  })
})
