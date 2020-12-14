import React from 'react'

const SvgDots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M12 8a2 2 0 11.001-4A2 2 0 0112 8zm0 2a2.001 2.001 0 11-.001 4.002A2.001 2.001 0 0112 10zm0 6a2.001 2.001 0 11-.001 4.002A2.001 2.001 0 0112 16z' />
  </svg>
)

export default SvgDots
