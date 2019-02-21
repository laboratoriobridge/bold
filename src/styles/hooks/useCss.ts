import { css as emotionCss } from 'emotion'

import { useTheme } from './useTheme'

export const useCss = () => {
    const theme = useTheme()
    return { theme, css: emotionCss }
}
