import { renderHook } from '@testing-library/react-hooks'
import { useIsOverflowing } from '../useIsOverflowing'

describe('useIsOverflowing', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    Object.defineProperties(element, {
      scrollWidth: { value: 120, writable: true },
      clientWidth: { value: 100, writable: true },
      scrollHeight: { value: 150, writable: true },
      clientHeight: { value: 100, writable: true },
    })
  })

  it('returns true when horizontally overflowing', () => {
    const ref = { current: element }
    const { result } = renderHook(() => useIsOverflowing(ref, 'horizontal'))

    expect(result.current).toBe(true)
  })

  it('returns false when not horizontally overflowing', () => {
    Object.defineProperties(element, {
      scrollWidth: { value: 100 },
      clientWidth: { value: 120 },
    })

    const ref = { current: element }
    const { result } = renderHook(() => useIsOverflowing(ref, 'horizontal'))

    expect(result.current).toBe(false)
  })

  it('returns true when vertically overflowing', () => {
    const ref = { current: element }
    const { result } = renderHook(() => useIsOverflowing(ref, 'vertical'))

    expect(result.current).toBe(true)
  })

  it('returns false when not vertically overflowing', () => {
    Object.defineProperties(element, {
      scrollHeight: { value: 90 },
      clientHeight: { value: 100 },
    })

    const ref = { current: element }
    const { result } = renderHook(() => useIsOverflowing(ref, 'vertical'))

    expect(result.current).toBe(false)
  })

  it('updates when dimensions change after resize', () => {
    const ref = { current: element }

    const { result, rerender } = renderHook(() => useIsOverflowing(ref, 'horizontal'))

    expect(result.current).toBe(true)

    // simulate resize (no longer overflowing)
    Object.defineProperties(element, {
      scrollWidth: { value: 80 },
      clientWidth: { value: 100 },
    })

    // rerender to simulate effect running again
    rerender()

    expect(result.current).toBe(false)
  })
})
