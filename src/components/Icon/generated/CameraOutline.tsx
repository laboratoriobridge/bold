import React from 'react'

const SvgCameraOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M4 6.003c1.341.002 2.678.002 4.011 0l.631-1.266c.102-.262.247-.454.433-.574a1.1 1.1 0 01.675-.16h4.475c.263-.017.491.036.685.16.195.123.349.315.463.574l.62 1.266c1.338.003 2.674.003 4.007 0C21.333 6 22 6.666 22 8v10c0 1.338-.667 2.006-2 2.003-2-.004-13.989-.004-16 0-1.34.003-2.008-.665-2-2.003V8c-.008-1.333.66-1.998 2-1.997zM4 8v10h16V8h-5l-1-1.995h-4L9 8H4zm8 9.003a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z'
    />
  </svg>
)

export default SvgCameraOutline
