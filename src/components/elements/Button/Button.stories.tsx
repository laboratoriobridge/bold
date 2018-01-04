import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Button, Type } from './Button'
import { withTheme } from '../../../stories-addons/withTheme'
import { withPropTypes } from '../../../stories-addons/withPropTypes'

const typeOptions: {[key in Type]: string} = {
    'normal': 'normal',
    'primary': 'primary',
    'danger': 'danger',
    'info': 'info',
    'success': 'success',
    'warning': 'warning',
    'link': 'link',
}

storiesOf('Components', module)
    .addDecorator(withPropTypes(`
    Botões expressam que alguma atividade vai acontecer quando o usuário clicar nele. São usados para iniciar uma ação, alguns exemplos incluem a ação de Adicionar, Salvar, Deletar.

    ### BOAS PRÁTICAS:
    - Não use botões como elementos de navegação. Use Links ao invés,  porque levam o usuário a uma nova página que não está associada com a ação.
    - A label do botão indica ao usuário o que vai acontecer quando ele clicar no botão. Use somente verbos que descrevem a ação, como Adicionar ou Deletar. As labels devem seguir o padrão Capitalized (apenas a primeira letra na palavra em maiúsculo).
    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Button', () => (
        <Button
            disabled={boolean('disabled', false)}
            type={select('type', typeOptions, 'normal')}
            label={text('label', 'BUTTON')}
        />
    ))
