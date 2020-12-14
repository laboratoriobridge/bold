import React from 'react'

const SvgArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M16.586 13H5c-.667 0-1-.332-1-1 0-.668.333-1 1-1h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5.001 5.001a1 1 0 11-1.414-1.414L16.586 13z'
    />
  </svg>
)

export default SvgArrowRight
