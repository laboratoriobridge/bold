import { act, fireEvent, render } from '@testing-library/react'
import React from 'react'

import { SelectSingle, SelectSingleProps } from './SelectSingle'

type FruitType = typeof fruits[0]

const fruits = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Avocado' },
  { value: 3, label: 'Banana' },
  { value: 4, label: 'Blueberry' },
  { value: 5, label: 'Coconut' },
  { value: 6, label: 'Grape' },
  { value: 7, label: 'Lemon' },
  { value: 8, label: 'Mango' },
  { value: 9, label: 'Melon' },
  { value: 10, label: 'Orange' },
  { value: 11, label: 'Peach' },
  { value: 12, label: 'Pear' },
]

// tslint:disable jsx-no-lambda

function FruitSelect(props: SelectSingleProps<FruitType>) {
  return <SelectSingle<FruitType> items={fruits} itemToString={item => item.label} {...props} />
}

it('should render correctly when closed', () => {
  const { container } = render(<FruitSelect />)
  expect(container).toMatchSnapshot()
})

it('should render correctly when opened', () => {
  const { container } = render(<FruitSelect open />)
  expect(container).toMatchSnapshot()
})

describe('menu should be opened', () => {
  it('when select is focused', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    container.querySelector('input').focus()
    expect(container.querySelector('ul')).toBeTruthy()
  })
  it('when select is clicked', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.click(container.querySelector('input'))
    expect(container.querySelector('ul')).toBeTruthy()
  })
  it('when icon is clicked', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelector('ul')).toBeTruthy()
  })
  it('when input text is changed', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.change(container.querySelector('input'), { target: { value: 'app' } })
    expect(container.querySelector('ul')).toBeTruthy()
  })
  it('when key ArrowDown or ArrowUp is pressed', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.keyDown(container.querySelector('input'), { key: 'ArrowUp' })
    expect(container.querySelector('ul')).toBeTruthy()
    fireEvent.keyDown(container.querySelector('input'), { key: 'Escape' })
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.keyDown(container.querySelector('input'), { key: 'ArrowDown' })
    expect(container.querySelector('ul')).toBeTruthy()
  })
})

describe('menu should be closed', () => {
  it('when icon is clicked', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelector('ul')).toBeTruthy()
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelector('ul')).toBeFalsy()
  })
  it('when key Escape is pressed', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.click(container.querySelector('input'))
    expect(container.querySelector('ul')).toBeTruthy()
    fireEvent.keyDown(container.querySelector('input'), { key: 'Escape' })
    expect(container.querySelector('ul')).toBeFalsy()
  })
  it('when an item is selected', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.click(container.querySelector('input'))
    expect(container.querySelector('ul')).toBeTruthy()
    fireEvent.click(container.querySelectorAll('li')[0])
    expect(container.querySelector('ul')).toBeFalsy()
  })
  it('when focus go outside select container', () => {
    jest.useFakeTimers()
    const { container } = render(
      <>
        <FruitSelect />
        <section tabIndex={0}>Focusable section</section>
      </>
    )
    expect(container.querySelector('ul')).toBeFalsy()
    container.querySelector('input').focus()
    expect(container.querySelector('ul')).toBeTruthy()

    container.querySelector('input').blur()
    container.querySelector('section').focus()

    act(() => jest.runAllTimers())
    expect(container.querySelector('ul')).toBeFalsy()
  })
})

describe('input text value', () => {
  it('should be empty if value is not defined', () => {
    const { container } = render(<FruitSelect />)
    expect(container.querySelector('input').value).toEqual('')
  })
  it('should be the result of `itemToString` prop over `value`', () => {
    const { container } = render(<FruitSelect value={fruits[0]} />)
    expect(container.querySelector('input').value).toEqual(fruits[0].label)
  })
  it('should change accordingly to change event', () => {
    const { container } = render(<FruitSelect />)
    container.querySelector('input').focus()
    fireEvent.change(container.querySelector('input'), { target: { value: 'foo' } })
    expect(container.querySelector('input').value).toEqual('foo')
  })
  it('should change to the `itemToString` result of the selected item when an item is selected', () => {
    const { container } = render(<FruitSelect />)
    container.querySelector('input').focus()
    fireEvent.click(container.querySelectorAll('li')[1])
    expect(container.querySelector('input').value).toEqual(fruits[1].label)
  })
  it('should be cleared when "Escape" key is pressed', () => {
    const { container } = render(<FruitSelect value={fruits[0]} />)
    fireEvent.keyDown(container.querySelector('input'), { key: 'Escape' })
    expect(container.querySelector('input').value).toEqual('')
  })
  it('should fill current value string using `itemToString` when focus go outside input', () => {
    jest.useFakeTimers()
    const { container } = render(
      <>
        <FruitSelect value={fruits[2]} />
        <section tabIndex={0}>Focusable section</section>
      </>
    )
    const input = container.querySelector('input')
    input.focus()
    fireEvent.change(input, { target: { value: 'app' } })

    input.blur()
    container.querySelector('section').focus()

    act(() => jest.runAllTimers())
    expect(input.value).toEqual(fruits[2].label)
  })
  it('should clear input value when "clear" buton is clicked', () => {
    const { container, getByTitle } = render(<FruitSelect value={fruits[0]} />)
    fireEvent.click(getByTitle('Clear'))
    expect(container.querySelector('input').value).toEqual('')
  })
})

describe('filter', () => {
  it('should filter items accordingly to the input text value', () => {
    const { container } = render(<FruitSelect />)
    fireEvent.click(container.querySelector('input'))
    fireEvent.change(container.querySelector('input'), { target: { value: 'ap' } })
    expect(container.querySelectorAll('li').length).toEqual(2)
    expect(container.querySelectorAll('li')[0].textContent).toEqual(fruits[0].label)
    expect(container.querySelectorAll('li')[1].textContent).toEqual(fruits[5].label)
    fireEvent.click(container.querySelector('button'))
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelectorAll('li').length).toEqual(2)
  })
  it('should clear current filter when an item is selected', () => {
    const { container } = render(<FruitSelect open={true} />)
    fireEvent.change(container.querySelector('input'), { target: { value: 'ap' } })
    fireEvent.click(container.querySelectorAll('li')[1])
    expect(container.querySelectorAll('li').length).toEqual(fruits.length)
  })
  it('should clear current filter when focus go outside', () => {
    jest.useFakeTimers()
    const { container } = render(
      <>
        <FruitSelect />
        <section tabIndex={0}>Focusable section</section>
      </>
    )
    container.querySelector('input').focus()
    fireEvent.change(container.querySelector('input'), { target: { value: 'ap' } })

    container.querySelector('input').blur()
    container.querySelector('section').focus()
    act(() => jest.runAllTimers())

    fireEvent.click(container.querySelector('input'))
    expect(container.querySelectorAll('li').length).toEqual(fruits.length)
  })
  it('should clear current filter when "clear" buton is clicked', () => {
    const { container, getByTitle } = render(<FruitSelect open={true} />)
    fireEvent.change(container.querySelector('input'), { target: { value: 'ap' } })
    fireEvent.click(getByTitle('Clear'))
    expect(container.querySelectorAll('li').length).toEqual(fruits.length)
  })
})

describe('onChange callback', () => {
  it('should be called with the selected item when an item is selected', () => {
    const change = jest.fn()
    const { container } = render(<FruitSelect open={true} onChange={change} />)
    expect(change).not.toHaveBeenCalled()

    fireEvent.click(container.querySelectorAll('li')[3])
    expect(change).toHaveBeenCalledWith(fruits[3])
    expect(change).toHaveBeenCalledTimes(1)

    fireEvent.click(container.querySelectorAll('li')[1])
    expect(change).toHaveBeenCalledWith(fruits[1])
    expect(change).toHaveBeenCalledTimes(2)
  })
  it('should be called with `null` when clear button is clicked', () => {
    const change = jest.fn()
    const { getByTitle } = render(<FruitSelect open={true} value={fruits[4]} onChange={change} />)
    expect(change).not.toHaveBeenCalled()
    fireEvent.click(getByTitle('Clear'))
    expect(change).toHaveBeenCalledWith(null)
  })
})

describe('onFilterChange callback', () => {
  it('should be called when filter is changed via input change event', () => {
    const filterChange = jest.fn()
    const { container } = render(<FruitSelect open={true} value={fruits[4]} onFilterChange={filterChange} />)
    expect(filterChange).not.toHaveBeenCalled()
    fireEvent.change(container.querySelector('input'), { target: { value: 'gra' } })
    expect(filterChange).toHaveBeenLastCalledWith('gra')
    expect(filterChange).toHaveBeenCalledTimes(1)
  })
  it('should be called with empty string when clear button is clicked', () => {
    const filterChange = jest.fn()
    const { container, getByTitle } = render(
      <FruitSelect open={true} value={fruits[4]} onFilterChange={filterChange} />
    )
    expect(filterChange).not.toHaveBeenCalled()
    fireEvent.change(container.querySelector('input'), { target: { value: 'gra' } })
    fireEvent.click(getByTitle('Clear'))
    expect(filterChange).toHaveBeenLastCalledWith('')
    expect(filterChange).toHaveBeenCalledTimes(2)
  })
  it('should be called with empty string when an item is selected', () => {
    const filterChange = jest.fn()
    const { container } = render(<FruitSelect open={true} value={fruits[4]} onFilterChange={filterChange} />)
    expect(filterChange).not.toHaveBeenCalled()
    fireEvent.change(container.querySelector('input'), { target: { value: 'gra' } })
    fireEvent.click(container.querySelectorAll('li')[0])
    expect(filterChange).toHaveBeenLastCalledWith('')
    expect(filterChange).toHaveBeenCalledTimes(2)
  })
  it('should be called with empty string when focus go outside select menu', () => {
    jest.useFakeTimers()
    const filterChange = jest.fn()
    const { container } = render(
      <>
        <FruitSelect open={true} value={fruits[4]} onFilterChange={filterChange} />
        <section tabIndex={0}>Focusable section</section>
      </>
    )
    expect(filterChange).not.toHaveBeenCalled()

    container.querySelector('input').focus()
    fireEvent.change(container.querySelector('input'), { target: { value: 'gra' } })

    container.querySelector('input').blur()

    act(() => jest.runAllTimers())

    expect(filterChange).toHaveBeenLastCalledWith('')
    expect(filterChange).toHaveBeenCalledTimes(2)
  })
})

describe('Select menu', () => {
  it('should have loading status when `loading` prop is true', () => {
    const { queryByText, rerender, container } = render(<FruitSelect open={true} />)
    expect(queryByText('Loading')).toBeFalsy()
    rerender(<FruitSelect open={true} loading />)
    expect(queryByText('Loading...')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
  it('should render the EmptyItem when items is empty', () => {
    const { queryByText } = render(<FruitSelect open={true} items={[]} />)
    expect(queryByText('No results were found')).toBeTruthy()
  })
})
