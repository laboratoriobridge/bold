import React from 'react'

const SvgExclamationDefault = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='exclamation-default_svg__a'
        d='M1.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-13c.667 0 1 .333 1 1v9c0 .666-.332 1-.997 1s-1-.333-1.003-1V1c0-.667.333-1 1-1z'
      />
    </defs>
    <use transform='translate(11 4)' xlinkHref='#exclamation-default_svg__a' />
  </svg>
)

export default SvgExclamationDefault
