import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withTheme } from '../../../stories-addons/withTheme'
import { withPropTypes } from '../../../stories-addons/withPropTypes/index'
import { Checkbox } from './Checkbox'

storiesOf('Components', module)
    .addDecorator(withPropTypes(`
    São usados quando há uma lista de opções e o usuário pode selecionar múltiplas escolhas, incluindo todas ou nenhuma.

    ### BOAS PRÁTICAS:
    - Checkboxes são desmarcados por default.
    - A seleção deve acontecer tanto pelo clique diretamente na caixa ou pelo click na label.
    - Labels aparecem à direita da caixa de seleção.

    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Checkbox', () =>
        <Checkbox
            name='check'
            disabled={boolean('disabled', false)}
            label={text('label', 'Component label')}
        />
    )
