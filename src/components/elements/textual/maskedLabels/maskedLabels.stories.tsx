import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Cep, Cpf, Telefone } from './maskedLabels'

storiesOf('Textual', module)
    .add('Telefone', () => (
        <Telefone value={text('value', '47997773734')} />
    ))
    .add('Cep', () => (
        <Cep value={text('value', '88040420')} />
    ))
    .add('Cpf', () => (
        <Cpf value={text('value', '18247075620')} />
    ))
