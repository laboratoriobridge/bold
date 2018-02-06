import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes/index'
import { withTheme } from '../../../../stories-addons/withTheme'

import { MaskedField } from './MaskedField'
import { CpfField, TelefoneField } from './masks'

storiesOf('Form', module)
    .addDecorator(withPropTypes(`
    A prop 'mask' é um array de strings ou expressões regulares, sendo as strings os caracteres fixos da máscara
    e as expressões regulares a expressão que pode ser digitada pelo usuário nesta posição.

    No caso do telefone, por exemplo:
    \`\`\`
    mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    \`\`\`

    Componente importado a partir de https://github.com/text-mask/text-mask.
    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('MaskedField', () => (
        <>
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
        </>
    ))
