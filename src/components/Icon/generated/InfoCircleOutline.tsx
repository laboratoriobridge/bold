import React from 'react'

const SvgInfoCircleOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='info-circle-outline_svg__a'
        d='M20 10c0-5.522-4.477-10-10-10S0 4.478 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10zM10 2a8 8 0 110 16 8 8 0 010-16zm-.004 7c-.669 0-1.001.292-.996.875v5.25c-.002.583.33.875.998.875.668 0 1.002-.292 1.002-.875v-5.25C11 9.292 10.665 9 9.996 9zM10 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#info-circle-outline_svg__a' />
  </svg>
)

export default SvgInfoCircleOutline
