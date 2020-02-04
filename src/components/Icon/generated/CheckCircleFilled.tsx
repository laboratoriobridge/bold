import React from 'react'

const SvgCheckCircleFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='check-circle-filled_svg__a'
        d='M10 0c5.523 0 10 4.477 10 10 0 5.522-4.477 10-10 10S0 15.522 0 10C0 4.477 4.477 0 10 0zm4.708 6.293a1 1 0 00-1.414 0l-5.293 5.293-2.294-2.294a1 1 0 10-1.414 1.414l3.001 3.001a1 1 0 001.414 0l6-6a1 1 0 000-1.414z'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#check-circle-filled_svg__a' />
  </svg>
)

export default SvgCheckCircleFilled
