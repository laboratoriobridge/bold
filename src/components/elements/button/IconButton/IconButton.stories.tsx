import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { IconButton } from './IconButton'

storiesOf('Components', module)
    .addDecorator(withPropTypes(``))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('IconButton', () => (
        <IconButton
            icon='pen'
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
        />
    ))
