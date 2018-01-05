import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'
import { CheckboxField } from './CheckboxField'

storiesOf('Form', module)
    .addDecorator(withPropTypes(`
    São usados quando há uma lista de opções e o usuário pode selecionar múltiplas escolhas, incluindo todas ou nenhuma.

    ### BOAS PRÁTICAS:
    - Checkboxes são desmarcados por default.
    - A seleção deve acontecer tanto pelo clique diretamente na caixa ou pelo click na label.
    - Labels aparecem à direita da caixa de seleção.

    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('CheckboxField', () => (
        <CheckboxField
            name='check'
            disabled={boolean('disabled', false)}
            label={text('label', 'Component label')}
        />
    ))
