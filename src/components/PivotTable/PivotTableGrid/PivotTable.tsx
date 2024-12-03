import { CSSProperties, ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'
import { useStyles } from '../../../styles'
import { KeyMap } from '../model'
import { PivotTableCell, PivotTableCellProps } from '../PivotTableCell/PivotTableCell'
import { PivotTableProps, PivotTableTreeNode } from './model'
import { buildHorizontalTable, buildRectangularTable, buildVerticalTable } from './util'

const SCROLL_LEFT_SHADOW_MARGIN = 10

export function PivotTable<T extends object>(props: PivotTableProps<T>) {
  const { rowKeys, columnKeys, keysMapping, defaultTree, complementaryTree } = props
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const [tableExceeds, setTableExceeds] = useState(false)
  const [displayRightShadow, setDisplayRightShadow] = useState(true)
  const [displayLeftShadow, setDisplayLeftShadow] = useState(false)

  const { classes } = useStyles(createPivotTableRenderStyles)

  const tableCells: ReactElement[] = buildTable<T>(
    rowKeys,
    complementaryTree,
    columnKeys,
    defaultTree,
    keysMapping
  ).map(buildCells)

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
      if (displayLeft !== displayLeftShadow) {
        setDisplayLeftShadow(displayLeft)
      }
      if (displayRight !== displayRightShadow) {
        setDisplayRightShadow(displayRight)
      }
    }
  }, [displayLeftShadow, displayRightShadow])

  return (
    <div className={classes.tableContainer}>
      {tableExceeds && displayLeftShadow && <div className={classes.leftShadow}></div>}
      <div onScrollCapture={handleScroll} ref={tableContainerRef} className={classes.tableWrapper}>
        {tableCells}
      </div>
      {tableExceeds && displayRightShadow && <div className={classes.rightShadow}></div>}
    </div>
  )
}

function buildTable<T extends object>(
  rowKeys: (keyof T)[],
  complementaryTree: PivotTableTreeNode<T>,
  columnKeys: (keyof T)[],
  defaultTree: PivotTableTreeNode<T>,
  keysMapping: KeyMap<T>
): PivotTableCellProps[] {
  if (rowKeys?.length && complementaryTree?.nodeValue !== undefined && columnKeys?.length) {
    return buildRectangularTable<T>(defaultTree, keysMapping, rowKeys, columnKeys, complementaryTree)
  } else if (rowKeys?.length) {
    return buildHorizontalTable<T>(defaultTree, keysMapping, rowKeys)
  } else if (columnKeys?.length) {
    return buildVerticalTable<T>(defaultTree, keysMapping, columnKeys)
  }
  return []
}

function buildCells(props: PivotTableCellProps): ReactElement {
  const { types, gridArea, isEndColumn, isEndRow, children } = props
  return (
    <PivotTableCell
      types={types}
      gridArea={gridArea}
      isEndColumn={isEndColumn}
      isEndRow={isEndRow}
      key={gridArea.toString()}
    >
      {children}
    </PivotTableCell>
  )
}

export const createPivotTableRenderStyles = () => ({
  tableContainer: {
    position: 'relative',
    height: '100%',
  } as CSSProperties,
  tableWrapper: {
    maxWidth: '100%',
    overflow: 'auto',
    display: 'grid',
    placeItems: 'center center',
    placeContent: 'start start',
  } as CSSProperties,
  leftShadow: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: 'calc(100% - 1rem)',
    width: '0.5rem',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.12) 10%, rgba(255, 255, 255, 0) 100%)',
  } as CSSProperties,
  rightShadow: {
    position: 'absolute',
    right: '0',
    top: '0',
    height: 'calc(100% - 1rem)',
    width: '0.5rem',
    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.12) 10%, rgba(255, 255, 255, 0) 100%)',
  } as CSSProperties,
})
