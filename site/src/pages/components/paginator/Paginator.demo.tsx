import { Paginator } from 'bold-ui'
import React from 'react'

function PaginatorEx() {
  return <Paginator page={4} total={20} onChange={console.log} />
}

export default PaginatorEx
