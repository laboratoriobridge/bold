import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'
import { TextInput } from '../TextInput/TextInput'

import { InputIconDecorator } from './InputIconDecorator'

const positionOptions = {
    'left': 'left',
    'right': 'right',
}

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('InputIconDecorator', () => (
        <InputIconDecorator
            icon='lupa'
            position={select('position', positionOptions, 'right')}
            onClick={action('icon-clicked')}
        >
            <TextInput />
        </InputIconDecorator>
    ))
