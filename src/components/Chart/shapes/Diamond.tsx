import React from 'react'

import { CustomDotProps } from '../model'

export const Diamond = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <svg
        x={cx - 15}
        y={cy - 15}
        width={470}
        height={470}
        {...{ fill: stroke, opacity: 0.3 }}
        viewBox='0 0 1024 1024'
        className='hover-shape'
      >
        <DiamondSvgPath />
      </svg>
      <svg x={cx - 7} y={cy - 6.5} width={215} height={215} {...{ fill: stroke }} viewBox='0 0 1024 1024'>
        <DiamondSvgPath />
      </svg>
    </>
  )
}

const DiamondSvgPath = () => <path d='M52 32 L32 2 L12 32 L32 62 Z' />
