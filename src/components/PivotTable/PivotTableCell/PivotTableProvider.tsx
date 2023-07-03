import React from 'react'

export interface PivotTableContextType {
  total: number
  suffix?: string
}

interface PivotTableProvider {
  value: PivotTableContextType
  children: React.ReactNode
}

export const PivotTableContext = React.createContext<PivotTableContextType>(undefined)

export const PivotTableProvider = (props: PivotTableProvider) => {
  const { children, value } = props

  return <PivotTableContext.Provider value={value}>{children}</PivotTableContext.Provider>
}
