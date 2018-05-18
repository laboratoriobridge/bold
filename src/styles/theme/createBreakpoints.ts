export type Breakpoint = 'small' | 'medium'

export const breakpoints: { [key in Breakpoint]: number } = {
    small: 1280,
    medium: 1280,
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
