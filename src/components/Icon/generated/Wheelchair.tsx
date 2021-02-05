import React from 'react'

const SvgWheelchair = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M11.827 4.782l1.626.82 2.598 1.5a2 2 0 01.732 2.732l-1.247 2.16L18 12c.531.005.997.193 1.398.563.402.37.602.85.602 1.437v5c0 .667-.333 1-1 1-.666 0-1-.333-1-1v-5h-2.335c.236.875.354 1.543.354 2.004C16.02 18.654 14 22 10 22s-6-3.153-6-5.996c0-2.844 2.2-5.998 5.979-5.998.193 0 .49.024.89.072l1.55-2.686-1.242-.737-1.078 1.831c-.39.464-.837.538-1.343.222-.506-.315-.596-.754-.27-1.316l1.029-1.79c.216-.382.535-.655.955-.82.42-.165.872-.165 1.357 0zM10 12a4 4 0 100 8 4 4 0 000-8zm6-10a2 2 0 110 4 2 2 0 010-4z'
    />
  </svg>
)

export default SvgWheelchair