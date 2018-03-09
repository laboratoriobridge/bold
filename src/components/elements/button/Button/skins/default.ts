import { focusBoxShadow, shade, Theme } from '../../../../../styles'
import { Skin } from '../ButtonSkins'

export const createStyles = (theme: Theme): Skin => ({
    button: {
        backgroundColor: theme.color.white,
        border: '1px solid ' + theme.color.gray70,
        borderRadius: theme.baseRadius + 2,
        color: theme.color.gray40,
        ':not(:disabled):active': {
            boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
        },
        ':focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme),
        },
        ':not(:disabled):hover': {
            backgroundColor: shade(-0.08, theme.color.white),
        },
    },
    primary: {
        backgroundColor: theme.color.primary,
        border: '1px solid ' + theme.color.primary,
        color: theme.color.white,
        ':not(:disabled):hover': {
            backgroundColor: shade(-0.08, theme.color.primary),
        },
    },
})
