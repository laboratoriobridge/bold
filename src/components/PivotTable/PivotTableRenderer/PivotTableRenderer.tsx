import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'
import { VFlow } from '../..'
import { useStyles } from '../../../styles'
import { TableProps } from './model'
import { createPivotTableRenderStyles } from './styles'
import { buildHorizontalTable, buildRectangularTable, buildVerticalTable } from './PivotTableBuilder'

const SCROLL_LEFT_SHADOW_MARGIN = 10

export function PivotTableRenderer<T extends object>(props: TableProps<T>) {
  const { rowKeys, columnKeys, keysMapping, defaultTree, complementaryTree } = props
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const [tableExceeds, setTableExceeds] = useState(false)
  const [displayRightShadow, setDisplayRightShadow] = useState(true)
  const [displayLeftShadow, setDisplayLeftShadow] = useState(false)

  const { classes } = useStyles(createPivotTableRenderStyles)

  let table: ReactElement[] = []
  if (rowKeys?.length && complementaryTree?.nodeValue !== undefined && columnKeys?.length) {
    table = buildRectangularTable<T>(defaultTree, keysMapping, rowKeys, columnKeys, complementaryTree)
  } else if (rowKeys?.length) {
    table = buildHorizontalTable<T>(defaultTree, keysMapping, rowKeys)
  } else if (columnKeys?.length) {
    table = buildVerticalTable<T>(defaultTree, keysMapping, columnKeys)
  }

  useEffect(() => {
    if (tableContainerRef.current) {
      setTableExceeds(tableContainerRef.current.scrollWidth > tableContainerRef.current.clientWidth)
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (tableContainerRef.current) {
      const displayRight =
        tableContainerRef.current.scrollLeft !==
        tableContainerRef.current.scrollWidth - tableContainerRef.current.clientWidth

      const displayLeft = tableContainerRef.current.scrollLeft > SCROLL_LEFT_SHADOW_MARGIN

      setDisplayLeftShadow(displayLeft)
      setDisplayRightShadow(displayRight)
    }
  }, [])

  return (
    <VFlow>
      <div className={classes.tableContainer}>
        {tableExceeds && displayLeftShadow && <div className={classes.leftShadow}></div>}
        <div onScrollCapture={handleScroll} ref={tableContainerRef} key='table' className={classes.tableWrapper}>
          {table}
        </div>
        {tableExceeds && displayRightShadow && <div className={classes.rightShadow}></div>}
      </div>
    </VFlow>
  )
}
