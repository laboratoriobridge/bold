import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'
import { Type } from '../Button/Button'

import { ButtonLink } from './ButtonLink'

const typeOptions: {[key in Type]: string} = {
    'normal': 'normal',
    'primary': 'primary',
}

storiesOf('Components', module)
    .addDecorator(withPropTypes(`
    Botão que renderiza um link com a tag <a> ao invés de um <button>.
    `))
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
