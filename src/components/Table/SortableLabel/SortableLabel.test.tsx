import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { SortableLabel, toggleDirection } from './SortableLabel'

describe('SortableLabel', () => {
  it('should render correctly', () => {
    expect(render(<SortableLabel direction='' onChange={jest.fn()} />).container).toMatchSnapshot()
    expect(render(<SortableLabel direction='ASC' onChange={jest.fn()} />).container).toMatchSnapshot()
    expect(render(<SortableLabel direction='DESC' onChange={jest.fn()} />).container).toMatchSnapshot()
  })
  it('should call onChange when clicked', () => {
    const change = jest.fn()
    const { container, rerender } = render(<SortableLabel direction='' onChange={change} />)
    fireEvent.click(container.querySelector('span'))
    expect(change).toHaveBeenLastCalledWith('ASC', false)

    rerender(<SortableLabel direction='ASC' onChange={change} />)
    fireEvent.click(container.querySelector('span'))
    expect(change).toHaveBeenLastCalledWith('DESC', false)

    rerender(<SortableLabel direction='DESC' onChange={change} />)
    fireEvent.click(container.querySelector('span'))
    expect(change).toHaveBeenLastCalledWith('ASC', false)

    rerender(<SortableLabel direction='DESC' onChange={change} />)
    fireEvent.click(container.querySelector('span'), { shiftKey: true })
    expect(change).toHaveBeenLastCalledWith('ASC', true)
  })
})

describe('toggleDirection', () => {
  it('should toggle the current sort direction', () => {
    expect(toggleDirection('')).toEqual('ASC')
    expect(toggleDirection('ASC')).toEqual('DESC')
    expect(toggleDirection('DESC')).toEqual('ASC')
  })
})
