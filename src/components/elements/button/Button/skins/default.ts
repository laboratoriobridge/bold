import { focusBoxShadow, shade, Theme } from '../../../../../styles'
import { Skin } from '../ButtonSkins'

export const createStyles = (theme: Theme): Skin => ({
    button: {
        backgroundColor: theme.pallete.surface.main,
        border: '1px solid ' + theme.pallete.gray.c70,
        borderRadius: theme.radius.button,
        color: theme.pallete.gray.c40,
        ':not(:disabled):active': {
            boxShadow: 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
        },
        ':focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme),
        },
        ':not(:disabled):hover': {
            backgroundColor: shade(-0.08, theme.pallete.surface.main),
        },
    },
    primary: {
        backgroundColor: theme.pallete.primary.main,
        color: theme.pallete.surface.main,
        border: `1px solid ${theme.pallete.primary.main}`,
        ':not(:disabled):hover': {
            backgroundColor: shade(-0.08, theme.pallete.primary.main),
        },
    },
    danger: {
        backgroundColor: theme.pallete.status.danger.main,
        color: theme.pallete.status.danger.onColor,
        border: `1px solid ${theme.pallete.status.danger.main}`,
        ':not(:disabled):hover': {
            backgroundColor: shade(-0.08, theme.pallete.status.danger.main),
        },
        ':focus': {
            boxShadow: focusBoxShadow(theme, 'danger'),
        },
    },
})
