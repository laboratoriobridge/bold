import React from 'react'

const SvgPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M5 11h6V5c-.011-.667.322-1 1-1 .678 0 1.011.333 1 1v6h6c.667 0 1 .333 1 1s-.333 1-1 1h-6v6c.015.667-.318 1-1 1-.682 0-1.015-.333-1-1v-6H5c-.667 0-1-.332-1-1 0-.668.333-1 1-1z'
    />
  </svg>
)

export default SvgPlus
