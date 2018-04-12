import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { IconButtonLink } from './IconButtonLink'
import * as Doc from './IconButtonLink.md'

storiesOf('Components/Buttons', module)
    .addDecorator(withPropTypes(Doc))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('IconButtonLink', () => (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <IconButtonLink
                to={text('to', '/')}
                icon='pen'
            />
        </MemoryRouter>
    ))
