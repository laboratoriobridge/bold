import React from 'react'

export interface PivotTableContextType {
  /**
   * The maximum expected value for all the table
   */
  maxValue: number
  /**
   * The suffix to append to the cell value
   */
  suffix?: string
}

interface PivotTableProvider extends PivotTableContextType {
  children: React.ReactNode
}

export const PivotTableContext = React.createContext<PivotTableContextType>(undefined)

export const PivotTableProvider = (props: PivotTableProvider) => {
  const { children, maxValue, suffix } = props

  return <PivotTableContext.Provider value={{ maxValue, suffix }}>{children}</PivotTableContext.Provider>
}
