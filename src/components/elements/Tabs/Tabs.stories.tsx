import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withRouter } from '../../../stories-addons/withRouter'

import { TabLink, Tabs } from './Tabs'

storiesOf('Components/Tabs', module)
    // @ts-ignore
    .addParameters({
        info: {
            text: `
                Active é obtido através da prop <code>active</code> ou caso ocorra um match entre a URL
                atual e o link (Quarto item).
            `,
        },
    })
    .addDecorator(withRouter(['/test-4'], 1))
    .add('default', () => (
        <Tabs>
            <TabLink to='/test-1'>First item</TabLink>
            <TabLink to='/test-2' active>Second item</TabLink>
            <TabLink to='/test-3'>Third item</TabLink>
            <TabLink to='/test-4'>Fourth item</TabLink>
            <TabLink to='/test-5' disabled>Disabled item</TabLink>
        </Tabs>
    ))
