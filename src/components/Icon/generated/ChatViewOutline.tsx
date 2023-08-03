import React from 'react'

const SvgChatViewOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M2 4v12.797l3-3.083h3.118c.132-.71.37-1.382.7-2H5a2 2 0 00-1 .268V4h10v4.07a7.06 7.06 0 012 0V4a2 2 0 00-2-2H4a2 2 0 00-2 2z' />
    <path d='M12 8a1 1 0 11-2 0 1 1 0 012 0zM8 8a1 1 0 11-2 0 1 1 0 012 0z' />
    <path
      clipRule='evenodd'
      d='M15 10a5 5 0 014.178 7.747l.095.096 2.483 2.492c.393.447.243 1.013-.087 1.342-.33.328-.896.469-1.316.054l-.044-.043-2.532-2.53A5 5 0 1115 10zm0 2a3 3 0 100 6 3 3 0 000-6z'
    />
  </svg>
)

export default SvgChatViewOutline
