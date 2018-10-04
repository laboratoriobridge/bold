import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons'
import { VFlow } from '../../../layout/Flow/VFlow'

import { MaskedField } from './MaskedField'
import * as Doc from './MaskedField.md'
import { CnsField, CpfField, TelefoneField, TimeField } from './maskedFields'

storiesOf('Form/Fields', module)
    // @ts-ignore
    .addParameters({
        info: { text: Doc },
    })
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
                icon={{ icon: 'search', onClick: action('clicked') }}
            />
            <TimeField
                name='time'
                label='Time (hour:minute)'
                disabled={boolean('disabled', false)}
                guide={boolean('guide', true)}
                keepCharPositions={boolean('keepCharPositions', false)}
            />
            <CnsField
                name='CNS'
                label='CNS'
                disabled={boolean('disabled', false)}
                guide={boolean('guide', true)}
                keepCharPositions={boolean('keepCharPositions', false)}
            />
        </VFlow>
    ))
