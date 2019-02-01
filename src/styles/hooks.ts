import { css } from 'emotion'
import { useContext } from 'react'

import { Theme } from './theme/createTheme'
import { ThemeContext } from './theme/ThemeContext'

export const useTheme = (): Theme => {
    return useContext(ThemeContext)
}

export const useCss = () => {
    const theme = useTheme()
    return { theme, css }
}
