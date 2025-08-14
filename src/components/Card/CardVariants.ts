import { ExternalStyles, focusBoxShadow, hexToRGB, Theme } from '../../styles'

export type CardVariant = 'outline' | 'float' | 'plain'

export const createBaseStyles = (theme: Theme) => ({
  card: {
    width: '100%',
    border: 0,
    borderRadius: `${theme.radius.popper}px`,
    padding: '1rem',
    transition: 'all .2s',
  } as ExternalStyles,
  cardDisabled: {
    cursor: 'not-allowed',
    '& *': {
      pointerEvents: 'none',
    },
  } as ExternalStyles,
  innerDisabled: {
    opacity: 0.4,
  } as ExternalStyles,
})

export const createVariantStyles = (theme: Theme): { [key in CardVariant]: ExternalStyles } => ({
  float: {
    background: theme.pallete.surface.main,
    border: `1px solid ${theme.pallete.gray.c80}`,
    boxShadow: theme.shadows.outer[40],
    '&[data-invalid="true"]': {
      borderColor: theme.pallete.status.danger.main,
    },
    '&[data-disabled="true"]': {
      borderColor: theme.pallete.gray.c80,
      background: theme.pallete.surface.main,
    },
  } as ExternalStyles,
  outline: {
    background: theme.pallete.surface.main,
    border: `1px solid ${theme.pallete.gray.c80}`,
    borderRadius: `${theme.radius.popper}px`,
    '&[data-invalid="true"]': {
      borderColor: theme.pallete.status.danger.main,
    },
    '&[data-disabled="true"]': {
      borderColor: theme.pallete.gray.c80,
      background: theme.pallete.surface.main,
    },
  } as ExternalStyles,
  plain: {
    background: theme.pallete.surface.main,
    borderRadius: `${theme.radius.popper}px`,
    '&[data-invalid="true"]': {
      background: theme.pallete.status.danger.c90,
    },
    '&[data-disabled="true"]': {
      borderColor: theme.pallete.gray.c80,
      background: theme.pallete.surface.main,
    },
  } as ExternalStyles,
})

export const createClickableStyles = (theme: Theme): ExternalStyles => ({
  ...theme.typography.variant('main'),
  cursor: 'pointer',
  textAlign: 'initial',
  '&[data-variant="outline"], &[data-variant="plain"]': {
    borderColor: theme.pallete.gray.c60,
  },
  ':not(:disabled):hover': {
    background: hexToRGB(theme.pallete.gray.c50, 0.1),
    '&[data-variant="float"]': {
      boxShadow: theme.shadows.outer[160],
    },
  },
  ':focus': {
    outline: 'none',
    boxShadow: focusBoxShadow(theme),
    '&[data-variant="float"]': {
      boxShadow: `${theme.shadows.outer[40]}, ${focusBoxShadow(theme)}`,
    },
  },
  ':not(:disabled):not(:active):hover:focus': {
    '&[data-variant="float"]': {
      boxShadow: `${theme.shadows.outer[160]}, ${focusBoxShadow(theme)}`,
    },
  },
  ':not(:disabled):active': {
    boxShadow: theme.shadows.inner['10'],
    '&[data-variant="float"]': {
      // use zero box shadow to keep transition smooth
      boxShadow: `0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0), ${theme.shadows.inner['10']}`,
    },
  },
  '&[data-selected="true"]': {
    background: theme.pallete.primary.c90,
    borderColor: theme.pallete.primary.main,
    ':not(:disabled):hover': {
      background: theme.pallete.primary.c80,
    },
    '&[data-invalid="true"]': {
      background: theme.pallete.status.danger.c90,
    },
  },
  '&[data-invalid="true"]': {
    borderColor: theme.pallete.status.danger.main,
    ':not(:disabled):hover': {
      background: theme.pallete.status.danger.c80,
    },
    ':focus': {
      outline: 'none',
      boxShadow: focusBoxShadow(theme, 'danger'),
    },
    ':not(:disabled):active': {
      boxShadow: theme.shadows.inner['10'],
    },
    ':not(:disabled):not(:active):hover:focus': {
      '&[data-variant="float"]': {
        boxShadow: `${theme.shadows.outer[160]}, ${focusBoxShadow(theme, 'danger')}`,
      },
    },
  },
  ':disabled': {
    borderColor: theme.pallete.gray.c80,
    '&[data-selected="true"]': {
      borderColor: theme.pallete.primary.c80,
    },
    '&[data-invalid="true"]': {
      borderColor: theme.pallete.gray.c80,
      background: theme.pallete.surface.main,
      '&[data-selected="true"]': {
        borderColor: theme.pallete.status.danger.c80,
        background: theme.pallete.status.danger.c90,
      },
    },
  },
})
