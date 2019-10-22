/* tslint:disable */
import React from 'react'

const SvgContrast = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='contrast_svg__a'
        d='M10 18V2c4.411 0 8 3.588 8 8s-3.589 8-8 8m0-18C4.486 0 0 4.485 0 10c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.515-4.486-10-10-10'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#contrast_svg__a' />
  </svg>
)

export default SvgContrast
