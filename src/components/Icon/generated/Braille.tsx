import React from 'react'

const SvgBraille = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M15 16a2 2 0 110 4 2 2 0 010-4zM4 17a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2zm11 0a1 1 0 110 2 1 1 0 010-2zM4 10a2 2 0 110 4 2 2 0 010-4zm16 0a2 2 0 110 4 2 2 0 010-4zm-5 0a2 2 0 110 4 2 2 0 010-4zm-6 1a1 1 0 110 2 1 1 0 010-2zM4 4a2 2 0 110 4 2 2 0 010-4zm5 0a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm5 1a1 1 0 110 2 1 1 0 010-2z'
    />
  </svg>
)

export default SvgBraille
