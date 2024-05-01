import React from 'react'

import { CustomDotProps } from '../model'

export const Rectangle = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <svg
        x={cx - 15.3}
        y={cy - 15.3}
        width={490}
        height={490}
        {...{ fill: stroke, opacity: 0.3 }}
        viewBox='0 0 1024 1024'
        className='hover-circle'
      >
        <path d='M8 22 L8 42 L56 42 L56 22 Z' />
      </svg>
      <svg x={cx - 10} y={cy - 10} width={315} height={315} {...{ fill: stroke }} viewBox='0 0 1024 1024'>
        <path d='M8 22 L8 42 L56 42 L56 22 Z' />
      </svg>
    </>
  )
}
