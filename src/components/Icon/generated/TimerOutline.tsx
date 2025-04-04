import React from 'react'

const SvgTimerOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22a8 8 0 110-16 8 8 0 010 16zm0-2a6 6 0 100-12.002A6 6 0 0012 20zm-1.005-9c.008-.667.342-1 1.005-1 .663 0 .994.333.994 1v4c0 .667-.33 1-.99 1-.661 0-.997-.333-1.009-1v-4zM10 2h3.995c.672.006 1.008.341 1.008 1.005 0 .663-.336.995-1.008.995H10c-.667 0-1-.332-1-.995 0-.664.333-.999 1-1.005zm9.121 1.707l1.411 1.411c.47.48.471.954.002 1.423-.469.47-.94.466-1.416-.009l-1.41-1.41c-.472-.472-.473-.942-.004-1.412.47-.469.942-.47 1.417-.003z'
    />
  </svg>
)

export default SvgTimerOutline
