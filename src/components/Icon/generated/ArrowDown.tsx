import React from 'react'

const SvgArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M11.001 16.586V5.005c.001-.669.335-1.003 1-1.005.666-.001 1 .332 1 1v11.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5.001-5.001a1 1 0 111.414-1.414l3.294 3.294z'
    />
  </svg>
)

export default SvgArrowDown
