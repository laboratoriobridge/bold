import { storiesOf } from '@storybook/react'
import React from 'react'

import { withRouter } from '../../../stories-addons'

import { Breadcrumb, BreadcrumbNav, BreadcrumbProvider } from '.'

storiesOf('Components|Breadcrumb', module)
  .addDecorator(withRouter())
  .add('default', () => (
    <BreadcrumbProvider>
      <BreadcrumbNav />

      <Breadcrumb title='First level' />
      <Breadcrumb title='Second level' to='/second/' />
      <Breadcrumb title='Third level' to='/second/third/' />
      <Breadcrumb title='Fourth level' to='/second/third/fourth/' />
    </BreadcrumbProvider>
  ))
