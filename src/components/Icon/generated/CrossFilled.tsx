import React from 'react'

const SvgCrossFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M10 7H6c-1.267.001-1.901.668-1.901 2.001 0 1.333.634 1.999 1.9 1.999H10v9c.003 1.2.67 1.8 2.002 1.802C13.334 21.804 14 21.202 14 20v-9h4c1.267-.05 1.901-.716 1.901-1.999 0-1.283-.634-1.95-1.901-2.001h-4V4c0-1.333-.666-2-1.998-2-1.332 0-2 .667-2.002 2v3z'
    />
  </svg>
)

export default SvgCrossFilled
