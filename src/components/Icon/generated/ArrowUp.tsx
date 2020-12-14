import React from 'react'

const SvgArrowUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M13 7.414V19c0 .667-.333 1-1 1s-1-.333-1-1V7.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5a1 1 0 011.414 0l5.001 5.001a1 1 0 11-1.414 1.414L13 7.414z'
    />
  </svg>
)

export default SvgArrowUp
