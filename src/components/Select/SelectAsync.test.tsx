import { act, render } from '@testing-library/react'
import React from 'react'
import waait from 'waait'

import { SelectAsync } from './SelectAsync'

describe('async loading', () => {
  it('should NOT call "loadItems" when mounted', () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    render(<SelectAsync loadItems={loadItems} itemToString={item => item} />)
    expect(loadItems).not.toHaveBeenCalledWith()
  })

  it('should call "loadItems" on first interaction', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    const { container } = render(<SelectAsync loadItems={loadItems} itemToString={item => item} />)

    container.querySelector('input').focus()
    await act(() => waait(300))
    expect(loadItems).not.toHaveBeenCalledWith()

    await act(() => waait(300))
    expect(loadItems).toHaveBeenCalledWith(null)
  })
})
