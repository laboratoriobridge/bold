import React from 'react'

import { BreadcrumbStore } from './BreadcrumbStore'

const defaultStore = new BreadcrumbStore()

export const BreadcrumbContext = React.createContext<BreadcrumbStore>(defaultStore)

export const BreadcrumbConsumer = BreadcrumbContext.Consumer

export interface BreadcrumbProviderProps {
  value?: BreadcrumbStore
  children?: React.ReactNode
}

export function BreadcrumbProvider({ value, children }: BreadcrumbProviderProps) {
  return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>
}

BreadcrumbProvider.defaultProps = {
  value: defaultStore,
} as Partial<BreadcrumbProviderProps>
