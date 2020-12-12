import React from 'react'

const SvgCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M8.707 16.213a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414L7.294 6.21a1 1 0 111.414 1.414L4.414 11.92l4.293 4.293zm6.587 0l4.293-4.293-4.294-4.295a1 1 0 111.414-1.414l5.001 5.002a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414zm-4.647 3.57c-.656-.118-.926-.504-.81-1.158l2.43-13.788c.113-.657.5-.927 1.16-.81.662.116.932.502.81 1.158l-2.43 13.785c-.117.66-.503.93-1.16.813z'
    />
  </svg>
)

export default SvgCode
