import { Breadcrumbs, Link } from '../../../../lib'

function BreadcrumbDemo() {
  return (
    <Breadcrumbs>
      <Link color='inherit' textDecoration='none' href='/'>
        First level
      </Link>
      <Link color='inherit' textDecoration='none' href='/second/'>
        Second level
      </Link>
      <Link color='inherit' textDecoration='none' href='/second/third/'>
        Third level
      </Link>
      <Link color='inherit' textDecoration='none' href='/second/third/fourth/'>
        Fourth level
      </Link>
    </Breadcrumbs>
  )
}

export default BreadcrumbDemo
