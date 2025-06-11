import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useDraggableKeyNavigation } from './useDraggableNavigation'

type Test = {
  name: string
  value: number
}

describe('useDraggableKeyNavigation', () => {
  let onDragEnd: jest.Mock
  let onKeyNav: jest.Mock
  const origin = 'test-origin'

  beforeEach(() => {
    onDragEnd = jest.fn()
    onKeyNav = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should not do anything if onKeyNav is not provided', () => {
    const { result } = renderHook(() => useDraggableKeyNavigation<Test>(onDragEnd, origin))
    const event = { nativeEvent: { key: 'ArrowLeft' } }

    act(() => {
      result.current.handleKeyDown()(event)
    })

    expect(onDragEnd).not.toBeCalled()
  })

  it('should call onDragEnd when a navigation key is pressed and onKeyNav returns true', () => {
    onKeyNav.mockReturnValue(true)
    const { result } = renderHook(() => useDraggableKeyNavigation<Test>(onDragEnd, origin, onKeyNav))
    const event = { nativeEvent: { key: 'ArrowRight' } }

    act(() => {
      result.current.handleKeyDown()(event)
    })

    expect(onKeyNav).toHaveBeenCalledWith('right', origin, undefined)
    expect(onDragEnd).toHaveBeenCalledTimes(1)
  })

  it('should not call onDragEnd when a navigation key is pressed and onKeyNav returns false', () => {
    onKeyNav.mockReturnValue(false)
    const { result } = renderHook(() => useDraggableKeyNavigation<Test>(onDragEnd, origin, onKeyNav))
    const event = { nativeEvent: { key: 'ArrowDown' } }

    act(() => {
      result.current.handleKeyDown()(event)
    })

    expect(onKeyNav).toHaveBeenCalledWith('down', origin, undefined)
    expect(onDragEnd).not.toBeCalled()
  })

  it('should correctly pass the filterKey to onKeyNav when provided', () => {
    onKeyNav.mockReturnValue(true)
    const { result } = renderHook(() => useDraggableKeyNavigation<Test>(onDragEnd, origin, onKeyNav))
    const filterKey: keyof Test = 'name'
    const event = { nativeEvent: { key: 'ArrowUp' } }

    const keyDownHandler = result.current.handleKeyDown(filterKey)
    act(() => {
      keyDownHandler(event)
    })

    expect(onKeyNav).toHaveBeenCalledWith('up', origin, 'name')
    expect(onDragEnd).toHaveBeenCalledTimes(1)
  })

  describe('keyDirectionMap integration', () => {
    const validCases = [
      { key: 'ArrowRight', expectedDirection: 'right' },
      { key: 'ArrowLeft', expectedDirection: 'left' },
      { key: 'ArrowUp', expectedDirection: 'up' },
      { key: 'ArrowDown', expectedDirection: 'down' },
    ]

    it.each(validCases)(
      'should call onKeyNav with direction "$expectedDirection" when key "$key" is pressed',
      ({ key, expectedDirection }) => {
        onKeyNav.mockReturnValue(true)
        const { result } = renderHook(() => useDraggableKeyNavigation<Test>(onDragEnd, origin, onKeyNav))
        const event = { nativeEvent: { key } }

        act(() => {
          result.current.handleKeyDown()(event)
        })

        expect(onKeyNav).toHaveBeenCalledWith(expectedDirection, origin, undefined)
        expect(onDragEnd).toHaveBeenCalledTimes(1)
      }
    )

    const invalidCases = [{ key: 'Enter' }, { key: 'Tab' }, { key: 'Escape' }]

    it.each(invalidCases)('should not call onDragEnd when a non-navigation key "$key" is pressed', ({ key }) => {
      const { result } = renderHook(() => useDraggableKeyNavigation<Test>(onDragEnd, origin, onKeyNav))
      const event = { nativeEvent: { key } }

      act(() => {
        result.current.handleKeyDown()(event)
      })

      expect(onKeyNav).toHaveBeenCalledWith(undefined, origin, undefined)
      expect(onDragEnd).not.toHaveBeenCalled()
    })
  })
})
