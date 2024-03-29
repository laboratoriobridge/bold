import React from 'react'

const SvgBrush = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M2.613 8.53a2.092 2.092 0 000 2.958l4.437 4.437 8.875-8.875-4.438-4.437a2.092 2.092 0 00-2.958 0L7.356 3.785 8.71 5.137a1.046 1.046 0 01-1.48 1.48L5.877 5.264 4.462 6.68l3.634 3.634a1.046 1.046 0 01-1.48 1.48L2.984 8.158l-.37.37zM8.454 17.33l8.875-8.874.694.694c.678.679.808 1.732.314 2.556l-1.378 2.297 4.427 4.427a2.092 2.092 0 01-2.958 2.958l-4.427-4.427-2.298 1.379a2.092 2.092 0 01-2.555-.315l-.694-.694z' />
  </svg>
)

export default SvgBrush
