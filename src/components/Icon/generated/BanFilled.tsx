import React from 'react'

const SvgBanFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='ban-filled_svg__a'
        d='M2.358 3.557l14.085 14.085A9.956 9.956 0 0110 20C4.486 20 0 15.514 0 10c0-2.453.887-4.702 2.358-6.443zM10 0c5.514 0 10 4.486 10 10 0 2.342-.81 4.5-2.164 6.206L3.794 2.164A9.952 9.952 0 0110 0z'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#ban-filled_svg__a' />
  </svg>
)

export default SvgBanFilled
