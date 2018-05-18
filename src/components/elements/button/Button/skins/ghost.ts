import { focusBoxShadow, hexToRGB, Theme } from '../../../../../styles'
import { Skin } from '../ButtonSkins'

export const createStyles = (theme: Theme): Skin => ({
    button: {
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        borderRadius: theme.radius.button,
        color: theme.pallete.gray.c40,
        ':not(:disabled):active': {
            boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
        },
        ':focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme, 'primary', 'single'),
        },
        ':not(:disabled):hover': {
            backgroundColor: hexToRGB(theme.pallete.gray.c50, 0.16),
        },
    },
    primary: {

    },
})
