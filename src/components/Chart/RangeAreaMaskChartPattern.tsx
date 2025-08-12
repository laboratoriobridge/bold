import React from 'react'

export const RANGE_AREA_MASK_ID = 'mask-range-area'

export function RangeAreaMaskChartPattern() {
  return (
    <defs>
      <pattern id={RANGE_AREA_MASK_ID} patternUnits='userSpaceOnUse' width='21' height='60' viewBox='0 0 21 60'>
        <rect width='21' height='60' fill='white' fillOpacity='1' />
        <path
          d='M 0 60 L 21 0 M -21 60 L 0 0 M 21 60 L 42 0 M 42 60 L 63 0 M 63 60 L 84 0'
          stroke='#D3D4DD'
          strokeWidth='1.6'
        />
      </pattern>
    </defs>
  )
}
