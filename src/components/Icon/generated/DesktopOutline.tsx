import React from 'react'

const SvgDesktopOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M15 18.007l1 1.997h1c.667 0 1 .332 1 .998 0 .665-.333.998-1 .998H7c-.667 0-1-.333-1-.998 0-.666.333-.998 1-.998h1l1-1.997H4.014C2.671 18.007 2 17.342 2 16.01V4.033c0-1.322.667-1.987 2-1.996 1.25-.01 6.596-.077 16.04-.002 1.307.01 1.96.676 1.96 1.998V16.01c0 1.33-.667 1.996-2 1.996h-5v.001zM4 4.033v7.985h16V4.033H4zm0 9.982v1.996h16v-1.996H4zm7 3.992l-1 1.997h4l-1-1.997h-2z'
    />
  </svg>
)

export default SvgDesktopOutline
