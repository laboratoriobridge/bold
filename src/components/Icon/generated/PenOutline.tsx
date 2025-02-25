import React from 'react'

const SvgPenOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.005 2.755c.948-.94 1.89-.94 2.828-.001 1.407 1.409-.002-.004 1.408 1.408.94.94.94 1.883-.003 2.825l-2.83 2.83-4.232-4.233 2.829-2.83zm1.411 1.41L17.001 5.58l1.411 1.41 1.415-1.413-1.411-1.411v-.001zM12.929 6.81l4.233 4.233L7.088 21.117l-3.841.784a1.163 1.163 0 01-.89-.195c-.266-.186-.37-.516-.312-.993l.81-3.828L12.93 6.81h-.001zm0 2.84l-7.95 7.952-.71 2.12 2.12-.71 7.952-7.95-1.411-1.411-.001-.001z'
    />
  </svg>
)

export default SvgPenOutline
