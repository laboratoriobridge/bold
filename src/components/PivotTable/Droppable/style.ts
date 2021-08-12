import { CSSProperties } from 'react'
import { Theme } from '../../../styles'

export const droppableCreateStyles = (theme: Theme, hasKeys: boolean) => ({
  placeholder: {
    alignSelf: 'center',
    textAlign: 'center',
  } as CSSProperties,
  box: {
    display: 'flex',
    minHeight: '7.18rem',
    minWidth: '16rem',
    margin: '0.25rem',
    padding: '0.75rem',
    justifyContent: hasKeys ? 'flex-start' : 'center',
  } as CSSProperties,
})
