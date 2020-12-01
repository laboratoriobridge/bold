import React from 'react'

const SvgWalker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M15.732 2C18.378 2 19 4 19 4.998v11.15c1.34.644 2.006 1.595 2 2.852-.01 1.886-1.587 3.012-2.993 3.012S15 20.9 15 19c0-1.266.666-2.217 2-2.852V11H7.154l-2.118 9.999c-.024.675-.366 1.013-1.027 1.013-.66 0-.996-.338-1.009-1.013L6.537 4.2C7.035 2.733 8.09 2 9.701 2h6.031zM18 18a1 1 0 100 2 1 1 0 000-2zM17 8H7.77l-.203.998H17V8zm-.998-4H9.83c-.923 0-1.258.2-1.409 1l-.225 1H17V5c0-.591-.333-.925-.998-1z'
    />
  </svg>
)

export default SvgWalker
