import React from 'react'

const SvgOpenDoor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M5.999 2H17.99c1.333 0 2 .667 2.004 2v15.996c-.003 1.33-.671 1.998-2.004 2.004-1.998.009-9.982.009-11.996 0-1.342-.006-2.007-.674-1.995-2.004V4C4 2.667 4.666 2 6 2h-.001zm7.731 13.754c-.172.311-.455.577-.848.797L6 20.005h12v-16h-3.972l-.043 10.766a1.97 1.97 0 01-.255.983zM10.995 10a1 1 0 100-2 1 1 0 000 2z'
    />
  </svg>
)

export default SvgOpenDoor
