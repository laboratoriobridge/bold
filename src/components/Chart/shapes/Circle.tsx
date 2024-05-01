import React from 'react'
import { Dot } from 'recharts'

import { CustomDotProps } from '../model'

export const Circle = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props
  return (
    <>
      <Dot cx={cx} cy={cy} r={12} {...{ fill: stroke, opacity: 0.3 }} className='hover-circle' />
      <Dot cx={cx} cy={cy} r={4} {...{ fill: stroke }} />
    </>
  )
}
