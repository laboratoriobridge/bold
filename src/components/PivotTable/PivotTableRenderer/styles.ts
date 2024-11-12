import { CSSProperties } from 'react'

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
    height: 'calc(100% - 16px)',
    width: '0.5rem',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.12) 10%, rgba(255, 255, 255, 0) 100%)',
  } as CSSProperties,
  rightShadow: {
    position: 'absolute',
    right: '0',
    top: '0',
    height: 'calc(100% - 16px)',
    width: '0.5rem',
    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.12) 10%, rgba(255, 255, 255, 0) 100%)',
  } as CSSProperties,
})
