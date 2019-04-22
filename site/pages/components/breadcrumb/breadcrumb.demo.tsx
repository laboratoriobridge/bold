import { Breadcrumb, BreadcrumbProvider, BreadcrumbNav } from '../../../../lib'
import { MemoryRouter } from 'react-router'

function BreadcrumbDemo() {
  return (
    <MemoryRouter>
      <BreadcrumbProvider>
        <Breadcrumb title='First level' />
        <Breadcrumb title='Second level' to='/second/' />
        <Breadcrumb title='Third level' to='/second/third/' />
        <Breadcrumb title='Fourth level' to='/second/third/fourth/' />
        <BreadcrumbNav />
      </BreadcrumbProvider>
    </MemoryRouter>
  )
}

export default BreadcrumbDemo
