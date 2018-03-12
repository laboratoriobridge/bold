import { Theme } from '../../../../styles'

import { createStyles as createDefault } from './skins/default'
import { createStyles as createGhost } from './skins/ghost'
import { createStyles as createSecondary } from './skins/secondary'

export type Skins = 'default' | 'ghost' | 'secondary'
export type Type = 'normal' | 'primary'
export type Size = 'medium' | 'small'

export interface Skin {
    button: any,
    primary: any
}

export const skinMap: {[key in Skins]: (theme: Theme) => Skin} = {
    'default': createDefault,
    'ghost': createGhost,
    'secondary': createSecondary,
}

export interface SkinProps {
    skin?: Skins
    size?: Size
    type?: Type
}

export const createBaseStyles = (theme: Theme) => ({
    button: {
        backfaceVisibility: 'hidden',
        display: 'inline-flex',
        fontFamily: theme.font.textFamily,
        lineHeight: '1.5rem',
        position: 'relative',
        userSelect: 'none',
        transition: 'all .2s',
        ':disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
        },
        ':not(:disabled)': {
            cursor: 'pointer',
        },
        '& > span': {
            alignItems: 'center',
            display: 'inline-flex',
            transition: 'color .2s',
            '& > :not(:last-child)': {
                marginRight: '0.5rem',
            },
        },
    },
    loading: {
        pointerEvents: 'none',
        'span': {
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
    },
})

export const createSizeStyles = (theme: Theme) => ({
    medium: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        padding: 'calc(0.75rem - 1px) 2.5rem',
    },
    small: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        padding: 'calc(0.25rem - 1px) 1rem',
    },
})
