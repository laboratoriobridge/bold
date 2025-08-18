import React from 'react'

export const RANGE_AREA_MASK_ID = 'mask-range-area'

export function RangeAreaMaskChartPattern() {
  return (
    <defs>
      <pattern
        id={RANGE_AREA_MASK_ID}
        patternUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='10.5'
        height='60'
        viewBox='0 0 10.5 60'
      >
        <rect width='10.5' height='60' fill='white' fillOpacity='1' />
        <path
          d='
        M -10.5 60 L 0 0
        M 0 60 L 10.5 0
      '
          stroke='#D3D4DD'
          strokeWidth='1.6'
          shape-rendering='geometricPrecision'
        />
      </pattern>
    </defs>
  )
}
