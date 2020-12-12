import React from 'react'

const SvgUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M13 7.414V15c0 .667-.333 1-1 1s-1-.333-1-1V7.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5a1 1 0 011.414 0l5.001 5.001a1 1 0 01-1.414 1.414L13 7.414zM4 19c.002-.667.335-1 1-1h14c.667-.004 1 .33 1 1.001 0 .672-.333 1.005-1 .999H5.002c-.67 0-1.004-.334-1.002-1z'
    />
  </svg>
)

export default SvgUpload
