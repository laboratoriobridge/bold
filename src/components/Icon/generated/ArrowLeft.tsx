import React from 'react'

const SvgArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M7.414 11.001H19c.667 0 1 .334 1 1 0 .667-.333 1-1 1H7.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5.001-5.001a1 1 0 111.414 1.414l-3.294 3.294z'
    />
  </svg>
)

export default SvgArrowLeft
