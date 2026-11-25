import { Interpolation } from 'emotion'

import { hexToRGB, Theme } from '../../styles'

export type ToggleButtonSkin = 'outline' | 'ghost'
export type ToggleButtonColor = 'blue' | 'red' | 'green'

interface ColorTokens {
  /** Border/content color of the selected state (and of the focus ring). */
  main: string
  /** Surface of the selected state. */
  surface: string
  /** Surface of the selected state while hovered. Also the border and content of the disabled state. */
  surfaceHover: string
}

const getColorTokens = (theme: Theme, color: ToggleButtonColor): ColorTokens => {
  const { pallete } = theme

  switch (color) {
    case 'red':
      return {
        main: pallete.status.danger.main,
        surface: pallete.status.danger.c90,
        surfaceHover: pallete.status.danger.c80,
      }
    case 'green':
      return {
        main: pallete.status.success.main,
        surface: pallete.status.success.c90,
        surfaceHover: pallete.status.success.c80,
      }
    default:
      return {
        main: pallete.primary.main,
        surface: pallete.primary.c90,
        surfaceHover: pallete.primary.c80,
      }
  }
}

/**
 * Hover surface of the default state (Figma "Gray/Hover": #393B43 at 10%).
 */
const hoverSurface = hexToRGB('#393B43', 0.1)

const pressedShadow = 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.14), inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)'

/**
 * Focus ring: 1px gap and a 2px ring around the button.
 */
const focusRing = (theme: Theme, color: string) => `0 0 0 1px ${theme.pallete.surface.main}, 0 0 0 3px ${color}`

export const createBaseStyles = (theme: Theme, color: ToggleButtonColor) => {
  const tokens = getColorTokens(theme, color)

  return {
    button: {
      ...theme.typography.variant('main'),
      fontSize: theme.typography.sizes.button,
      lineHeight: '1.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box', // borders are inside the size, as in the design
      height: '2rem', // fixed size, bigger than the 24px required by WCAG 2.5.8 (target size)
      minWidth: '2rem',
      padding: '0 calc(0.5rem - 1px)', // discount border size
      border: '1px solid transparent',
      borderRadius: theme.radius.button,
      backgroundColor: 'transparent',
      color: theme.pallete.gray.c20,
      cursor: 'pointer',
      userSelect: 'none',
      outline: 'none',
      transition: 'all .2s',
      '&:focus': {
        boxShadow: focusRing(theme, tokens.main),
      },
      '&:disabled': {
        color: theme.pallete.gray.c80,
        cursor: 'not-allowed',
      },
    } as Interpolation,
    icon: {
      '&:not(:last-child)': {
        marginRight: '0.25rem',
      },
    } as Interpolation,
    /**
     * Reserves the width of the bold text, so the button does not change its size when the
     * font weight changes between states.
     */
    text: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&::before': {
        content: 'attr(data-text)',
        fontWeight: 'bold',
        height: 0,
        visibility: 'hidden',
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
      },
    } as Interpolation,
  }
}

export const createSkinStyles = (theme: Theme, skin: ToggleButtonSkin, color: ToggleButtonColor) => {
  const tokens = getColorTokens(theme, color)
  const focusShadow = focusRing(theme, tokens.main)

  const selected = {
    color: tokens.main,
    backgroundColor: tokens.surface,
    fontWeight: 'bold',
    '&:not(:disabled):hover': {
      backgroundColor: tokens.surfaceHover,
    },
    '&:not(:disabled):active': {
      backgroundColor: tokens.surface,
      boxShadow: pressedShadow,
    },
    '&:not(:disabled):active:focus': {
      boxShadow: `${pressedShadow}, ${focusShadow}`,
    },
    '&:disabled': {
      color: tokens.surfaceHover,
    },
  }

  const common = {
    '&:not(:disabled):hover': {
      backgroundColor: hoverSurface,
    },
    '&:not(:disabled):active': {
      backgroundColor: theme.pallete.gray.c90,
      boxShadow: pressedShadow,
    },
    '&:not(:disabled):active:focus': {
      boxShadow: `${pressedShadow}, ${focusShadow}`,
    },
  }

  if (skin === 'ghost') {
    return {
      button: {
        fontWeight: 'normal',
        backgroundColor: theme.pallete.surface.main,
        ...common,
        '&[aria-pressed="true"]': {
          ...selected,
          borderBottomWidth: '2px', // transparent, keeps the same box model of the outline skin
        },
      } as Interpolation,
    }
  }

  return {
    button: {
      fontWeight: 'bold',
      backgroundColor: theme.pallete.surface.main,
      borderColor: theme.pallete.gray.c40,
      ...common,
      '&:disabled': {
        borderColor: theme.pallete.gray.c80,
      },
      '&[aria-pressed="true"]': {
        ...selected,
        borderColor: tokens.main,
        borderBottomWidth: '2px',
        '&:disabled': {
          ...selected['&:disabled'],
          borderColor: tokens.surfaceHover,
        },
      },
    } as Interpolation,
  }
}
