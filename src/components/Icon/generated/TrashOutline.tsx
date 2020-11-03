import React from 'react'

const SvgTrashOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M9 4c0-1.333.667-2 2-2h2c1.333 0 2 .667 2 2h3c1.333 0 2 .667 2 2v2c0 .942-.333 1.551-1 1.828V20c0 1.333-.667 2-2 2H7c-1.336 0-2.003-.667-2-2V9.828C4.333 9.552 4 8.943 4 8V6c0-1.333.666-2 1.999-2H9zm-2 6v10h10V10H7zM6 6v2h12V6H6zm3 7c0-.657.333-.99 1-1 .667-.01 1 .324 1 1v4c0 .667-.333 1-1 1s-1-.333-1-1v-4zm4 0c0-.657.333-.99 1-1 .667-.01 1 .324 1 1v4c0 .667-.333 1-1 1s-1-.333-1-1v-4z'
    />
  </svg>
)

export default SvgTrashOutline
