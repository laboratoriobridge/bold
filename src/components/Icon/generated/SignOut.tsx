import React from 'react'

const SvgSignOut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M7.414 10.512H15c.667 0 1 .333 1 1s-.333 1-1 1H7.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5.001-5.001a1 1 0 011.414 1.414l-3.294 3.294zM20 18c0 1.333-.667 2-2 2h-1.995c-.67.021-1.005-.312-1.005-1s.335-1.021 1.005-1H18V6h-1.902C15.366 6 15 5.667 15 5s.372-1 1.116-1H18c1.324 0 1.991.668 2 2.004V18z'
    />
  </svg>
)

export default SvgSignOut
