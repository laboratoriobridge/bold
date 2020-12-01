import React from 'react'

const SvgRoadOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M11 19v-3h2v5h-2.001v-2H11zm2-9v4h-2v-4h2zm2-4.69L14.377 3h.356c1.029 0 1.925.703 2.175 1.704l4.058 14.898A1.126 1.126 0 0119.88 21h-.61l-.54-2L15 5.31zM13 3v5h-2V3h2zM4.73 21h-.609a1.125 1.125 0 01-1.087-1.398L7.092 4.704A2.243 2.243 0 019.267 3h.356L9 5.31 5.27 19l-.54 2z'
    />
  </svg>
)

export default SvgRoadOutline
