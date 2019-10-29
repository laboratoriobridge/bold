import { focusBoxShadow, hexToRGB, Theme } from '../../../../styles'
import { Skin } from '../ButtonSkins'

export const createStyles = (theme: Theme): Skin => ({
  button: {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: theme.radius.button,
    color: theme.pallete.text.main,
    textDecoration: 'none',
    ':not(:disabled):active': {
      boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    },
    ':focus': {
      outline: 'none',
      boxShadow: focusBoxShadow(theme, 'primary', 'single'),
    },
    ':not(:disabled):hover': {
      backgroundColor: hexToRGB(theme.pallete.gray.c20, 0.1),
    },
  },
  primary: {
    color: theme.pallete.primary.main,
  },
  danger: {
    color: theme.pallete.status.danger.main,
    ':focus': {
      boxShadow: focusBoxShadow(theme, 'danger'),
    },
  },
})
