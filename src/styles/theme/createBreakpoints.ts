export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const breakpoints: { [key in Breakpoint]: number } = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
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
