import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withRouter, withTheme } from '../../../stories-addons'

import { Breadcrumb, BreadcrumbNav, BreadcrumbProvider } from '.'

storiesOf('Components/Breadcrumb', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
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
