import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { IconButtonLink } from './IconButtonLink'

storiesOf('Components', module)
    .addDecorator(withPropTypes(`
    Botão que renderiza um link com a tag <a> ao invés de um <button>.
    `))
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
