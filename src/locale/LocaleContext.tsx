import { createContext, useContext } from 'react'

import defaultLocale from './locales/en-US'

export type LocaleConfiguration = typeof defaultLocale

export const LocaleContext = createContext<LocaleConfiguration>(defaultLocale)

export function useLocale() {
  return useContext(LocaleContext)
}
