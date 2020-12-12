import React from 'react'

const SvgQrCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M2 2h9v9H2V2zm2 2h5v5H4V4zm4 1H5v3h3V5zm-6 8h9v9H2v-9zm2 2h5v5H4v-5zm4 1H5v3h3v-3zM22 2h-9v9h9V2zm-2 2h-5v5h5V4zm-4 1h3v3h-3V5zm-3 8h3v1h-1v3h1v1h-1v3h1v1h-3v-9zm7 0h-3v2h3v-2zm-3 3h2v1h-1v2h1v1h-2v-4zm5-3h-1v2h1v-2zm-5 8h1v1h-1v-1zm3 0h-1v1h3v-6h-2v5z'
    />
  </svg>
)

export default SvgQrCode
