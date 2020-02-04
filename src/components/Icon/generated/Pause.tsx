import React from 'react'

const SvgPause = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='pause_svg__a'
        d='M1 0c.667 0 1 .333 1 1v14c0 .667-.333 1-1 1s-1-.333-1-1V1c0-.667.333-1 1-1zm6.004 0C7.668 0 8 .333 8 1v14c0 .667-.333 1-1 1s-1-.333-1-1V1c.005-.667.34-1 1.004-1z'
      />
    </defs>
    <use transform='translate(8 4)' xlinkHref='#pause_svg__a' />
  </svg>
)

export default SvgPause
