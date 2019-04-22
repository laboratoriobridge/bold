import { useTheme } from '../styles'
import { Breakpoint } from '../styles/theme/createBreakpoints'

import { useWindowSize } from './useWindowSize'

/**
 * Current applied breakpoint, based on window's width.
 *
 * Note: it might return `null` on first render, if `window` object
 * is not defined (on server side rendering, for example).
 */
export function useBreakpoint(): Breakpoint | null {
  const theme = useTheme()
  const dimensions = useWindowSize()

  if (!dimensions) {
    return null
  }

  const sizes: Breakpoint[] = ['xl', 'lg', 'md', 'sm', 'xs']
  const current = sizes.find(key => dimensions.innerWidth > theme.breakpoints.size[key])
  return current
}
