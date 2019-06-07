import { Paginator } from '../../../../lib'

function PaginatorEx() {
  return <Paginator page={4} total={20} onChange={console.log} />
}

export default PaginatorEx
