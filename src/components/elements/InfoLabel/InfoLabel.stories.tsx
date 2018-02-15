import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { InfoLabel } from './InfoLabel'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('InfoLabel', () => (
        <>
            <InfoLabel title={text('title', 'Nome')} placeholder={text('placeholder', '-')}>
                João da Silva
            </InfoLabel>
            <InfoLabel title={text('title', 'Nome')} placeholder={text('placeholder', '-')} />
        </>
    ))
