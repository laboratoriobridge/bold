import { Interpolation } from 'emotion'

import { Theme } from '../../../styles'

import { createStyles as createDefault } from './skins/default'
import { createStyles as createGhost } from './skins/ghost'
import { createStyles as createOutline } from './skins/outline'

export type ButtonSkin = 'default' | 'ghost' | 'outline'
export type ButtonKind = 'normal' | 'primary' | 'danger'
export type ButtonSize = 'large' | 'medium' | 'small'

export interface Skin {
  button: any
  primary: any
  danger: any
}

export const skinMap: { [key in ButtonSkin]: (theme: Theme) => Skin } = {
  default: createDefault,
  ghost: createGhost,
  outline: createOutline,
}

export interface SkinProps {
  skin?: ButtonSkin
  size?: ButtonSize
  kind?: ButtonKind
}

export const createBaseStyles = (theme: Theme) => ({
  button: {
    ...theme.typography.variant('main'),
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: '1.5rem',
    position: 'relative',
    userSelect: 'none',
    transition: 'all .2s',
    fontWeight: 'bold',
    cursor: 'pointer',
    '& > span': {
      alignItems: 'center',
      display: 'inline-flex',
    },
  } as Interpolation,
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
  } as Interpolation,
  loading: {
    span: {
      color: 'transparent',
    },
    ':after': {
      animation: `${theme.animation.spinAround} 500ms infinite linear`,
      border: '3px solid currentColor',
      borderRadius: '50%',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      content: '""',
      display: 'block',
      height: '1.5em',
      width: '1.5em',
      position: 'absolute',
      left: 'calc(50% - (1.5em / 2))',
      top: 'calc(50% - (1.5em / 2))',
    },
  } as Interpolation,
  block: {
    width: '100%',
  } as Interpolation,
})

export const createSizeStyles = (theme: Theme) => ({
  large: {
    padding: 'calc(1.25rem - 1px) 1.5rem',
    fontSize: theme.typography.sizes.button,
  },
  medium: {
    fontSize: theme.typography.sizes.button,
    padding: 'calc(0.75rem - 1px) 1rem',
  },
  small: {
    fontSize: theme.typography.sizes.button,
    padding: 'calc(0.25rem - 1px) calc(0.5rem - 1px)', // discount border size
  },
})
