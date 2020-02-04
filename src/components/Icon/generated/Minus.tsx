import React from 'react'

const SvgMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path id='minus_svg__a' d='M1 2h14c.667 0 1-.332 1-1 0-.668-.333-1-1-1H1C.333 0 0 .332 0 1c0 .668.333 1 1 1z' />
    </defs>
    <use transform='translate(4 11)' xlinkHref='#minus_svg__a' />
  </svg>
)

export default SvgMinus
