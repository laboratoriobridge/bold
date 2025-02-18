import React from 'react'

const SvgBusOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      d='M3 7a1 1 0 011-1h13.764a1 1 0 01.894.553l.895-.447-.895.447 2.236 4.472a1 1 0 01.106.447V15a1 1 0 01-1 1H4a1 1 0 01-1-1V7z'
      strokeWidth={2}
    />
    <path d='M10 16a2 2 0 11-4 0 2 2 0 014 0zM18 16a2 2 0 11-4 0 2 2 0 014 0z' />
    <path d='M10 16a2 2 0 11-4 0 2 2 0 014 0zM18 16a2 2 0 11-4 0 2 2 0 014 0z' strokeWidth={2} />
    <path d='M5 8h4v4H5V8zM10 8h4v4h-4V8zM17.264 8H15v4h4l-1.736-4z' />
  </svg>
)

export default SvgBusOutline
