import React from 'react'

const SvgCheckDefault = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M18.294 6.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0l-5.001-5.001a1 1 0 011.414-1.414l4.294 4.294 8.293-8.293z'
    />
  </svg>
)

export default SvgCheckDefault
