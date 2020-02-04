type Shadow = string

export interface OuterShadows {
  10: Shadow
  20: Shadow
  40: Shadow
  60: Shadow
  80: Shadow
  160: Shadow
  240: Shadow
}

export interface InnerShadows {
  10: Shadow
}

export interface Shadows {
  outer: OuterShadows
  inner: InnerShadows
}

export const createShadows = (): Shadows => {
  return {
    outer: {
      10: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
      20: '0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14)',
      40: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14)',
      60: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.14)',
      80: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 9px 1px rgba(0, 0, 0, 0.14)',
      160: '0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14)',
      240: '0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14)',
    },
    inner: {
      10: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.14), inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
    },
  }
}
