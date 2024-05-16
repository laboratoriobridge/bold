import React from 'react'

import { CustomDotProps } from '../model'

export const Star = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <svg
        x={cx - 28}
        y={cy - 28}
        width={900}
        height={900}
        {...{ fill: stroke, opacity: 0.3 }}
        viewBox='0 0 1024 1024'
        className='hover-shape'
      >
        <StarSvgPath />
      </svg>
      <svg x={cx - 15} y={cy - 15} width={480} height={480} {...{ fill: stroke }} viewBox='0 0 1024 1024'>
        <StarSvgPath />
      </svg>
    </>
  )
}

const StarSvgPath = () => <path d='M36 26 L32 16 L28 26 L16 26 L26 34 L20 46 L32 40 L44 46 L38 34 L48 26 Z' />
