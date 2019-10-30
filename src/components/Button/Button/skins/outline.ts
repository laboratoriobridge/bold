import { focusBoxShadow, hexToRGB, Theme } from '../../../../styles'
import { Skin } from '../ButtonSkins'

export const createStyles = (theme: Theme): Skin => ({
  button: {
    backgroundColor: 'transparent',
    border: '1px solid ' + theme.pallete.gray.c40,
    borderRadius: theme.radius.button,
    color: theme.pallete.text.main,
    textDecoration: 'none',
    ':not(:disabled):active': {
      boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    },
    ':focus': {
      outline: 'none',
      boxShadow: focusBoxShadow(theme),
    },
    ':not(:disabled):hover': {
      backgroundColor: hexToRGB(theme.pallete.gray.c50, 0.16),
    },
  },
  primary: {
    border: `1px solid ${theme.pallete.primary.main}`,
    color: theme.pallete.primary.main,
    ':not(:disabled):hover': {
      backgroundColor: hexToRGB(theme.pallete.primary.main, 0.16),
    },
  },
  danger: {
    border: `1px solid ${theme.pallete.status.danger.main}`,
    color: theme.pallete.status.danger.main,
    ':not(:disabled):hover': {
      backgroundColor: hexToRGB(theme.pallete.status.danger.main, 0.1),
    },
    ':focus': {
      boxShadow: focusBoxShadow(theme, 'danger'),
    },
  },
})
