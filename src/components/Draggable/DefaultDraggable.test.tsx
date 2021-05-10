import { render } from '@testing-library/react'
import React from 'react'
import { Draggable, DraggableProps } from './Draggable'
import { ItemTypes } from './types/ItemTypes'

type Pet = {
  nome: string
  dono: string
}

type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

const petKeyMapping = new Map<keyof Pet, KeyMapping>([
  ['nome', { keyName: 'Nome' }],
  ['dono', { keyName: 'Dono' }],
])

const keyState: Array<keyof Pet> = ['nome', 'dono']
const key: keyof Pet = keyState[0]

const createDefaultComponent = (props: Partial<DraggableProps<Pet>> = {}) => (
  <Draggable<Pet>
    key={key}
    type={ItemTypes.DEFAULT}
    name={key}
    onDragEnd={() => {}}
    value={petKeyMapping.get(key).keyName}
    onKeyNav={() => {}}
    origin='campos_disponíveis'
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
})
