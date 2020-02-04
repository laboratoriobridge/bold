import React from 'react'

const SvgDots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='dots_svg__a'
        d='M2 12a2 2 0 11-.001 4.001A2 2 0 012 12zm0-6a2 2 0 11-.001 4.001A2 2 0 012 6zm0-6a2 2 0 11-.001 4.001A2 2 0 012 0z'
      />
    </defs>
    <use transform='translate(10 4)' xlinkHref='#dots_svg__a' />
  </svg>
)

export default SvgDots
