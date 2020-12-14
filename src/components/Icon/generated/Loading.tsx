import React from 'react'

const SvgLoading = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M12 20v-2a6 6 0 10-6-6H4a8 8 0 118 8z' />
  </svg>
)

export default SvgLoading
