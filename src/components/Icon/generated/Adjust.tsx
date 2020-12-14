import React from 'react'

const SvgAdjust = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M16.001 12a4.002 4.002 0 01-3.871-2.99c0-.007-2.377-.007-7.131 0-.667.005-1-.329-.999-1.001C4.001 7.336 4.335 7 5.001 7l7.121.018A4.002 4.002 0 0120.001 8a4 4 0 01-4 4zM8 12c1.86 0 3.424 1.27 3.871 2.99 0 .007 2.377.007 7.131 0 .667-.005 1 .329.999 1.001C20 16.664 19.666 17 19 17l-7.121-.018A4.002 4.002 0 014 16a4 4 0 014-4zm8.001-2a2 2 0 100-4 2 2 0 000 4zm-8 8a2 2 0 100-4 2 2 0 000 4z'
    />
  </svg>
)

export default SvgAdjust
