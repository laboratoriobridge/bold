import React from 'react'

const SvgInfoCircleFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='info-circle-filled_svg__a'
        d='M10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10S0 15.523 0 10C0 4.478 4.477 0 10 0zm-.004 9c-.669 0-1.001.292-.996.875v5.25c-.002.583.33.875.998.875.668 0 1.002-.292 1.002-.875v-5.25C11 9.292 10.665 9 9.996 9zM10 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#info-circle-filled_svg__a' />
  </svg>
)

export default SvgInfoCircleFilled
