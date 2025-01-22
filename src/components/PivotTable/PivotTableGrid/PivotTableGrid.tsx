import { CSSProperties, useCallback, useRef, useState } from 'react'
import React from 'react'
import { useStyles } from '../../../styles'
import { PivotTableCell } from '../PivotTableCell/PivotTableCell'
import { PivotTableProps } from './model'
import { buildTable } from './buildTable'

const SCROLL_LEFT_SHADOW_MARGIN = 10

export function PivotTableGrid<T extends object>(props: PivotTableProps<T>) {
  const { rowKeys, columnKeys, keysMapping, defaultTree, complementaryTree } = props
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const [tableExceeds, setTableExceeds] = useState(false)
  const [displayRightShadow, setDisplayRightShadow] = useState(true)
  const [displayLeftShadow, setDisplayLeftShadow] = useState(false)

  const { classes } = useStyles(createPivotTableGridStyles)

  const cells = buildTable<T>(rowKeys, columnKeys, defaultTree, complementaryTree, keysMapping)

  const setTableRef = useCallback(
    (ref) => {
      tableContainerRef.current = ref
      if (tableContainerRef.current) {
        const newTableExceeds = tableContainerRef.current.scrollWidth > tableContainerRef.current.clientWidth
        if (tableExceeds !== newTableExceeds) setTableExceeds(newTableExceeds)
      }
    },
    [tableExceeds]
  )

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
      <div onScrollCapture={handleScroll} ref={setTableRef} className={classes.tableWrapper}>
        {cells.map((cell) => (
          <PivotTableCell
            types={cell.types}
            gridArea={cell.gridArea}
            isEndColumn={cell.isEndColumn}
            isEndRow={cell.isEndRow}
            key={cell.gridArea.toString()}
          >
            {cell.children}
          </PivotTableCell>
        ))}
      </div>
      {tableExceeds && displayRightShadow && <div className={classes.rightShadow}></div>}
    </div>
  )
}

const createPivotTableGridStyles = () => ({
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
