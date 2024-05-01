import React from 'react'

import { CustomDotProps } from '../model'

export const Square = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <svg
        x={cx - 11}
        y={cy - 11}
        width={345}
        height={345}
        {...{ fill: stroke, opacity: 0.3 }}
        viewBox='0 0 1024 1024'
        className='hover-circle'
      >
        <path d='M6 58 L6 6 L58 6 L58 58 Z' />
      </svg>
      <svg x={cx - 5} y={cy - 5} width={150} height={150} {...{ fill: stroke }} viewBox='0 0 1024 1024'>
        <path d='M6 58 L6 6 L58 6 L58 58 Z' />
      </svg>
    </>
  )
}
