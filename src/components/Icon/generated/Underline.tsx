import React from 'react'

const SvgUnderline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M15.997 4c.666-.002 1 .33 1 .994v5.002c0 1.02 0 6.005-4.963 6.004C7.07 16 7 11.575 7 9.994v-5C6.998 4.331 7.33 4 7.997 4c.666 0 1 .331 1 .994v5.002c0 1.064.07 4.005 3.037 4.005C15 14.001 15 11.065 15 9.994V5c-.002-.665.33-.998.997-1zM4 19c0-.667.333-1 1-1h14c.667 0 1 .333 1 1s-.333 1-1 1H5c-.667 0-1-.333-1-1z'
    />
  </svg>
)

export default SvgUnderline
