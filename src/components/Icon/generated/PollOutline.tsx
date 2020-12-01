import React from 'react'

const SvgPollOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M5 8c0-1.328.667-1.995 2-2h2.001V4c0-1.333.666-2 1.996-2h2.007C14.335 2.005 15 2.67 15 4v6h2c1.333 0 2 .668 2 2.004v4c0 1.33-.667 1.998-2 2.002C15 18.01 7.334 18 7 18c-1.333 0-2-.667-2-2V8zm2 0v8h2V8H7zm4-4v12h2V4h-2zm4 8v4h2v-4h-2zM5 20h14c.667 0 1 .334 1 1 0 .667-.333 1-1 1H5c-.667 0-1-.333-1-1 0-.666.333-1 1-1z'
    />
  </svg>
)

export default SvgPollOutline
