import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'
import { Type } from '../Button/ButtonSkins'

import { ButtonLink } from './ButtonLink'
import * as Doc from './ButtonLink.md'

const typeOptions: { [key in Type]: string } = {
    'normal': 'normal',
    'primary': 'primary',
}

storiesOf('Components/Buttons', module)
    .addDecorator(withPropTypes(Doc))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('ButtonLink', () => (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <ButtonLink
                to={text('to', '/')}
                label={text('label', 'LINK')}
                type={select('type', typeOptions, 'normal')}
            />
        </MemoryRouter>
    ))
