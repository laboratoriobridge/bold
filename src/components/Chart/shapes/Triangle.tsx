import React from 'react'

import { CustomDotProps } from '../model'

export const Triangle = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <svg
        x={cx - 15}
        y={cy - 17}
        width={470}
        height={470}
        {...{ fill: stroke, opacity: 0.3 }}
        viewBox='0 0 1024 1024'
        className='hover-circle'
      >
        <path d='M10 44 L32 10 L54 44 Z' />
      </svg>
      <svg x={cx - 8.5} y={cy - 8} width={270} height={270} {...{ fill: stroke }} viewBox='0 0 1024 1024'>
        <path d='M10 44 L32 10 L54 44 Z' />
      </svg>
    </>
  )
}
