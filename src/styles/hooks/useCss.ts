import { css as emotionCss } from '@emotion/css'

import { useTheme } from './useTheme'

export const useCss = () => {
  const theme = useTheme()
  return { theme, css: emotionCss }
}
