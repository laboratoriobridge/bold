import { renderHook } from '@testing-library/react-hooks'

import { useIsMounted } from '../useIsMounted'

it('should track the mount state of the component', () => {
  const { result, unmount, rerender } = renderHook(() => useIsMounted())
  expect(result.current.current).toEqual(true)

  rerender()
  expect(result.current.current).toEqual(true)

  unmount()
  expect(result.current.current).toEqual(false)

  expect(result.error).toBeUndefined()
})
