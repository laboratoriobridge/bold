import { useContext, useEffect, useRef } from 'react'

import { useRouter } from '../../../hooks/useRouter'
import { randomStr } from '../../../util/string'

import { BreadcrumbContext } from './BreadcrumbContext'
import { BreadcrumbEntry } from './BreadcrumbStore'

export interface BreadcrumbProps extends Pick<BreadcrumbEntry, 'title' | 'to'> {}

export function Breadcrumb(props: BreadcrumbProps) {
  const { title, to } = props
  const { match } = useRouter()
  const store = useContext(BreadcrumbContext)

  const entry = useRef({
    key: randomStr(),
    title,
    to: to || match.url,
  })

  useEffect(() => {
    store.push(entry.current)
    return () => store.pop(entry.current)
  }, [])

  return null
}
