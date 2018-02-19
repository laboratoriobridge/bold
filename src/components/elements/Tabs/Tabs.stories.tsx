import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { withRouter } from '../../../stories-addons/withRouter'

import { TabLink, Tabs } from './Tabs'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withRouter())
    .add('Tabs', () => (
        <Tabs>
            <TabLink to='/test-1'>Primeiro item</TabLink>
            <TabLink to='/test-2' active>Segundo item</TabLink>
            <TabLink to='/test-3'>Terceiro item</TabLink>
        </Tabs>
    ))
