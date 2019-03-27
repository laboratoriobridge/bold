import { PositionProperty } from 'csstype'
import { Interpolation } from 'emotion'
import React, { CSSProperties, useEffect, useState } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export interface StickyContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  top?: number
  left?: number
  style?: Interpolation
}

export function StickyContainer(props: StickyContainerProps) {
  const { top, left, style, ...rest } = props
  const [position, setPosition] = useState<PositionProperty>('absolute')
  const { classes, css } = useStyles(createStyles, props, position)

  const listener = () => {
    if (window.scrollY > top) {
      setPosition('fixed')
    } else {
      setPosition('absolute')
    }
  }

  useEffect(() => {
    addEventListener('scoll', listener)
    return () => removeEventListener('scoll', listener)
  }, [])

  return <div className={css(classes.container, style)} {...rest} />
}

export const createStyles = (theme: Theme, { left, top }: StickyContainerProps, position: PositionProperty) => ({
  container: {
    position,
    top: position === 'fixed' ? 0 : top,
    left,
    width: '100%',
    zIndex: 2,
  } as CSSProperties,
})
