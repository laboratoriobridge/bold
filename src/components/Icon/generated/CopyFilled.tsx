import React from 'react'

const SvgCopyFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='copy-filled_svg__a'
        d='M20 5.999V18c0 1.333-.667 2-2 2h-4.14l-5.861-.001L8 6l12-.001zM12 0c1.333 0 2 .667 2 2v1.999L8 4c-1.275 0-1.94.607-1.996 1.822L6 6l-.001 10H2C.727 16 .062 15.393.004 14.178L0 14V2C0 .667.667 0 2 0z'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#copy-filled_svg__a' />
  </svg>
)

export default SvgCopyFilled
