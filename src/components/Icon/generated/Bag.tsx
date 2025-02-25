import React from 'react'

const SvgBag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2C8.687 2 6.002 4.119 6.002 7H2v13.108c0 1.25.667 1.874 2 1.874 9.333.023 14.667.023 16 0 1.333-.024 2-.648 2-1.874V7h-3.998c0-2.881-2.688-5-6.002-5zm.002 1.896c2.108 0 3.82 1.27 3.82 3.104H8.186c0-1.834 1.707-3.104 3.816-3.104zm3.82 4.98h2.18c-.003 3.104-2.688 5.62-6 5.62s-5.997-2.517-6-5.62h2.184c.003 1.973 1.711 3.573 3.818 3.573 2.106 0 3.814-1.6 3.818-3.574z'
    />
  </svg>
)

export default SvgBag
