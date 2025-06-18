import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { KeyNavigationDirection } from '../Droppable/types/model'
import { useOnKeyNav } from './useOnKeyNav'
import { PivotTableBoardOrigin } from './model'

type Test = {
  name: string
  value: number
}

describe('useOnKeyNav', () => {
  let setColumnKeys: jest.Mock
  let setRowKeys: jest.Mock
  let setAvailableKeys: jest.Mock

  beforeEach(() => {
    setColumnKeys = jest.fn()
    setRowKeys = jest.fn()
    setAvailableKeys = jest.fn()
  })

  const renderOnKeyNavHook = (initialState: any = {}) => {
    const defaultState = {
      columnKeys: [],
      rowKeys: [],
      availableKeys: [],
      ...initialState,
    }

    const { result } = renderHook(() =>
      useOnKeyNav<Test>({
        setColumnKeys,
        setRowKeys,
        setAvailableKeys,
        ...defaultState,
      })
    )
    return result.current
  }

  describe('when origin is "filter"', () => {
    it('should call setColumnKeys when direction is "right"', () => {
      const onKeyNav = renderOnKeyNavHook()
      const keyToMove = 'name'

      let result: boolean = false
      act(() => {
        result = onKeyNav('right', 'filter', keyToMove)
      })

      expect(setColumnKeys).toHaveBeenCalledTimes(1)
      expect(setColumnKeys).toHaveBeenCalledWith(['name'])
      expect(setRowKeys).not.toHaveBeenCalled()
      expect(setAvailableKeys).not.toHaveBeenCalled()
      expect(result).toBe(true)
    })

    it('should call setRowKeys when direction is "down"', () => {
      const onKeyNav = renderOnKeyNavHook({ rowKeys: ['name'] })
      const keyToMove = 'value'

      let result: boolean = false
      act(() => {
        result = onKeyNav('down', 'filter', keyToMove)
      })

      expect(setRowKeys).toHaveBeenCalledTimes(1)
      expect(setRowKeys).toHaveBeenCalledWith(['name', 'value'])
      expect(setColumnKeys).not.toHaveBeenCalled()
      expect(result).toBe(true)
    })
  })

  describe('when origin is "column"', () => {
    it('should call setRowKeys when direction is "right"', () => {
      const onKeyNav = renderOnKeyNavHook()
      const keyToMove = 'name'

      let result: boolean = false
      act(() => {
        result = onKeyNav('right', 'column', keyToMove)
      })

      expect(setRowKeys).toHaveBeenCalledTimes(1)
      expect(setRowKeys).toHaveBeenCalledWith(['name'])
      expect(result).toBe(true)
    })

    it('should call setRowKeys when direction is "down"', () => {
      const onKeyNav = renderOnKeyNavHook({ columnKeys: ['name'] })
      const keyToMove = 'value'
      let result: boolean = false
      act(() => {
        result = onKeyNav('down', 'column', keyToMove)
      })
      expect(setRowKeys).toHaveBeenCalledTimes(1)
      expect(setRowKeys).toHaveBeenCalledWith(['value'])
      expect(result).toBe(true)
    })

    it('should call setAvailableKeys when direction is "left"', () => {
      const onKeyNav = renderOnKeyNavHook({ availableKeys: ['name'] })
      const keyToMove = 'value'

      let result: boolean = false
      act(() => {
        result = onKeyNav('left', 'column', keyToMove)
      })

      expect(setAvailableKeys).toHaveBeenCalledTimes(1)
      expect(setAvailableKeys).toHaveBeenCalledWith(['name', 'value'])
      expect(result).toBe(true)
    })
  })

  describe('when origin is "row"', () => {
    it('should call setColumnKeys when direction is "right"', () => {
      const onKeyNav = renderOnKeyNavHook()
      const keyToMove = 'name'

      let result: boolean = false
      act(() => {
        result = onKeyNav('right', 'row', keyToMove)
      })

      expect(setColumnKeys).toHaveBeenCalledTimes(1)
      expect(setColumnKeys).toHaveBeenCalledWith(['name'])
      expect(result).toBe(true)
    })

    it('should call setAvailableKeys when direction is "left"', () => {
      const onKeyNav = renderOnKeyNavHook({ availableKeys: ['name'] })
      const keyToMove = 'value'

      let result: boolean = false
      act(() => {
        result = onKeyNav('left', 'row', keyToMove)
      })

      expect(setAvailableKeys).toHaveBeenCalledTimes(1)
      expect(setAvailableKeys).toHaveBeenCalledWith(['name', 'value'])
      expect(result).toBe(true)
    })

    it('should call setAvailableKeys when direction is "up"', () => {
      const onKeyNav = renderOnKeyNavHook({ availableKeys: ['name'] })
      const keyToMove = 'value'

      let result: boolean = false
      act(() => {
        result = onKeyNav('up', 'row', keyToMove)
      })

      expect(setAvailableKeys).toHaveBeenCalledTimes(1)
      expect(setAvailableKeys).toHaveBeenCalledWith(['name', 'value'])
      expect(result).toBe(true)
    })
  })

  describe('when action is invalid', () => {
    const invalidCases = [
      {
        dir: 'up',
        origin: 'filter',
      },
      {
        dir: 'down',
        origin: 'row',
      },
      {
        dir: 'up',
        origin: 'column',
      },
    ]

    it.each(invalidCases)('should do nothing and return false', ({ dir, origin }) => {
      const onKeyNav = renderOnKeyNavHook()

      const result = onKeyNav(dir as KeyNavigationDirection, origin as PivotTableBoardOrigin, 'name')

      expect(setColumnKeys).not.toHaveBeenCalled()
      expect(setRowKeys).not.toHaveBeenCalled()
      expect(setAvailableKeys).not.toHaveBeenCalled()
      expect(result).toBe(false)
    })
  })
})
