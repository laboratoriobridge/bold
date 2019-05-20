import { useEffect, useState } from 'react'

import { darkTheme, lightTheme, Theme } from '../../lib'

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
