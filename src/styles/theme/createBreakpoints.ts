export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const breakpoints: { [key in Breakpoint]: number } = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
  xl: Number.MAX_SAFE_INTEGER,
}

export interface Breakpoints {
  size: typeof breakpoints
  down(breakpoint: Breakpoint): string
  up(breakpoint: Breakpoint): string
}

export const createBreakpoints = (): Breakpoints => {
  return {
    size: breakpoints,
    down: (breakpoint: Breakpoint) => `@media (max-width: ${breakpoints[breakpoint]}px)`,
    up: (breakpoint: Breakpoint) => `@media (min-width: ${breakpoints[breakpoint]}px)`,
  }
}
