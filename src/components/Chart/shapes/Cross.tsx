import React from 'react'

import { CustomDotProps } from '../model'

export const Cross = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <svg
        x={cx - 17}
        y={cy - 17}
        width={550}
        height={550}
        {...{ fill: stroke, opacity: 0.3 }}
        viewBox='0 0 1024 1024'
        className='hover-shape'
      >
        <CrossSvgPath />
      </svg>
      <svg x={cx - 10} y={cy - 10} width={315} height={315} {...{ fill: stroke }} viewBox='0 0 1024 1024'>
        <CrossSvgPath />
      </svg>
    </>
  )
}
const CrossSvgPath = () => (
  <path d='M40 12 L26 12 L26 24 L14 24 L14 38 L26 38 L26 50 L40 50 L40 38 L52 38 L52 24 L40 24 Z' />
)
