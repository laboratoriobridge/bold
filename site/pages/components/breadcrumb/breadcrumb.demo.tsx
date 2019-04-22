import { MemoryRouter } from 'react-router'

import { Breadcrumb, BreadcrumbNav, BreadcrumbProvider } from '../../../../lib'

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
