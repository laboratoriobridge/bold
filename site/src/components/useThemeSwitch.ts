import { darkTheme, lightTheme, Theme } from 'bold-ui'
import { useEffect, useState } from 'react'

import { ga } from './ga'

export const useThemeSwitch = (): [Theme, () => Theme] => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme)

  useEffect(() => {
    if (localStorage) {
      const loadedTheme = loadTheme()
      setCurrentTheme(loadedTheme)
    }
  }, [])

  const toggleTheme = () => {
    ga('send', 'event', {
      eventCategory: 'Theme',
      eventAction: `Switched to ${currentTheme === lightTheme ? 'dark' : 'light'} theme`,
    })

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

const loadTheme = () => {
  let loadedTheme = localStorage.getItem('currentTheme')

  if (!loadedTheme) {
    loadedTheme = Math.random() < 0.3 ? 'dark' : 'light'
  }

  localStorage.setItem('currentTheme', loadedTheme)
  return loadedTheme === 'dark' ? darkTheme : lightTheme
}
