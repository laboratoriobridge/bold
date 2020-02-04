import React from 'react'

const SvgBellFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='bell-filled_svg__a'
        d='M14 14V7.961a5.951 5.951 0 00-4-5.621V2a2 2 0 00-4 0v.362a6.032 6.032 0 00-4 5.677V14H1c-.667 0-1 .333-1 1s.333 1 1 1h14c.667 0 1-.333 1-1s-.333-1-1-1h-1zm-8 4a2 2 0 004 0H6z'
      />
    </defs>
    <use transform='translate(4 2)' xlinkHref='#bell-filled_svg__a' />
  </svg>
)

export default SvgBellFilled
