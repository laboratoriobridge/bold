import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Tag } from './Tag'

it('should render correctly', () => {
  expect(render(<Tag>Normal</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='alert'>Alert</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='danger'>Danger</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='info'>Info</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='success'>Success</Tag>).container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  expect(render(<Tag style={{ color: 'green' }}>Normal</Tag>).container).toMatchSnapshot()
})

it('should accept HTML span element properties', () => {
  const { container } = render(<Tag id='test'>Normal</Tag>)
  expect(container.querySelector('span')?.getAttribute('id')).toEqual('test')
})

it('should accept "icon" prop', () => {
  const { container } = render(<Tag icon='userFilled'>With icon</Tag>)
  expect(container).toMatchSnapshot()
})

it('should accept "height" prop and render with custom height', () => {
  const { container } = render(<Tag height={'2.0rem'}>Custom height</Tag>)
  expect(container).toMatchSnapshot()
})

it('should accept "removable" prop and render remove icon', () => {
  const { container } = render(<Tag removable>Removable</Tag>)
  expect(container).toMatchSnapshot()
})

it('should call onRemove when remove icon is clicked', () => {
  const remove = jest.fn()
  const { container } = render(
    <Tag removable onRemove={remove}>
      Removable
    </Tag>
  )
  expect(remove).not.toHaveBeenCalled()
  fireEvent.click(container.querySelector('svg'))
  expect(remove).toHaveBeenCalled()
})
