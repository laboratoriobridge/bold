import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'
import { VFlow } from '../../../layout/Flow/VFlow'

import { MaskedField } from './MaskedField'
import * as Doc from './MaskedField.md'
import { CpfField, TelefoneField } from './maskedFields'

storiesOf('Form/Fields', module)
    .addDecorator(withPropTypes(Doc))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('MaskedField', () => (
        <VFlow>
            <MaskedField
                mask={['(', /\d/, /\d/, /\d/, ')']}
                name='generico'
                label='Masked Field Genérico'
                disabled={boolean('disabled', false)}
                guide={boolean('guide', true)}
                keepCharPositions={boolean('keepCharPositions', false)}
            />
            <CpfField
                name='cpf'
                label='CPF'
                disabled={boolean('disabled', false)}
                guide={boolean('guide', true)}
                keepCharPositions={boolean('keepCharPositions', false)}
            />
            <TelefoneField
                name='telefone'
                label='Telefone'
                disabled={boolean('disabled', false)}
                guide={boolean('guide', true)}
                keepCharPositions={boolean('keepCharPositions', false)}
            />
        </VFlow>
    ))
