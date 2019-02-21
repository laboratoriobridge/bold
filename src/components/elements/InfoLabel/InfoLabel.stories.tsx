import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { InfoLabel } from './InfoLabel'

storiesOf('Components/InfoLabel', module)
    .add('default', () => (
        <>
            <InfoLabel title={text('title', 'Nome')} placeholder={text('placeholder', '-')}>
                João da Silva
            </InfoLabel>
            <InfoLabel title={text('title', 'Nome')} placeholder={text('placeholder', '-')} />
        </>
    ))
