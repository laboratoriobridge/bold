import { createTheme, Theme } from 'bridge-react/lib'
import { useEffect, useState } from 'react'

import { colors, invertColorScale } from '../../lib/styles'

export const lightTheme = createTheme({
  pallete: {
    grayScale: colors.gray,
    primaryScale: colors.blue,
  },
})

export const darkTheme = createTheme({
  pallete: {
    grayScale: invertColorScale(colors.gray),
    primaryScale: invertColorScale(colors.blue),
  },
})

export const useThemeSwitch = (): [Theme, () => Theme] => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme)

  useEffect(() => {
    if (localStorage) {
      const loadedTheme = localStorage.getItem('currentTheme') === 'dark' ? darkTheme : lightTheme
      setCurrentTheme(loadedTheme)
    }
  }, [])

  const toggleTheme = () => {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme)

      if (localStorage) {
        localStorage.setItem('currentTheme', 'dark')
      }

      return darkTheme
    } else {
      setCurrentTheme(lightTheme)

      if (localStorage) {
        localStorage.setItem('currentTheme', 'light')
      }

      return lightTheme
    }
  }

  return [currentTheme, toggleTheme]
}
