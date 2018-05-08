import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { IconDropdown } from './IconDropdown'

const options = [
    {
        title: 'Option 1',
        onClick: action('Option 1 selected'),
    },
    {
        title: 'Option 2',
        onClick: action('Option 2 selected'),
    },
]

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('IconDropdown', () => (
        <IconDropdown options={options} icon={'triangleDown'} />
    ))
