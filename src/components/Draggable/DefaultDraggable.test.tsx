import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ItemTypes } from './types/ItemTypes'
import { DropableDiv } from './FilterDraggable.test'
import { KeyMapping } from './types/KeyMapping'
import { DefaultDraggable, DefaultDraggableProps } from './DefaultDraggable'

type Pet = {
  nome: string
}

const petKeyMapping = new Map<keyof Pet, KeyMapping>([['nome', { keyName: 'Nome' }]])

const keyState: Array<keyof Pet> = ['nome']
const key: keyof Pet = keyState[0]

const createDefaultComponent = (props: Partial<DefaultDraggableProps<Pet>> = {}) => (
  <DefaultDraggable<Pet>
    key={key}
    name={key}
    onDragEnd={() => {}}
    value={petKeyMapping.get(key).keyName}
    onKeyNav={() => {}}
    origin='campos_disponiveis'
    {...props}
  />
)

describe('DefaultDraggable', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(createDefaultComponent())
      expect(container).toMatchSnapshot()
    })
  })

  describe('handleKeyDown', () => {
    it('should call the onKeyNav with direction as up when the user press the ArrowUp key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createDefaultComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowUp', code: 'ArrowUp' })
      expect(keyNav).toBeCalledWith('up', 'campos_disponiveis')
    })

    it('should call the onKeyNav with direction as down when the user press the ArrowDown key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createDefaultComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowDown', code: 'ArrowDown' })
      expect(keyNav).toBeCalledWith('down', 'campos_disponiveis')
    })

    it('should call the onKeyNav with direction as left when the user press the ArrowLeft key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createDefaultComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowLeft', code: 'ArrowLeft' })
      expect(keyNav).toBeCalledWith('left', 'campos_disponiveis')
    })

    it('should call the onKeyNav with direction as right when the user press the ArrowRight key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createDefaultComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowRight', code: 'ArrowRight' })
      expect(keyNav).toBeCalledWith('right', 'campos_disponiveis')
    })
  })

  describe('Drag and drop', () => {
    it('should call onDragEnd when the drag event ends', () => {
      const onDragEnd = jest.fn()
      const { container } = render(
        <DndProvider backend={HTML5Backend}>
          <DropableDiv type={ItemTypes.DEFAULT}>{createDefaultComponent({ onDragEnd: onDragEnd })}</DropableDiv>
          <DropableDiv type={ItemTypes.DEFAULT} />
        </DndProvider>
      )

      const dragabble = container.querySelectorAll('div[class*=dropable]')[0].firstChild

      const secondDiv = container.querySelectorAll('div[class*=dropable]')[1]

      fireEvent.dragStart(dragabble)
      fireEvent.dragEnter(secondDiv)
      fireEvent.dragOver(secondDiv)
      fireEvent.drop(secondDiv)
      fireEvent.dragEnd(dragabble)

      expect(onDragEnd).toHaveBeenCalled()
    })
  })
})
