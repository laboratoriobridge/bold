import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'
import { VFlow } from '../../../layout/Flow/VFlow'
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
        <VFlow>
            <InputIconDecorator
                icon='search'
                position={select('position', positionOptions, 'right')}
                onClick={action('icon-clicked')}
            >
                <TextInput />
            </InputIconDecorator>

            <InputIconDecorator
                icon='search'
                position={select('position', positionOptions, 'right')}
            >
                <TextInput />
            </InputIconDecorator>
        </VFlow>
    ))
