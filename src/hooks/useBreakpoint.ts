import { useTheme } from '../styles'
import { Breakpoint } from '../styles/theme/createBreakpoints'

import { useWindowSize } from './useWindowSize'

/**
 * Current applied breakpoint, based on window's width.
 */
export function useBreakpoint() {
  const theme = useTheme()
  const { innerWidth } = useWindowSize()

  const sizes: Breakpoint[] = ['xl', 'lg', 'md', 'sm', 'xs']
  const current = sizes.find(key => innerWidth > theme.breakpoints.size[key])
  return current
}
