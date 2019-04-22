/* tslint:disable */
import React from 'react'

const SvgPause = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='pause_svg__a'
        d='M8 19V5c0-.667.333-1 1-1s1 .333 1 1v14c0 .667-.333 1-1 1s-1-.333-1-1zm6 0V5c.005-.667.34-1 1.004-1 .664 0 .996.333.996 1v14c0 .667-.333 1-1 1s-1-.333-1-1z'
      />
    </defs>
    <use xlinkHref='#pause_svg__a' />
  </svg>
)

export default SvgPause
