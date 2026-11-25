import { Interpolation } from 'emotion'

import { focusBoxShadow, hexToRGB, TextColor, Theme } from '../../styles'

export type ToggleButtonSkin = 'outline' | 'ghost'
export type ToggleButtonColor = 'blue' | 'red' | 'green'

interface ColorTokens {
  /** Border/content color of the selected state. */
  main: string
  /** Surface of the selected state. */
  surface: string
  /** Surface of the selected state while hovered/pressed. */
  surfaceHover: string
  focusColor: TextColor
}

const getColorTokens = (theme: Theme, color: ToggleButtonColor): ColorTokens => {
  const { pallete } = theme

  switch (color) {
    case 'red':
      return {
        main: pallete.status.danger.main,
        surface: pallete.status.danger.c90,
        surfaceHover: pallete.status.danger.c80,
        focusColor: 'danger',
      }
    case 'green':
      return {
        main: pallete.status.success.main,
        surface: pallete.status.success.c90,
        surfaceHover: pallete.status.success.c80,
        focusColor: 'success',
      }
    default:
      return {
        main: pallete.primary.main,
        surface: pallete.primary.c90,
        surfaceHover: pallete.primary.c80,
        focusColor: 'primary',
      }
  }
}

const pressedShadow = 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)'

export const createBaseStyles = (theme: Theme, color: ToggleButtonColor) => {
  const tokens = getColorTokens(theme, color)

  return {
    button: {
      ...theme.typography.variant('main'),
      fontSize: theme.typography.sizes.button,
      lineHeight: '1rem',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '1.5rem', // WCAG 2.5.8 (target size)
      minHeight: '1.5rem',
      padding: 'calc(0.25rem - 1px) 0.5rem', // discount border size
      border: '1px solid transparent',
      borderRadius: theme.radius.button,
      backgroundColor: 'transparent',
      color: theme.pallete.text.main,
      cursor: 'pointer',
      userSelect: 'none',
      outline: 'none',
      transition: 'all .2s',
      '&:focus': {
        boxShadow: focusBoxShadow(theme, tokens.focusColor),
      },
      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    } as Interpolation,
    iconOnly: {
      padding: 'calc(0.25rem - 1px)',
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

  const selected = {
    '&[aria-pressed="true"]': {
      color: tokens.main,
      backgroundColor: tokens.surface,
      fontWeight: 'bold',
      '&:not(:disabled):hover': {
        backgroundColor: tokens.surfaceHover,
      },
      '&:not(:disabled):active': {
        backgroundColor: tokens.surfaceHover,
        boxShadow: pressedShadow,
      },
      '&:not(:disabled):active:focus': {
        boxShadow: `${pressedShadow}, ${focusBoxShadow(theme, tokens.focusColor)}`,
      },
    },
  }

  const common = {
    '&:not(:disabled):hover': {
      backgroundColor: hexToRGB(theme.pallete.gray.c50, 0.16),
    },
    '&:not(:disabled):active': {
      backgroundColor: hexToRGB(theme.pallete.gray.c50, 0.24),
      boxShadow: pressedShadow,
    },
    '&:not(:disabled):active:focus': {
      boxShadow: `${pressedShadow}, ${focusBoxShadow(theme, tokens.focusColor)}`,
    },
  }

  if (skin === 'ghost') {
    return {
      button: {
        fontWeight: 'normal',
        ...common,
        ...selected,
      } as Interpolation,
    }
  }

  return {
    button: {
      fontWeight: 'bold',
      borderColor: theme.pallete.gray.c40,
      ...common,
      '&[aria-pressed="true"]': {
        ...selected['&[aria-pressed="true"]'],
        borderColor: tokens.main,
      },
    } as Interpolation,
  }
}
