import { useContext } from 'react'

import { Theme } from '../theme/createTheme'
import { ThemeContext } from '../theme/ThemeContext'

export const useTheme = (): Theme => {
    return useContext(ThemeContext)
}
